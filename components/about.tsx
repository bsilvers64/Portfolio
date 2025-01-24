"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-32"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        I am currently pursuing a{" "}
        <span className="font-semibold">Master’s in Computer Science</span> at
        <span className="font-semibold"> Arizona State University</span>, where I
        am building a strong foundation in advanced computing concepts and
        innovative technologies. With hands-on experience as a
        <span className="font-semibold">
          {" "}
          Full-Stack Software Engineer 
        </span>
        , I thrive at the crossroads of creativity and technology.
      </p>

      <p className="mb-3">
        I enjoy <span className="font-semibold"> deep-diving into concepts</span>,
        exploring innovative solutions, and blogging my discoveries as personal
        reference points and learning tools. My passion for experimentation
        drives me to seek out new ideas while steadily building expertise in
        areas like
        <span className="font-semibold"> React, Next.js, Node.js and AWS</span>.
      </p>

      <p className="mb-3">
        When I’m not immersed in code or academics, you’ll find me{" "}
        <span className="font-semibold">reading</span>, exploring unique recipes
        in the kitchen, or playing{" "}
        <span className="font-semibold">serene indie games</span>. These hobbies
        not only recharge me but also inspire fresh perspectives on
        problem-solving.
      </p>

      <p>
        My long-term goal is to become a{" "}
        <span className="font-semibold">highly competent engineer</span>,
        contributing to impactful projects that push the boundaries of
        innovation. I am currently seeking
        <span className="font-semibold"> full-time opportunities</span> where I
        can leverage my skills and creativity. I also make time for the gym to
        fuel my happiness and creativity with those free, happy hormones!
      </p>
    </motion.section>
  );
}
