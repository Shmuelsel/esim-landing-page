export type Category = 'europe-usa' | 'global';

export interface Package {
  id: string;
  category: Category;
  /** Plan tier, e.g. לייט / קלאסיק */
  name: string;
  /** Where the plan works, shown under the tier name */
  coverage: string;
  data: string;
  days: number;
  /** Price in ILS */
  price: number;
  features: string[];
  flag: string;
  isPopular?: boolean;
}

export const categories: { id: Category; label: string }[] = [
  { id: 'europe-usa', label: 'אירופה וארה״ב' },
  { id: 'global', label: '🌍 כל העולם' },
];

export const packages: Package[] = [
  {
    id: 'eu-5gb',
    category: 'europe-usa',
    name: 'לייט',
    coverage: '43 מדינות באירופה ובארה״ב',
    data: '5GB',
    days: 30,
    price: 45,
    features: ['תקף ב-43 מדינות', 'LTE/4G/5G', 'שיתוף אינטרנט (Hotspot)', 'ניתן לטעינה חוזרת'],
    flag: '🇪🇺',
  },
  {
    id: 'eu-12gb',
    category: 'europe-usa',
    name: 'קלאסיק',
    coverage: '43 מדינות באירופה ובארה״ב',
    data: '12GB',
    days: 30,
    price: 80,
    features: ['תקף ב-43 מדינות', 'LTE/4G/5G', 'שיתוף אינטרנט (Hotspot)', 'ניתן לטעינה חוזרת'],
    flag: '🇪🇺',
    isPopular: true,
  },
  {
    id: 'eu-18gb',
    category: 'europe-usa',
    name: 'מורחב',
    coverage: '43 מדינות באירופה ובארה״ב',
    data: '18GB',
    days: 30,
    price: 110,
    features: ['תקף ב-43 מדינות', 'LTE/4G/5G', 'שיתוף אינטרנט (Hotspot)', 'ניתן לטעינה חוזרת'],
    flag: '🇪🇺',
  },
  {
    id: 'global-5gb',
    category: 'global',
    name: 'גלובלי לייט',
    coverage: '118 מדינות ברחבי העולם',
    data: '5GB',
    days: 60,
    price: 100,
    features: ['118 מדינות', 'תקף לחודשיים', 'LTE/4G', 'שיתוף אינטרנט (Hotspot)', 'ניתן לטעינה חוזרת'],
    flag: '🌍',
  },
  {
    id: 'global-10gb',
    category: 'global',
    name: 'גלובלי פלוס',
    coverage: '118 מדינות ברחבי העולם',
    data: '10GB',
    days: 180,
    price: 150,
    features: ['118 מדינות', 'תקף לחצי שנה', 'LTE/4G', 'שיתוף אינטרנט (Hotspot)', 'ניתן לטעינה חוזרת'],
    flag: '🌍',
    isPopular: true,
  },
  {
    id: 'global-20gb',
    category: 'global',
    name: 'גלובלי מקס',
    coverage: '118 מדינות ברחבי העולם',
    data: '20GB',
    days: 365,
    price: 250,
    features: ['118 מדינות', 'תקף לשנה שלמה', 'LTE/4G', 'שיתוף אינטרנט (Hotspot)', 'ניתן לטעינה חוזרת'],
    flag: '🌍',
  },
];
