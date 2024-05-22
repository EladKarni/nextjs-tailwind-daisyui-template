import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-8 text-center flex flex-col justify-center">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.url}
            className=" font-semibold drop-shadow-sm text-xl"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
