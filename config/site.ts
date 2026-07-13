/**
 * Single source of truth for business identity, support channels and store links.
 *
 * Every value marked PLACEHOLDER must be replaced before go-live. The payment
 * provider's underwriting team cross-checks these against the registered
 * business record, and the store links are the entire point of the funnel.
 */
export const siteConfig = {
  name: 'ClickSim',
  url: 'https://clicksim.app',
  description:
    'ClickSim — eSIM לחו״ל. מתחברים לאינטרנט ברגע הנחיתה, שומרים על המספר הישראלי, ומשלמים מראש בלי הפתעות בחשבון.',

  business: {
    legalName: 'ClickSim',
    type: 'עוסק פטור',
    registrationNumber: '000000000', // PLACEHOLDER: מספר עוסק פטור
    address: 'PLACEHOLDER: כתובת העסק',
  },

  /**
   * Email is the single support channel. Every inquiry — installation, billing,
   * refunds, accessibility — routes to the mailbox below, so it must stay live.
   */
  support: {
    email: 'support@clicksim.app', // TODO: confirm this mailbox is live before launch
    hours: 'ימים א׳–ה׳, 09:00–18:00 (שעון ישראל)',
    responseTime: 'עד יום עסקים אחד',
  },

  stores: {
    ios: 'https://apps.apple.com/il/app/clicksim/id000000000', // PLACEHOLDER
    android: 'https://play.google.com/store/apps/details?id=com.shmuel.clicksim',
  },

  /**
   * Accessibility coordinator (רכז נגישות). Publishing these contact details is
   * required by תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות).
   */
  accessibility: {
    coordinatorName: 'PLACEHOLDER: שם רכז הנגישות',
    coordinatorPhone: 'PLACEHOLDER: טלפון רכז הנגישות',
    coordinatorEmail: 'accessibility@clicksim.app', // TODO: confirm this mailbox is live before launch
  },

  /** Shown on every legal page. Update whenever the policies change. */
  legalLastUpdated: '12 ביולי 2026',
};

export const mailtoUrl = `mailto:${siteConfig.support.email}`;

/**
 * Pre-fills the subject line so inquiries land in the mailbox already categorised.
 * Replaces the old per-channel routing — everything is email now.
 */
export const mailtoWithSubject = (subject: string) =>
  `${mailtoUrl}?subject=${encodeURIComponent(subject)}`;

/** The inquiry types offered on the support page. Each opens a pre-addressed email. */
export const supportTopics = [
  {
    label: 'התקנה והפעלה',
    description: 'ה-eSIM לא מתחבר, קוד ההתקנה לא התקבל, בעיות בהגדרות המכשיר.',
    subject: 'תמיכה — התקנה והפעלה',
  },
  {
    label: 'חבילות וחיובים',
    description: 'שאלות על חבילות גלישה, מחירים, או חיוב שלא ברור לכם.',
    subject: 'תמיכה — חבילות וחיובים',
  },
  {
    label: 'ביטולים והחזרים',
    description: 'בקשת ביטול עסקה או החזר כספי בהתאם למדיניות ההחזרים.',
    subject: 'תמיכה — ביטולים והחזרים',
  },
  {
    label: 'בירור כללי',
    description: 'כל שאלה אחרת — נשמח לענות.',
    subject: 'תמיכה — בירור כללי',
  },
];

export const navLinks = [
  { href: '/#steps', label: 'איך זה עובד' },
  { href: '/#pricing', label: 'חבילות גלישה' },
  { href: '/#compatibility', label: 'בדיקת תאימות' },
  { href: '/support', label: 'תמיכה' },
];

export const legalLinks = [
  { href: '/terms', label: 'תקנון ותנאי שימוש' },
  { href: '/privacy', label: 'מדיניות פרטיות' },
  { href: '/refund', label: 'מדיניות ביטולים והחזרים' },
  { href: '/accessibility', label: 'הצהרת נגישות' },
  { href: '/support', label: 'יצירת קשר ושירות לקוחות' },
];
