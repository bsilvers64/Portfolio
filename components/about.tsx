"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[50rem] text-center leadin-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        I am currently pursuing a{" "}
        <span className="font-medium">Master’s in Computer Science</span> at
        <span className="font-medium">Arizona State University</span>, where I
        am building a strong foundation in advanced computing concepts and
        innovative technologies. With hands-on experience as a
        <span className="font-medium">Full-Stack Software Engineer Intern</span>
        , I thrive at the crossroads of creativity and technology.
      </p>

      <p className="mb-3">
        I enjoy <span className="font-medium">deep-diving into concepts</span>,
        exploring innovative solutions, and blogging my discoveries as personal
        reference points and learning tools. My passion for experimentation
        drives me to seek out new ideas while steadily building expertise in
        areas like
        <span className="font-medium"> React, Next.js, Node.js and AWS</span>.
      </p>

      <p className="mb-3">
        When I’m not immersed in code or academics, you’ll find me{" "}
        <span className="font-medium">reading</span>, exploring unique recipes
        in the kitchen, or playing{" "}
        <span className="font-medium">serene indie games</span>. These hobbies
        not only recharge me but also inspire fresh perspectives on
        problem-solving.
      </p>

      <p>
        My long-term goal is to become a{" "}
        <span className="font-medium">highly competent engineer</span>,
        contributing to impactful projects that push the boundaries of
        innovation. I am currently seeking
        <span className="font-medium"> full-time opportunities</span> where I
        can leverage my skills and creativity. I also make time for the gym to
        fuel my happiness and creativity with those free, happy hormones!
      </p>
    </motion.section>
  );
}
