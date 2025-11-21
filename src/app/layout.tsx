import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NavLinks from "@/components/NavLinks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "YK Innovations | Innovative Digital Solutions",
    template: "%s | YK Innovations",
  },
  description: "Transform your business with cutting-edge digital solutions. We specialize in web development, mobile apps, cloud solutions, and enterprise software.",
  keywords: ["web development", "mobile apps", "digital solutions", "software development", "cloud services"],
  authors: [{ name: "YK Innovations" }],
  creator: "YK Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ykinnovations.com/",
    title: "YK Innovations | Innovative Digital Solutions",
    description: "Transform your business with cutting-edge digital solutions.",
    siteName: "YK Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "YK Innovations | Innovative Digital Solutions",
    description: "Transform your business with cutting-edge digital solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
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
