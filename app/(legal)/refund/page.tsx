import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage, { LegalList, LegalSection } from '@/components/legal/LegalPage';
import { mailtoUrl, siteConfig } from '@/config/site';

const { business, support } = siteConfig;

export const metadata: Metadata = {
  title: 'מדיניות ביטולים והחזרים',
  description: `מדיניות הביטולים וההחזרים של ${siteConfig.name} עבור חבילות eSIM.`,
};

export default function RefundPage() {
  return (
    <LegalPage title="מדיניות ביטולים והחזרים">
      <LegalSection title="1. רקע">
        <p>
          חבילת eSIM היא מוצר דיגיטלי הניתן לשימוש מיידי. מדיניות זו מבהירה מתי ניתן לבטל עסקה ולקבל
          החזר כספי, בהתאם לחוק הגנת הצרכן, התשמ״א-1981 ולתקנות מכר מרחוק. המדיניות חלה על כל רכישה
          מ-{business.legalName} ({business.type}, מספר עוסק {business.registrationNumber}).
        </p>
      </LegalSection>

      <LegalSection title="2. ביטול לפני הפעלת ה-eSIM — החזר מלא">
        <p>
          ניתן לבטל את העסקה ולקבל החזר כספי מלא בתוך <b>14 ימים</b> ממועד הרכישה, ובלבד
          שמתקיימים <b>שני</b> התנאים הבאים:
        </p>
        <LegalList
          items={[
            'ה-eSIM טרם הותקן והופעל במכשיר.',
            'לא נצרך נפח גלישה כלשהו מהחבילה.',
          ]}
        />
        <p>
          במקרה זה החברה רשאית לגבות דמי ביטול בשיעור של עד 5% ממחיר העסקה או 100 ₪ — לפי הנמוך
          מביניהם, כפי שמתיר החוק.
        </p>
      </LegalSection>

      <LegalSection title="3. לאחר הפעלת ה-eSIM — לא ניתן לביטול">
        <p>
          מרגע ש-ה-eSIM הותקן, הופעל ברשת או שנצרך ממנו נפח גלישה כלשהו, המוצר הדיגיטלי נחשב כמי
          שסופק ונצרך במלואו, ולא ניתן לבטלו או לקבל בגינו החזר — לרבות החזר יחסי בגין נפח שלא נוצל
          או ימים שנותרו בתוקף.
        </p>
        <p>
          זאת בהתאם לסעיף 14ג(ד) לחוק הגנת הצרכן, הקובע כי זכות הביטול אינה חלה על מידע כהגדרתו בחוק
          המחשבים, התשנ״ה-1995, שסופק בדרך של העברה אלקטרונית.
        </p>
      </LegalSection>

      <LegalSection title="4. תקלה טכנית">
        <p>
          אם ה-eSIM אינו פועל עקב תקלה הנובעת מהשירות (למשל קוד QR שגוי, כשל בהקצאת החבילה או היעדר
          קליטה ביעד הנתמך הנובע מתקלה בצד הספק), החברה תפעל לפתרון התקלה, ולחלופין תספק חבילה חלופית
          או החזר כספי מלא. תנאי לבחינת הפנייה:
        </p>
        <LegalList
          items={[
            'פנייה לשירות הלקוחות בתוך 30 יום ממועד הרכישה.',
            'ציון מספר ההזמנה ותיאור התקלה.',
            'שיתוף פעולה עם צוות התמיכה בביצוע בדיקות בסיסיות (איפוס רשת, הגדרות נדידת נתונים וכדומה).',
          ]}
        />
        <p>
          החזר לא יינתן במקרים שאינם באחריות החברה, לרבות: מכשיר שאינו תומך ב-eSIM, מכשיר נעול לרשת,
          מחיקת ה-eSIM על ידי המשתמש, או כיבוי נדידת נתונים במכשיר.
        </p>
      </LegalSection>

      <LegalSection title="5. כיצד מגישים בקשת ביטול או החזר">
        <LegalList
          items={[
            <>
              שולחים הודעה לכתובת{' '}
              <a href={mailtoUrl} className="font-semibold text-blue-600 hover:underline">
                {support.email}
              </a>{' '}
              עם הכותרת ״בקשת ביטול״.
            </>,
            'מציינים שם מלא, מספר הזמנה ותאריך רכישה.',
            `נענה לפנייה ${support.responseTime}.`,
            'בקשה מאושרת תזוכה לאמצעי התשלום המקורי בלבד, בתוך 14 ימים ממועד אישור הביטול.',
          ]}
        />
      </LegalSection>

      <LegalSection title="6. שאלות">
        <p>
          לכל שאלה בנוגע למדיניות זו ניתן לפנות אלינו בעמוד{' '}
          <Link href="/support" className="font-semibold text-blue-600 hover:underline">
            שירות הלקוחות
          </Link>
          . מדיניות זו מהווה חלק בלתי נפרד מ
          <Link href="/terms" className="font-semibold text-blue-600 hover:underline">
            תקנון ותנאי השימוש
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
