export interface PhoneBrand {
  brand: string;
  models: string[];
}

/** Non-exhaustive: the *#06# / EID check on the site is the authoritative test. */
export const supportedPhones: PhoneBrand[] = [
  {
    brand: 'Apple',
    models: [
      'iPhone 15 / Plus / Pro / Pro Max',
      'iPhone 14 / Plus / Pro / Pro Max',
      'iPhone 13 / mini / Pro / Pro Max',
      'iPhone 12 / mini / Pro / Pro Max',
      'iPhone 11 / Pro / Pro Max',
      'iPhone XR / XS / XS Max',
      'iPhone SE (2020 / 2022)',
    ],
  },
  {
    brand: 'Samsung',
    models: [
      'Galaxy S24 / S24+ / Ultra',
      'Galaxy S23 / S23+ / Ultra',
      'Galaxy S22 / S22+ / Ultra',
      'Galaxy S21 / S21+ / Ultra',
      'Galaxy S20 / S20+ / Ultra',
      'Galaxy Z Flip (כל הדגמים)',
      'Galaxy Z Fold (כל הדגמים)',
    ],
  },
  {
    brand: 'Google',
    models: [
      'Pixel 8 / 8 Pro',
      'Pixel 7 / 7 Pro',
      'Pixel 6 / 6 Pro',
      'Pixel 5',
      'Pixel 4 / 4 XL',
    ],
  },
];
