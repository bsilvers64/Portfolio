"use client";

import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink
}: ProjectProps) {
  // start the animation when the bottom of the viewport crosses the top of the target (Projects section)
  // end the animation when the bottom of the viewport has gone 33% beyond the end of the Project

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-6 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[30rem] border border-gray-300 
    overflow-hidden sm:pr-6 sm:pl-6 relative sm:h-[16rem] 
    rounded-md hover:bg-gray-200 shadow-md hover:shadow-lg transition-all duration-300
    dark:bg-white/10 dark:border-gray-700 dark:hover:bg-white/20"
      >
        {githubLink ? (
          <Link 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          />
        ) : null}

        <div
          className="py-3 px-4 sm:pl-8 sm:pr-2 sm:pt-6 sm:max-w-[60%] 
            flex flex-col h-full pt-3 pb-5"
        >
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1 mb-3 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-3 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-2 py-1 text-[0.65rem] uppercase tracking-wider
               text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          width={280}
          height={210}
          alt="Project I worked on"
          className="absolute top-6 hidden sm:block
        -right-24 w-[18rem] rounded-t-md shadow-2xl group-hover:translate-y-2 
        group-hover:-rotate-2 group-hover:-translate-x-2 
        group-even:group-hover:rotate-2 group-even:group-hover:translate-x-2 
        group-hover:scale-[1.03] transition"
        ></Image>
      </section>
    </motion.div>
  );
}
