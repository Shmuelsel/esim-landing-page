// data/packages.ts

export type Category = 'europe&usa' | 'global'; // הגדרת הקטגוריות המותרות

export interface Package {
  id: string;
  category: Category; // <--- השדה החדש
  region: string;
  data: string;
  days: number;
  price: number;
  features: string[];
  flag: string;
  isPopular?: boolean;
}

export const packages: Package[] = [
  // --- חבילות אירופה ---
  {
    id: 'eu-5gb',
    category: 'europe&usa', // שיוך לאירופה
    region: 'לייט',
    data: '5GB',
    days: 30,
    price: 45,
    features: ['תקף ב-43 מדינות', 'LTE/4G/5G', 'Hotspot פעיל', 'טעינה חוזרת'],
    flag: '🇪🇺',
  },
  {
    id: 'eu-10gb',
    category: 'europe&usa',
    region: 'קלאסיק',
    data: '12GB',
    days: 30,
    price: 80,
    features: ['תקף ב-43 מדינות', 'LTE/4G/5G', 'Hotspot פעיל', 'טעינה חוזרת'],
    flag: '🇪🇺',
    isPopular: true
  },
  {
    id: 'eu-unlimited',
    category: 'europe&usa',
    region: 'מורחב',
    data: '18GB',
    days: 30,
    price: 110,
    features: ['תקף ב-43 מדינות', 'LTE/4G/5G', 'Hotspot פעיל', 'טעינה חוזרת'],
    flag: '🇪🇺',
  },

  // --- חבילות גלובליות ---
  {
    id: 'global-5gb',
    category: 'global', // שיוך גלובלי
    region: 'כל העולם',
    data: '5GB',
    days: 60,
    price: 100,
    features: ['תקף לחודשיים', '118 מדינות', 'LTE/4G', 'Hotspot פעיל', 'טעינה חוזרת'],
    flag: '🌍',
  },
  {
    id: 'global-10gb',
    category: 'global', // שיוך גלובלי
    region: 'כל העולם',
    data: '10GB',
    days: 180,
    price: 150,
    features: ['תקף לחצי שנה', '118 מדינות', 'LTE/4G', 'Hotspot פעיל', 'טעינה חוזרת'],
    flag: '🌍',
  },
  {
    id: 'global-20gb',
    category: 'global', // שיוך גלובלי
    region: 'כל העולם',
    data: '20GB',
    days: 365,
    price: 250,
    features: ['תקף לשנה שלמה', '118 מדינות', 'LTE/4G', 'Hotspot פעיל', 'טעינה חוזרת'],
    flag: '🌍',
  },
];