import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaBrain, FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import systemMonitor from "@/public/systemMonitor.png";
import travelPulse from "@/public/travelPulse1.png";
import fizzi from "@/public/Fizzi.png";
import cnva from "@/public/CNvotingapp.png";
import serverlessChat from "@/public/serverlessChat.png";
import nexMeet from "@/public/nexMeet.png";
import invoiceGenie from "@/public/invoices1.png";

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
    title: "Invoice-Genie",
    description:
      "A Full-Stack invoicing app for creating, managing, and securing invoices with payment integration.",
    tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Drizzle ORM", "Clerk"],
    imageUrl: invoiceGenie,
    githubLink: "https://github.com/bsilvers64/Invoice-Genie"
  },
  {
    title: "Fizzi-Pop",
    description:
      "An interactive 3D eCommerce landing page featuring dynamic content, advanced animations, and responsive 3D graphics",
    tags: ["Next.js", "Three.js", "React-Three-Fiber", "GSAP", "Tailwind CSS"],
    imageUrl: fizzi,
    githubLink: "https://github.com/bsilvers64/Fizzi"
  },
  {
    title: "System Monitor",
    description:
      "A cloud-native monitoring app with Python, Docker, Kubernetes (EKS), and ECR, showcasing real-time system metrics.",
    tags: ["Flask", "Plotly", "Docker", "Kubernetes", "AWS EKS", "AWS EKS"],
    imageUrl: systemMonitor,
    githubLink: "https://github.com/bsilvers64/cloud-native-monitoring-app"
  },
  {
    title: "TravelPulse",
    description:
      "A ride-booking app for seamless navigation, cost estimation, and real-time map rendering with interactive route visualization.",
    tags: ["React Native", "Tailwind CSS", "Google Maps APIs", "Redux Toolkit"],
    imageUrl: travelPulse,
    githubLink: "https://github.com/bsilvers64/TravelPulse"
  },
  {
    title: "Cloud Native Voting App",
    description:
      " cloud-native voting application leveraging Kubernetes, Amazon EKS, and MongoDB for scalable and resilient deployment",
    tags: ["Amazon EKS", "Kubernetes", "React", "MongoDB"],
    imageUrl: cnva,
    githubLink: "https://github.com/bsilvers64/cloud-native-voting-application"
  },
  {
    title: "Serverless Chat App",
    description:
      "A serverless chat application using AWS services for scalable and secure chat functionality with dynamic user management.",
    tags: [
      "AWS S3",
      "AWS-Lambda",
      "API Gateway",
      "DynamoDB",
      "Cognito",
      "REST APIs",
    ],
    imageUrl: serverlessChat,
    githubLink: "https://github.com/bsilvers64/Serverless-Chat-App"
  },
  {
    title: "NexMeet",
    description:
      "A React and WebRTC-based video conferencing application, browser-to-browser video chats using JavaScript",
    tags: ["React", "WebRTC", "Node.js", "Socket.IO", "Express.js"],
    imageUrl: nexMeet,
    githubLink: "https://github.com/bsilvers64/NexMeet"
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
