import type { Metadata } from 'next';
import LegalPage, { LegalList, LegalSection } from '@/components/legal/LegalPage';
import { siteConfig } from '@/config/site';

const { accessibility, business } = siteConfig;

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: `הצהרת הנגישות של ${siteConfig.name} — מחויבות לנגישות האתר והאפליקציה.`,
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="הצהרת נגישות">
      <LegalSection title="1. המחויבות שלנו">
        <p>
          {business.legalName} ({business.type}, מספר עוסק {business.registrationNumber}) רואה חשיבות
          רבה במתן שירות שוויוני לכלל הלקוחות, ופועלת להנגשת האתר והאפליקציה לאנשים עם מוגבלות, בהתאם
          לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות
          (התאמות נגישות לשירות), התשע״ג-2013.
        </p>
      </LegalSection>

      <LegalSection title="2. רמת הנגישות באתר">
        <p>
          האתר הונגש בהתאם לתקן הישראלי ת״י 5568, המבוסס על הנחיות{' '}
          <span dir="ltr">WCAG 2.0</span> של ארגון <span dir="ltr">W3C</span>, ברמת הנגישות{' '}
          <span dir="ltr">AA</span>.
        </p>
      </LegalSection>

      <LegalSection title="3. ההתאמות שבוצעו">
        <LegalList
          items={[
            'האתר ניתן להפעלה מלאה באמצעות מקלדת, וכולל סימון ברור של מיקוד המקלדת (Focus).',
            'קישור ״דילוג לתוכן הראשי״ המאפשר לעקוף את תפריט הניווט.',
            'מבנה כותרות היררכי ותקין, המאפשר ניווט נוח בקוראי מסך.',
            'תגיות ARIA ותוויות בעברית לכל הכפתורים והפקדים.',
            'האתר מוגדר בעברית ובכיוון מימין לשמאל, לזיהוי נכון על ידי טכנולוגיות מסייעות.',
            'ניגודיות צבעים מספקת בין הטקסט לרקע.',
            'אלמנטים דקורטיביים מוסתרים מקוראי מסך כדי למנוע הקראה מיותרת.',
            'האתר מכבד את העדפת המערכת להפחתת אנימציות (Reduced Motion).',
          ]}
        />
      </LegalSection>

      <LegalSection title="4. תפריט הנגישות">
        <p>
          בפינה השמאלית התחתונה של המסך מוצג כפתור נגישות קבוע, הזמין בכל עמודי האתר. לחיצה עליו
          פותחת תפריט המאפשר להתאים אישית את התצוגה:
        </p>
        <LegalList
          items={[
            'הגדלה והקטנה של גודל הטקסט.',
            'מצב ניגודיות גבוהה.',
            'הדגשת קישורים.',
            'החלפה לגופן קריא.',
            'עצירת אנימציות ומעברים.',
            'איפוס כל ההגדרות למצב ברירת המחדל.',
          ]}
        />
        <p>
          ההעדפות נשמרות בדפדפן שלכם בלבד, לצורך שמירת הבחירה בביקורים הבאים, ואינן נשלחות לשרתי
          החברה ואינן משמשות לזיהוי אישי.
        </p>
      </LegalSection>

      <LegalSection title="5. חלקים שאינם נגישים במלואם">
        <p>
          למרות מאמצינו, ייתכן שיימצאו באתר רכיבים או תכנים שטרם הונגשו במלואם, לרבות תכנים המסופקים
          על ידי צדדים שלישיים שאינם בשליטתנו. אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף, וככל
          שתיתקלו בקושי — נשמח לשמוע ולתקן.
        </p>
      </LegalSection>

      <LegalSection title="6. פניות בנושא נגישות (רכז נגישות)">
        <p>
          נתקלתם בבעיית נגישות באתר או באפליקציה? נשמח שתפנו אלינו, ונטפל בפנייה בהקדם האפשרי.
        </p>
        <dl className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold text-gray-900">שם רכז הנגישות:</dt>
            <dd>{accessibility.coordinatorName}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold text-gray-900">טלפון:</dt>
            <dd dir="ltr">{accessibility.coordinatorPhone}</dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold text-gray-900">דוא״ל:</dt>
            <dd>
              <a
                href={`mailto:${accessibility.coordinatorEmail}`}
                className="font-semibold text-blue-600 hover:underline"
              >
                {accessibility.coordinatorEmail}
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-semibold text-gray-900">כתובת:</dt>
            <dd>{business.address}</dd>
          </div>
        </dl>
        <p>
          בפנייה נא לפרט את הבעיה שנתקלתם בה, את העמוד שבו אירעה, ואת סוג המכשיר והדפדפן שבהם נעשה
          שימוש — פרטים אלה יסייעו לנו לאתר ולתקן את התקלה במהירות.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
