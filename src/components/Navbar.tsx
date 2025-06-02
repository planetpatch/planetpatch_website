// components/Navbar.tsx
"use client"; // <-- Add this for Client Component

import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Image from 'next/image';
import Link from 'next/link';
import { donateButtonStyles, modernButtonBase, contactButtonStyles } from './ui/buttons';
import { Icon } from "@iconify/react";
import { gemunuLibre } from './ui/fonts';
// FONT INITIALIZATION


// Define the structure for nav links
interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/about", label: "ABOUT" },
  { href: "/resources", label: "RESOURCES" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/updates", label: "UPDATES" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Optional: Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts or menu closes
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`dark:bg-[#122112] flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 ${gemunuLibre.className} relative z-50`}
    >
      {/* Logo section */}
      <div className="py-0">
        <Link href="/" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}> {/* Close menu if logo clicked from open menu */}
          <Image src="/home_assets/hero_image.png" alt="PlanetPatch Logo" width={56} height={56} priority />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-end gap-x-4 lg:gap-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-lg lg:text-xl font-semibold text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition-colors duration-150"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/donate"
          className={`${modernButtonBase.trim()} ${donateButtonStyles.trim()} text-sm lg:text-base px-4 py-2 sm:px-5 sm:py-2.5`}
        >
          DONATE
        </Link>
        <Link
          href="/contact"
          className={`${modernButtonBase.trim()} ${contactButtonStyles.trim()} text-sm lg:text-base px-4 py-2 sm:px-5 sm:py-2.5`}
        >
          CONTACT
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          className="p-2 rounded-md text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
        >
          {isMobileMenuOpen ? (
            <Icon icon="material-symbols:close-rounded" width="24" height="24" color="#209740" />
          ) : (
            <Icon icon="heroicons:bars-3-bottom-right-16-solid" width="16" height="16"  color="#209740"/>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-white dark:bg-[#122112] pt-20 p-6 md:hidden flex flex-col items-center overflow-y-auto"
        >
          {/* The actual close button functionality is tied to the Bars3Icon/XMarkIcon toggle in the header now */}
          <nav className="flex flex-col items-center justify-center w-full space-y-5 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="block w-full max-w-xs py-3 text-2xl font-semibold text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-slate-700 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* Grouping Buttons for consistent width and spacing */}
            {/* This div will get the space-y-5 from the parent nav, then applies its own space-y-4 */}
            <div className="w-full max-w-xs space-y-4 pt-2"> {/* pt-2 for slight extra separation */}
              <Link
                href="/donate"
                onClick={closeMobileMenu}
                className={`${modernButtonBase.trim()} ${donateButtonStyles.trim()} w-full text-lg py-3 block`} // Ensure block for full width
              >
                DONATE
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`${modernButtonBase.trim()} ${contactButtonStyles.trim()} w-full text-lg py-3 block`} // Ensure block for full width
              >
                CONTACT
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;