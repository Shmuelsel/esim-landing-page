import Image from 'next/image';
import Link from 'next/link';
import { navLinks, siteConfig } from '@/config/site';
import MobileNav from './MobileNav';

const Navbar = () => (
  <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
      <Link
        href="/"
        className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900"
      >
        <Image
          src="/logo.png"
          alt=""
          width={32}
          height={32}
          priority
          className="h-8 w-8"
        />
        {siteConfig.name}
      </Link>

      <ul className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-blue-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Link
          href="/#download"
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-200 transition-colors hover:bg-blue-700"
        >
          הורדת האפליקציה
        </Link>
        <MobileNav />
      </div>
    </div>
  </nav>
);

export default Navbar;
