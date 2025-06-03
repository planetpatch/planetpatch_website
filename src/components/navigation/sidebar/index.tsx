import { JSX } from 'react'
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { navLinks } from '../navbar';
import { modernButtonBase, donateButtonStyles,contactButtonStyles } from "@/components/ui/buttons";
import { gemunuLibre } from "@/components/ui/fonts";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
          >
              
        {/* <button className="absolute right-0 p-5" onClick={toggle}>
                  <Icon icon="material-symbols:close-rounded" width="24" height="24" color="#209740" />
        </button> */}
              <nav className="flex flex-col items-center justify-center w-full space-y-5 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                    href={link.href}
                    onClick={toggle}
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
                          onClick={toggle}
                className={`${modernButtonBase.trim()} ${donateButtonStyles.trim()} w-full text-lg py-3 block`} // Ensure block for full width
              >
                DONATE
              </Link>
              <Link
                href="/contact"
                onClick={toggle}
                className={`${modernButtonBase.trim()} ${contactButtonStyles.trim()} w-full text-lg py-3 block`} // Ensure block for full width
              >
                CONTACT
              </Link>
            </div>
          </nav>

        {/* <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}>
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}>
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}>
              <p>Contacts</p>
            </Link>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Sidebar;