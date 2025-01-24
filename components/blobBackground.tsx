"use client";

import { useEffect, useRef, useState } from "react";

const colorCombinations = [
  ["#F97316", "#FB923C", "#FDE68A"], // Deep orange, warm orange, soft yellow
  ["#DC2626", "#F87171", "#FCA5A5"], // Deep red, coral, soft salmon
  ["#EA580C", "#F59E0B", "#FDE047"], // Rich orange, golden amber, bright yellow
  ["#5B21B6", "#7E22CE", "#A855F7"], // Dark purple, medium purple, light purple
  ["#92400E", "#D97706", "#FBBF24"],
  ["#0F766E", "#14B8A6", "#2DD4BF"],
  ["#14532D", "#10B981", "#6EE7B7"],
  ["#BE185D", "#F43F5E", "#FDA4AF"],
  ["#1D4ED8", "#3B82F6", "#93C5FD"],
  ["#0F766E", "#14B8A6", "#2DD4BF"],
  ["#1D4044", "#16A34A", "#22D3EE"],
  ["#1E293B", "#475569", "#64748B"],
  ["#1E40AF", "#3B82F6", "#7DD3FC"],
  ["#1E40AF", "#3B82F6", "#7DD3FC"],
  ["#27272A", "#52525B", "#71717A"],
];

export default function BackgroundBlobs() {
  const [colors, setColors] = useState(colorCombinations[0]);
  const blobContainerRef = useRef<HTMLDivElement>(null);
  const currentColorIndexRef = useRef(0);

  useEffect(() => {
    // Get viewport height and double it for rootMargin

    const randomIndex = Math.floor(Math.random() * colorCombinations.length);
    currentColorIndexRef.current = randomIndex;
    setColors(colorCombinations[randomIndex]);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * colorCombinations.length);
          } while (newIndex === currentColorIndexRef.current);

          currentColorIndexRef.current = newIndex;
          setColors(colorCombinations[newIndex]);
        }
      },
      {
        threshold: 0,
        rootMargin: "400px", // This extends the viewport checking area by 2x viewport height
      }
    );

    if (blobContainerRef.current) {
      observer.observe(blobContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={blobContainerRef}>
      <div
        className="hidden sm:block absolute top-[-6rem] right-[-10rem] sm:right-[-5rem] md:right-0 lg:right-[5rem]
        h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem] rounded-full blur-[10rem] opacity-80
        -z-10 animate-morphBlob transition-colors duration-5000"
        style={{ backgroundColor: colors[0] }}
      />
      <div
        className="hidden sm:block absolute top-[-1rem] left-[-10rem] sm:left-[-5rem] md:left-0 lg:left-[5rem]
        h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem] rounded-full blur-[10rem] opacity-80
        -z-10 animate-morphBlob animation-delay-2000 transition-colors duration-6000"
        style={{ backgroundColor: colors[1] }}
      />
      <div
        className="hidden sm:block absolute top-[15rem] left-[20rem] h-[31.25rem] w-[31.25rem] 
        sm:w-[40rem] md:w-[50rem] rounded-full blur-[10rem] opacity-80
        -z-10 animate-morphBlob animation-delay-4000 transition-colors duration-7000"
        style={{ backgroundColor: colors[2] }}
      />
    </div>
  );
}
