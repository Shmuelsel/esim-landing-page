import { NextResponse } from 'next/server';
import { packages } from '@/data/packages';

/**
 * Creates a Grow (Meshulam) payment process and returns the one-time payment URL.
 *
 * Grow blocks createPaymentProcess calls made from a browser, so the checkout form
 * posts here instead and we redirect the customer to the URL this route hands back.
 * That URL is only valid for 10 minutes.
 *
 * Required environment variables (see README):
 *   GROW_USER_ID    — business identifier, issued by Grow at onboarding
 *   GROW_PAGE_CODE  — payment page identifier, issued by Grow at onboarding
 *   GROW_API_BASE   — https://sandbox.meshulam.co.il while testing,
 *                     https://secure.meshulam.co.il in production
 */
const GROW_API_PATH = '/api/light/server/1.0/createPaymentProcess';

/** Grow rejects anything that is not a valid Israeli mobile number. */
const ISRAELI_MOBILE = /^05\d{8}$/;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shape Grow returns on success; `err` replaces `data` when status is 0. */
interface GrowResponse {
  status?: number;
  data?: { url?: string; processId?: string; processToken?: string };
  err?: { message?: string };
}

const fail = (message: string, status = 400) => NextResponse.json({ error: message }, { status });

export async function POST(request: Request) {
  const { GROW_USER_ID, GROW_PAGE_CODE, GROW_API_BASE } = process.env;

  if (!GROW_USER_ID || !GROW_PAGE_CODE || !GROW_API_BASE) {
    console.error('Grow credentials are missing — set GROW_USER_ID, GROW_PAGE_CODE, GROW_API_BASE');
    return fail('שירות התשלומים אינו זמין כרגע. נסו שוב מאוחר יותר או פנו לתמיכה.', 503);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail('הבקשה אינה תקינה.');
  }

  const firstName = String(body.firstName ?? '').trim();
  const lastName = String(body.lastName ?? '').trim();
  const phone = String(body.phone ?? '').replace(/[-\s]/g, '');
  const country = String(body.country ?? '').trim();
  const email = String(body.email ?? '').trim();

  // The checkbox is enforced in the UI too, but the order must not be creatable without it.
  if (body.termsAccepted !== true) return fail('יש לאשר את התקנון ותנאי השימוש.');

  if (!firstName) return fail('יש להזין שם פרטי.');
  if (!lastName) return fail('יש להזין שם משפחה.');
  if (!ISRAELI_MOBILE.test(phone)) return fail('יש להזין מספר טלפון נייד ישראלי תקין (10 ספרות).');
  if (!country) return fail('יש לבחור מדינה.');
  if (!EMAIL.test(email)) return fail('יש להזין כתובת דוא״ל תקינה.');

  // Price comes from the catalogue, never from the client.
  const pkg = packages.find((p) => p.id === body.packageId);
  if (!pkg) return fail('החבילה שנבחרה אינה קיימת.');

  const origin = new URL(request.url).origin;

  const form = new URLSearchParams({
    pageCode: GROW_PAGE_CODE,
    userId: GROW_USER_ID,
    sum: String(pkg.price),
    description: `${pkg.name} — ${pkg.data} ל-${pkg.days} ימים (${pkg.coverage})`,
    chargeType: '1',
    paymentNum: '1',
    successUrl: `${origin}/checkout/success`,
    cancelUrl: `${origin}/checkout/cancel`,
    'pageField[fullName]': `${firstName} ${lastName}`,
    'pageField[phone]': phone,
    'pageField[email]': email,
    // Grow's payment page has no country field, so it rides along as a custom field
    // and is echoed back on the success redirect.
    cField1: country,
  });

  let payload: GrowResponse;
  try {
    const response = await fetch(`${GROW_API_BASE}${GROW_API_PATH}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
    });
    payload = await response.json();
  } catch (error) {
    console.error('Grow createPaymentProcess request failed', error);
    return fail('לא הצלחנו ליצור את בקשת התשלום. נסו שוב או פנו לתמיכה.', 502);
  }

  if (payload.status !== 1 || !payload.data?.url) {
    console.error('Grow createPaymentProcess rejected the request', payload.err ?? payload);
    return fail(payload.err?.message ?? 'לא הצלחנו ליצור את בקשת התשלום. נסו שוב או פנו לתמיכה.', 502);
  }

  return NextResponse.json({ url: payload.data.url });
}
