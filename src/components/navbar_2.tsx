// components/Navbar.tsx
"use client"; // <-- Add this to make it a Client Component

import Image from 'next/image';
import Link from 'next/link';
import { Gemunu_Libre } from 'next/font/google';
import { useState } from 'react'; // <-- Import useState

// FONT INITIALIZATION
const gemunuLibre = Gemunu_Libre({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-gemunu-libre',
  display: 'swap',
});

// Define navigation links as an array for easier mapping
const navLinks = [
  { href: "/about", label: "ABOUT" },
  { href: "/therapeutic-depth", label: "THERAPEUTIC DEPTH", hasDropdown: true },
  { href: "/technology-and-data", label: "TECHNOLOGY & DATA", hasDropdown: true },
  { href: "/insights", label: "INSIGHTS" },
  { href: "/contact-us", label: "CONTACT US" },
];

const Navbar2 = () => {
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <header
      className={`flex items-center justify-between h-28 px-12 ${gemunuLibre.className}`}
    >
      <div className="py-0 px-12">
        <Link href="/">
          <Image
            src="/patravi_logo.png"
            alt="PlanetPatch Logo"
            width={144}
            height={144}
            priority
          />
        </Link>
      </div>
      <nav className="flex items-center">
        {navLinks.map((link) => {
          const isCurrentlyHovered = hoveredHref === link.href;
          const anyLinkHovered = hoveredHref !== null;

          return (
            <div
              key={link.href}
              className={`relative ${link.hasDropdown ? 'group' : ''} mx-4`} // Group for dropdowns, mx-4 for spacing
              onMouseEnter={() => setHoveredHref(link.href)}
              onMouseLeave={() => setHoveredHref(null)}
            >
              <Link
                href={link.href}
                className={`
                  block text-lg font-bold
                  text-green-600 
                  dark:text-[var(--foreground)] 
                  transition-all duration-300 ease-in-out
                  ${anyLinkHovered && !isCurrentlyHovered
                    ? 'blur-sm opacity-50 hover:!opacity-100 hover:!blur-none' // Blur and dim unhovered items, but allow them to be re-focused
                    : 'opacity-100 blur-none'
                  }
                  ${isCurrentlyHovered
                    ? 'scale-105 text-green-800 dark:!text-green-500' // Enhance hovered item
                    : 'hover:text-green-800 dark:hover:text-green-600' // Standard hover for non-blurred items
                  }
                `}
              >
                {link.label}
              </Link>
                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 shadow-lg rounded-md py-1 hidden group-hover:block">
                    <Link href={`${link.href}/sub1`} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700">Sub Link 1</Link>
                    <Link href={`${link.href}/sub2`} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700">Sub Link 2</Link>
                  </div>
                )}
             
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar2;