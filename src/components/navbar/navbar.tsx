import Link from "next/link";
import { navLinks } from "@/constants/navLinks";
import Button from "@/ui/button";
import { Logo } from "@/ui/icons/logo";
import { MenuIcon } from "@/ui/icons/menuIcon";

const Navbar = () => {
  return (
    <nav className="container navbar p-0 bg-base-100 flex-row-reverse px-4 lg:flex-row max-w-[1100px]  py-4 mx-auto">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <MenuIcon
            className="inline-block w-6 h-6 stroke-current"
            fill="#000"
          />
        </label>
      </div>
      <div className="flex-1">
        <Link href="/">
          <Logo fill="#fff" />
        </Link>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal gap-8 px-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="relative text-center font-semibold text-lg w-fit my-auto block mb-0"
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Button link="#contact">Contact</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
