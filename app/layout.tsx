import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

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
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px]
        pt-24 sm:pt-32`}
      >
        <div
          className="absolute top-[-6rem] 
  right-[-10rem] sm:right-[-5rem] md:right-0 lg:right-[5rem]
  h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem]
  rounded-full blur-[10rem] 
  bg-[#ce7f83] -z-10
  animate-morphBlob"
        ></div>
        <div
          className="absolute top-[-1rem]
  left-[-10rem] sm:left-[-5rem] md:left-0 lg:left-[5rem]
  h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem]
  rounded-full blur-[10rem]
  bg-[#a19bce] -z-10
  animate-morphBlob animation-delay-2000"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
