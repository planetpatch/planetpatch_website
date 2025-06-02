import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
          >
              
        <button className="absolute right-0 p-5" onClick={toggle}>
                  <Icon icon="material-symbols:close-rounded" width="24" height="24" color="#209740" />
        </button>

        <ul className="sidebar-nav text-center leading-relaxed text-xl">
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
        </ul>
      </div>
    </>
  );
};

export default Sidebar;