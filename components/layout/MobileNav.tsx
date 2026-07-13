'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/config/site';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="תפריט"
        className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
          {isOpen ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-b border-gray-100 bg-white shadow-lg"
        >
          <ul className="container mx-auto flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-medium text-gray-700 hover:text-blue-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
