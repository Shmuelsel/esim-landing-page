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
    registrationNumber: '207861535',
    address: "המלך ג'ורג 12, ירושלים, ישראל",
  },

  /**
   * Email is the single support channel. Every inquiry — installation, billing,
   * refunds, accessibility — routes to the mailbox below, so it must stay live.
   */
  support: {
    email: 'support@clicksim.app', // TODO: confirm this mailbox is live before launch
    phone: '052-4329287', // Display format shown on-site
    whatsapp: '972524329287', // International digits (no +/0) for wa.me links
    hours: 'ימים א׳–ה׳, 09:00–16:00 (שעון ישראל)',
    responseTime: 'עד יום עסקים אחד',
  },

  stores: {
    ios: 'https://apps.apple.com/il/app/clicksim/id6826904474?l=he',
    android: 'https://play.google.com/store/apps/details?id=com.shmuel.clicksim',
  },

  /**
   * Contact channel for accessibility complaints, published in the accessibility
   * statement. A named רכז נגישות is only mandatory for businesses with 25+
   * employees (חוק שוויון זכויות לאנשים עם מוגבלות, סעיף 19כא), so this business
   * publishes a mailbox instead — the statement still needs somewhere to write to.
   */
  accessibility: {
    contactEmail: 'accessibility@clicksim.app', // TODO: confirm this mailbox is live before launch
  },

  /** Shown on every legal page. Update whenever the policies change. */
  legalLastUpdated: '11 באוגוסט 2026',
};

export const mailtoUrl = `mailto:${siteConfig.support.email}`;

export const whatsappUrl = `https://wa.me/${siteConfig.support.whatsapp}`;

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
  { href: '/refund', label: 'מדיניות ביטולים, החזרים ושינויים' },
  // Google Play wants the deletion route reachable without installing the app,
  // which means a real link in the footer — not only a URL in the console.
  { href: '/delete-account', label: 'מחיקת חשבון' },
  { href: '/accessibility', label: 'הצהרת נגישות' },
  { href: '/support', label: 'יצירת קשר ושירות לקוחות' },
];
