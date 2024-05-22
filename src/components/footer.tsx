import { Logo } from "@/ui/icons/logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral flex flex-col justify-center items-center py-8">
      <Link href="/" className="text-white font-bold text-2xl">
        <Logo />
      </Link>
      <div className="text-center">
        <p className="italic mt-4">
          &copy; 2024 NextJS / Tailwind / DaisyUI Template
        </p>
      </div>
    </footer>
  );
};

export default Footer;
