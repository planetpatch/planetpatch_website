import { JSX } from 'react'
import Link from "next/link";
import { navLinks } from '../navbar';
import { modernButtonBase, donateButtonStyles, contactButtonStyles } from "@/components/ui/buttons";
import { gemunuLibre } from '@/components/ui/fonts';

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <div
      className={`fixed inset-0 w-full h-full min-h-screen z-40 bg-white/95 dark:bg-[#1e4f2c]/95 backdrop-blur-md 
      flex flex-col items-center justify-center pt-24 pb-8 px-6 transition-all duration-300 ease-in-out md:hidden ${
        isOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      <nav className={`flex flex-col items-center justify-center w-full space-y-6 text-center ${gemunuLibre.className}`}>
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={toggle}
            className="block w-full max-w-xs py-3 text-2xl font-semibold text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950/50 rounded-md transition-colors"
          >
            {link.label}
          </Link>
        ))}
        {/* Grouping Buttons for consistent width and spacing */}
        <div className="w-full max-w-xs space-y-4 pt-2">
          <Link
            href="/donate"
            onClick={toggle}
            className={`${modernButtonBase.trim()} ${donateButtonStyles.trim()} w-full text-lg py-3 block text-center`}
          >
            DONATE
          </Link>
          <Link
            href="/contact"
            onClick={toggle}
            className={`${modernButtonBase.trim()} ${contactButtonStyles.trim()} w-full text-lg py-3 block text-center`}
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;