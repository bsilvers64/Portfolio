import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBrain, FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Software Engineer Intern",
    location: "MissPoppins Inc., Los Altos, CA",
    description:
      "Led the development of a CRM dashboard using Next.js and React.js, reducing operational costs by 60%. Architected and optimized responsive pages with Context API and Material-UI, cutting HTTP requests by 60% and improving load times by 30%. Spearheaded the design of a Chat page with integrated Video/Voice calling, enhancing client-doctor communication. Engineered APIs with Express.js and MongoDB, resolving 20+ bugs and boosting interface performance by 70%.",
    icon: React.createElement(FaReact),
    date: "May 2024 – August 2024",
  },
  {
    title: "Software Development Intern",
    location: "Biourja Group, Indore, India",
    description:
      "Developed the 'Bid-Converter-Tool,' a PyQt5-based Python GUI to automate bid format conversion, reducing submission time by 25%. Automated data downloads/uploads to Snowflake DB, saving over 3 hours of daily manual work. Optimized 4 key projects using Pandas and web crawling, improving efficiency by 70% and data accuracy by 40%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 – February 2023",
  },
  {
    title: "Machine Learning Intern",
    location: "Allsoft Solutions Pvt. Ltd., Indore, India",
    description:
      "Boosted credit risk modeling accuracy by 3% for financial institutions using an XGBoost model. Analyzed a 30,000-row American Express dataset, identifying key predictors like credit score and utilization. Created effective data visualizations with Matplotlib to improve decision-making processes.",
    icon: React.createElement(FaBrain),
    date: "January 2022 – April 2022",
  },
] as const;


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "SQL",
  "AWS",
  "Docker",
  "Flask",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "HTML",
  "CSS",
] as const;
