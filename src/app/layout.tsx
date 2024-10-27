import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { Meteors } from "@/components/ui/meteors";
import "./globals.css";

export const metadata: Metadata = {
  title: " Kartik Yadav - Full Stack Web Developer",
  description:
    "Kartik Yadav is a Full Stack Web Developer specializing in building impactful web applications from scratch. Explore my portfolio to see my projects and skills.",
  keywords:
    "Kartik Yadav, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js",
  authors: [{ name: "Kartik Yadav" }],
  openGraph: {
    title: "Kartik Yadav - Full Stack Web Developer",
    description:
      "Explore the portfolio of Kartik Yadav, showcasing innovative web applications and development skills.",
    // url: "https://kartikyadav.onrender.com",
    siteName: "Kartik Portfolio",
    // images: [
    //   {
    //     url: "https://ucarecdn.com/-/preview/1000x996/",
    //     width: 800,
    //     height: 600,
    //     alt: "Kartik Yadav Portfolio",
    //   },
    // ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className="bg-white dark:bg-black relative overflow-hidden">
          <Toaster position="bottom-right" />
          <Theme className="dark:!bg-black">
            <div className="relative z-10">
              <Navbar />
              {children}
              <Analytics />
              <Footer />
            </div>
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
              <Meteors number={100} className="opacity-50" />
            </div>
          </Theme>
        </body>
      </DarkModeProvider>
    </html>
  );
}
