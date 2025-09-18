import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { modernButtonBase, donateButtonStyles,contactButtonStyles } from "@/components/ui/buttons";
import { gemunuLibre } from "@/components/ui/fonts";
import { Icon } from "@iconify/react/dist/iconify.js";

export interface NavLink {
    href: string;
    label: string;
  }
  
export const navLinks: NavLink[] = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/resources", label: "RESOURCES" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/updates", label: "UPDATES" },
  ];


  const Navbar = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => {
      
    return (
        <header
            className={`dark:bg-[#1e4f2c] flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 ${gemunuLibre.className} relative z-50`}
        >
           <Logo />
            <button
                type="button"
                className="inline-flex items-center md:hidden"
                onClick={toggle}
            >
{isOpen ? (
                <Icon icon="material-symbols:close-rounded" width="36" height="36" color="#209740" /> // Or your preferred X icon
             ) : (
                <Icon icon="heroicons:bars-3-bottom-right-16-solid" width="36" height="36" color="#209740" />
             )}
            </button>
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
        </header>
    )
}



export default Navbar;