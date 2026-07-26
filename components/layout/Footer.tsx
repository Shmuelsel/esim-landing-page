import Link from 'next/link';
import { legalLinks, mailtoUrl, navLinks, siteConfig, whatsappUrl } from '@/config/site';

const { business, support } = siteConfig;

const Footer = () => (
  <footer className="border-t border-gray-800 bg-gray-900 text-gray-300">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 border-b border-gray-800 pb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">{siteConfig.name}</h2>
          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            eSIM לחו״ל שמותקן באפליקציה תוך דקות. בלי להחליף כרטיס סים, בלי הפתעות בחשבון.
          </p>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="mb-3 font-semibold text-white">
            ניווט
          </h2>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-blue-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-legal">
          <h2 id="footer-legal" className="mb-3 font-semibold text-white">
            מידע משפטי
          </h2>
          <ul className="space-y-2 text-sm">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-blue-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-semibold text-white">שירות לקוחות</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={mailtoUrl} className="transition-colors hover:text-blue-400">
                {support.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-colors hover:text-blue-400"
              >
                וואטסאפ: <span dir="ltr">{support.phone}</span>
              </a>
            </li>
            <li className="text-gray-400">{support.hours}</li>
            <li className="text-gray-400">זמן מענה: {support.responseTime}</li>
          </ul>
        </div>
      </div>

      {/* Business identity — required by the payment provider's underwriting. */}
      <div className="flex flex-col gap-2 pt-8 text-center text-xs text-gray-500 sm:flex-row sm:justify-between sm:text-right">
        <p>
          {business.legalName} · {business.type} · מספר עוסק {business.registrationNumber}
        </p>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. כל הזכויות שמורות.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
