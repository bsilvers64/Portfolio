import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bhavansh's Portfolio",
  description:
    "Bhavansh is a full-stack developer pursuing Masters in Computer Science from ASU",
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
        pt-24 sm:pt-32 overflow-x-hidden`}
      >
        {/* Red/Pink Blob */}
        <div
          className="absolute top-[-6rem] 
          right-[-10rem] sm:right-[-5rem] md:right-0 lg:right-[5rem]
          h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem]
          rounded-full blur-[8rem] 
          bg-[#FF6B6B] -z-10
          animate-morphBlob"
        ></div>

        {/* Blue/Purple Blob */}
        <div
          className="absolute top-[-1rem]
        left-[-10rem] sm:left-[-5rem] md:left-0 lg:left-[5rem]
        h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem]
        rounded-full blur-[9rem]
        bg-[#4ECDC4] -z-10
        animate-morphBlob animation-delay-2000"
        ></div>

        {/* New Teal/Green Blob */}
        <div
          className="absolute top-[15rem]
          left-[20rem] 
          h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem]
          rounded-full blur-[9rem]
          bg-[#FFB347] opacity-70 -z-10
          animate-morphBlob animation-delay-4000"
        ></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
