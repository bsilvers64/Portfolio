import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import BlobBackground from "@/components/blobBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhavansh's Portfolio",
  description:
    "Bhavansh is a full-stack developer pursuing Masters in Computer Science from ASU",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative
        pt-24 sm:pt-32 overflow-x-hidden dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <BlobBackground />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
