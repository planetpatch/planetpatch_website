// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Gemunu_Libre } from 'next/font/google';

// FONT INITIALIZATION
const gemunuLibre = Gemunu_Libre({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-gemunu-libre',
  display: 'swap',
});

// Define the structure for nav links
interface NavLink {
  href: string;
  label: string;
  // Dropdown properties are removed as per your current navLinks structure
  // hasDropdown?: boolean;
  // dropdownItems?: DropdownItem[];
}

// Updated navLinks (CONTACT US is now a CTA button)
const navLinks: NavLink[] = [
  { href: "/about", label: "ABOUT" },
  { href: "/resources", label: "RESOURCES" },
  { href: "/updates", label: "UPDATES" },
  { href: "/community", label: "COMMUNITY" },
];

// Common button classes for 8-bit style
const eightBitButtonBase = "border-2 border-black rounded-sm transition-all duration-100 flex items-center justify-center";
const eightBitButtonShadow = "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";
const eightBitButtonHoverActive = "hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px]";

const Navbar = () => {
  return (
    <header className={`flex items-center justify-between py-4 px-6 md:px-12 ${gemunuLibre.className} relative z-50 min-h-28`}>
      {/* Logo */}
      <div className="py-0 self-start md:self-center"> {/* Align logo to start on small screens if right side wraps */}
        <Link href="/">
          <Image src="/patravi_logo.png" alt="PlanetPatch Logo" width={144} height={144} priority />
        </Link>
      </div>

      {/* Right Section: Patcher Action Pad button + Nav + CTAs */}
      <div className="flex flex-col items-end space-y-3 text-right"> {/* Aligns content to the far right and stacks them */}
        
        {/* Patcher Action Pad Button */}
        <div>
          <Link
            href="/patcher-action-pad" // Update this href as needed
            className={`${eightBitButtonBase} ${eightBitButtonShadow} ${eightBitButtonHoverActive} px-5 py-2 text-base font-bold text-white bg-green-600 hover:bg-green-700`}
          >
            PATCHER ACTION PAD
          </Link>
        </div>

        {/* Navigation Links and CTA buttons */}
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 md:gap-x-6"> {/* Using gap for spacing, justify-end if it wraps */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xl font-semibold text-green-600 hover:text-green-900 dark:text-[var(--foreground)] dark:hover:text-green-600 transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Buttons */}
          <Link
            href="/donate" // Update this href as needed
            className={`${eightBitButtonBase} ${eightBitButtonShadow} ${eightBitButtonHoverActive} px-5 py-2 text-xl font-bold text-white bg-green-600 hover:bg-green-700`}
          >
            DONATE
          </Link>

          <Link
            href="/contact-us" // This was previously a navLink, now a styled CTA
            className={`${eightBitButtonBase} ${eightBitButtonShadow} ${eightBitButtonHoverActive} px-5 py-2 text-xl font-bold text-green-600 bg-white hover:bg-gray-100`}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;








