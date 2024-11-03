import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dim" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar>
          <NavLinks />
        </Navbar>
        {children}
        <Footer />
      </body>
    </html>
  );
}
