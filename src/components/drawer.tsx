import { ReactNode } from "react";
import MobileNavigation from "@/components/navbar/mobilenav";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

type DrawerProps = {
  children: ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer-end min-h-screen flex flex-col">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col grow justify-between ">
        <Navbar />
        {children}
        <Footer />
      </div>
      <MobileNavigation />
    </div>
  );
};

export default Drawer;
