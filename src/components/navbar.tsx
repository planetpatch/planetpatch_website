// components/Navbar.tsx
// import Image from 'next/image';
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
}

const navLinks: NavLink[] = [
  { href: "/about", label: "ABOUT" },
  { href: "/resources", label: "RESOURCES" },
  { href: "/updates", label: "UPDATES" },
  { href: "/community", label: "COMMUNITY" },
];

// Base classes for modern minimalistic buttons
// Includes padding, font, rounding, custom green glow, transform for animation, transition properties,
// hover effects (scale, glow enhancement), and focus-visible states for accessibility.
// Green-400 RGB: (52, 211, 153)
const modernButtonBase = `
  px-5 py-2 text-xl font-bold rounded-md 
  shadow-[0_0_8px_rgba(52,211,153,0.3)] 
transition-all duration-200 ease-in-out  hover:shadow-[0_0_12px_rgba(52,211,153,0.5)] 
  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  dark:hover:shadow-[0_0_12px_rgba(52,211,153,0.8)] 
`;

// Specific styles for the Donate button (from your modifications)
const donateButtonStyles = `

bg-green-600 border border-green-600  text-white
hover:text-green-600 hover:bg-white
focus-visible:ring-green-500

`;

// Specific styles for the Contact button (from your modifications)
const contactButtonStyles = 
`bg-white text-green-600 
border border-green-600
hover:border-green-600
focus-visible:ring-green-500`;


const Navbar = () => {
  return (
    <header
      className={`dark:bg-[#122112]  flex items-center justify-between px-6 md:px-12 py-6 ${gemunuLibre.className} relative z-50`}
    >
      {/* Logo section */}
      <div className="py-0">
        <Link href="/">
          PlanetPatch
          {/* <Image src="/patravi_logo.png" alt="PlanetPatch Logo" width={124} height={124} priority /> */}
        </Link>
      </div>

      {/* Navigation Links and CTA buttons section */}
      <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 md:gap-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xl font-semibold text-green-600 hover:text-green-900 dark:text-[var(--foreground)] dark:hover:text-green-600 transition-colors duration-150"
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/donate"
          className={`${modernButtonBase.trim()} ${donateButtonStyles}`}
        >
          DONATE
        </Link>

        <Link
          href="/contact-us"
          className={`${modernButtonBase.trim()} ${contactButtonStyles}`}
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;