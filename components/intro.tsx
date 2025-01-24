"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { RxNotionLogo } from "react-icons/rx";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView({ sectionName: "Home", threshold: 0.5 });
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-32 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-4"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile1.jpg"
              alt="Bhavansh potrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 rounded-full border-[0.15rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-4xl absolute right-0 bottom-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Bhavansh.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with a passion
        for{" "}
        <span className="italic">crafting high-quality, elegant web apps</span>.
        My expertise lies in <span className="underline">React (Next.js)</span>{" "}
        and modern JavaScript.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center 
      gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus-scale-110 hover:scale-110 hover:bg-gray-950 
        active:scale-105 active:bg-gray-950 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="/BhavanshResume_.pdf"
          className="group bg-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus-scale-110 hover:scale-110 hover:text-gray-950 
        active:scale-105 active:bg-gray-950 transition borderBlack dark:bg-white/20 
        dark:hover:bg-white/30 dark:hover:text-white/80"
          download
        >
          Resume
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex sm:flex-row gap-2 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/bhavansh-sthapak/"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center
      gap-2 rounded-full focus-scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
      active:scale-105 active:bg-gray-950 transition borderBlack 
      dark:bg-white/20 dark:text-white/60 dark:hover:bg-white/30 dark:hover:text-white/80"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/bsilvers64"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center
      gap-2 rounded-full focus-scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
      active:scale-105 active:bg-gray-950 transition borderBlack 
      dark:bg-white/20 dark:text-white/60 dark:hover:bg-white/30 dark:hover:text-white/80"
          >
            <BsGithub />
          </a>

          <a
            /* TODO: add notion */
            href="https://marmalade-practice-424.notion.site/Frontend-Notes-14c3ca7f759c802f9bc4c4c10bba312a"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center
      gap-2 rounded-full focus-scale-[1.15] hover:scale-[1.15] hover:text-gray-950
      active:scale-105 active:bg-gray-950 transition borderBlack 
      dark:bg-white/20 dark:text-white/60 dark:hover:bg-white/30 dark:hover:text-white/80"
          >
            <RxNotionLogo />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
