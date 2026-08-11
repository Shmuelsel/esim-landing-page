import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LegalList, LegalSection } from '@/components/legal/LegalPage';
import { mailtoWithSubject, siteConfig } from '@/config/site';

/**
 * Account deletion request page, required by Google Play of any app that lets
 * users create an account. The in-app route (Profile → מחיקת חשבון) is the
 * primary one; this page exists because the policy also requires a route that
 * works for someone who has already uninstalled the app.
 *
 * The URL is submitted in Play Console → App content → Data safety → Data
 * deletion, so what it describes has to stay true to what the app's
 * delete-account Edge Function actually does, and to the retention periods in
 * section 10 of the privacy policy. Change one, change the others.
 */

const { support } = siteConfig;

const DELETION_SUBJECT = 'בקשת מחיקת חשבון';

export const metadata: Metadata = {
  title: 'מחיקת חשבון',
  description: `איך מוחקים חשבון ${siteConfig.name}, מה נמחק ומה נשמר על פי דין.`,
};

export default function DeleteAccountPage() {
  return (
    <LegalPage title="מחיקת חשבון">
      <p>
        בעמוד זה מוסבר איך למחוק את חשבון {siteConfig.name} שלכם, מה נמחק, ומה אנו מחויבים לשמור
        על פי דין. יש שתי דרכים, ושתיהן מובילות לאותה תוצאה.
      </p>

      <LegalSection title="1. מחיקה עצמאית מתוך האפליקציה">
        <p>זו הדרך המהירה — המחיקה מתבצעת מיד, ללא צורך לפנות אלינו.</p>
        <LegalList
          items={[
            'פתחו את אפליקציית ClickSim וודאו שאתם מחוברים לחשבון.',
            'עברו ללשונית ״הפרופיל״.',
            'גללו לתחתית המסך ובחרו ב״מחיקת חשבון״.',
            'הקלידו ״מחק״ לאישור, ולחצו על ״מחק לצמיתות״.',
          ]}
        />
      </LegalSection>

      <LegalSection title="2. בקשת מחיקה בדוא״ל">
        <p>
          אם האפליקציה כבר אינה מותקנת אצלכם, שלחו בקשה לכתובת{' '}
          <a
            href={mailtoWithSubject(DELETION_SUBJECT)}
            className="font-semibold text-blue-600 hover:underline"
          >
            {support.email}
          </a>{' '}
          עם הנושא ״{DELETION_SUBJECT}״.
        </p>
        <p>
          שלחו את הבקשה מכתובת הדוא״ל שאיתה נרשמתם, כדי שנוכל לוודא שהבקשה אכן שלכם. ייתכן שנבקש
          פרט מזהה נוסף, כגון מספר הזמנה — לא נמחק חשבון על סמך פנייה שאיננו יכולים לאמת. נשלים את
          המחיקה בתוך 30 ימים כנדרש בדין.
        </p>
      </LegalSection>

      <LegalSection title="3. מה נמחק">
        <LegalList
          items={[
            'החשבון ופרטי ההתחברות — כתובת הדוא״ל, הסיסמה וכל קישור לחשבון גוגל.',
            'השם ופרטי הפרופיל.',
            'כל כרטיסי ה-eSIM השמורים בחשבון, לרבות ICCID, קודי QR וקודי הפעלה.',
            'הצעות מחיר שלא נוצלו.',
          ]}
        />
        <p>
          כרטיס eSIM שכבר הותקן ימשיך לפעול במכשיר עד תום תוקף החבילה. לאחר המחיקה, קוד ה-QR ופרטי
          ההתקנה שלו לא יהיו זמינים עוד — לא לכם ולא לנו.
        </p>
      </LegalSection>

      <LegalSection title="4. מה נשמר על פי דין">
        <p>
          רשומות רכישה וחשבוניות נשמרות שבע שנים, כנדרש בדיני המס וניהול הספרים בישראל. לאחר מחיקת
          החשבון רשומות אלה אינן מקושרות אליכם עוד: השם, כתובת הדוא״ל ופרטי התשלום מוסרים מהן, ונותרים
          רק הנתונים הכספיים שרשות המסים דורשת. פירוט מלא של תקופות השמירה מופיע בסעיף 10 של{' '}
          <Link href="/privacy" className="font-semibold text-blue-600 hover:underline">
            מדיניות הפרטיות
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="5. מתי המחיקה לא תתבצע מיד">
        <p>
          אם באותו רגע מתבצע תשלום בחשבון שטרם הסתיים, המחיקה תידחה עד לסיומו — אחרת עלול להישאר
          חיוב ללא חשבון שאליו ניתן להחזירו. מדובר בדקות ספורות. נסו שוב מאוחר יותר, ואם ההודעה
          חוזרת פנו אלינו ב-{support.email}.
        </p>
      </LegalSection>

      {/*
        The Play reviewer who opens this URL does not read Hebrew. The summary
        below is what keeps the submission from bouncing on "we could not verify
        the deletion process" — it is not for users, who have the Hebrew above.
      */}
      <LegalSection title="Account deletion — English summary">
        <p dir="ltr" className="text-left">
          To delete your {siteConfig.name} account, open the app, go to the{' '}
          <strong>Profile</strong> tab, scroll to the bottom and select{' '}
          <strong>Delete Account</strong>. The deletion takes effect immediately.
        </p>
        <p dir="ltr" className="text-left">
          If the app is no longer installed, email{' '}
          <a
            href={mailtoWithSubject('Account deletion request')}
            className="font-semibold text-blue-600 hover:underline"
          >
            {support.email}
          </a>{' '}
          from the address the account is registered to, with the subject{' '}
          <em>Account deletion request</em>. We complete the deletion within 30 days.
        </p>
        <p dir="ltr" className="text-left">
          Deleted: your account and sign-in details, name, all stored eSIM profiles (ICCID, QR
          codes, activation codes) and unused price quotes. Retained: purchase records and
          invoices, for seven years as Israeli tax law requires, with your name, email address and
          payment details stripped so they are no longer linked to you.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
