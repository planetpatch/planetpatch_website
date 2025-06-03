import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";
const Nav1 = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
                      >
                    <Icon icon="heroicons:bars-3-bottom-right-16-solid" width="36" height="36"  color="#209740"/>      
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav1;