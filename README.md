This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment variables

The `/checkout` page hands the order to Grow (Meshulam) for payment. Grow blocks
`createPaymentProcess` calls made from a browser, so `app/api/checkout/route.ts` makes the
call server-side and needs these set — in `.env.local` for development, and in the hosting
provider's environment settings for production:

| Variable | Description |
| --- | --- |
| `GROW_USER_ID` | Business identifier, issued by Grow at onboarding. |
| `GROW_PAGE_CODE` | Payment page identifier, issued by Grow at onboarding. |
| `GROW_API_BASE` | `https://sandbox.meshulam.co.il` while testing, `https://secure.meshulam.co.il` in production. |

Without them the checkout returns a 503 and tells the customer to contact support, so the
rest of the site still builds and runs. Note that Grow requires `successUrl` to be HTTPS,
so the full payment round-trip cannot be exercised against `http://localhost`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
