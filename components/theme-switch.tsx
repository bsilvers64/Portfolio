"use client";

import { useTheme } from "@/context/theme-context";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";



export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed  bottom-5 right-5 bg-white  w-[3rem] h-[3rem] bg-opacity-80
    flex items-center justify-center rounded-full backdrop-blur-[0.5rem] transition-all 
    border border-white border-opacity-60 shadow-2xl hover:scale-[1.15] active:scale-105
    dark:bg-gray-950 dark:bg-opacity-80 dark:hover:scale-[1.15] dark:active:scale-105"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
