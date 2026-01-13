import { Package } from '@/data/packages';

// החלף את המספר הזה במספר שלך (ללא הסימן פלוס)
const PHONE_NUMBER = '972524329287'; 

export const generateWhatsAppLink = (pkg: Package) => {
  // ההודעה שהלקוח ישלח לך
  const message = `היי, אני מעוניין להזמין את חבילת *${pkg.region}* (${pkg.data}) במחיר ${pkg.price}₪. אשמח לקבל פרטים!`;
  
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};