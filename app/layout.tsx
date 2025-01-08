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
          className="bg-[#ce7f83] absolute top-[-6rem] 
        right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full 
        blur-[10rem] sm:w-[68.75rem] -z-10"
        ></div>
        <div
          className="bg-[#a19bce] absolute top-[-1rem] 
        left-[-35rem] h-[31.25rem] w-[50rem] rounded-full 
        blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem] -z-10"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
