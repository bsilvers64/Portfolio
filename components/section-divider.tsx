"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-300 mb-28 mt-20 h-16 w-1 
    rounded-full hidden sm:block bg-opacity-80"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
