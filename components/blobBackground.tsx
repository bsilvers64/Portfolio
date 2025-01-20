"use client";

import { useEffect, useRef, useState } from "react";

const colorCombinations = [
  // Tropical Paradise
  ["#FF6B6B", "#4ECDC4", "#FFD93D"], // Coral, Turquoise, Yellow
  ["#FF8364", "#45B7AF", "#95E1D3"], // Sunset Orange, Teal, Mint

  // Berry Garden
  ["#9B5DE5", "#F15BB5", "#00BBF9"], // Purple, Pink, Sky Blue
  ["#6F2DBD", "#E63946", "#4CC9F0"], // Deep Purple, Red, Light Blue

  // Ocean Depths
  ["#2D31FA", "#5E60CE", "#56CFE1"], // Navy, Purple Blue, Cyan
  ["#48BFE3", "#5390D9", "#7400B8"], // Azure, Steel Blue, Deep Purple

  // Forest Dreams
  ["#52B788", "#FF9F1C", "#2D6A4F"], // Emerald, Orange, Forest
  ["#80ED99", "#FB8500", "#2D6A4F"], // Mint, Tangerine, Pine

  // Candy Shop
  ["#FF70A6", "#70D6FF", "#FFD670"], // Pink, Sky, Gold
  ["#FF70E1", "#59E8C4", "#FFBE0B"], // Hot Pink, Mint, Amber

  // Desert Sunset
  ["#FF595E", "#FF9E00", "#6A4C93"], // Red, Orange, Purple
  ["#FF477E", "#FF8C42", "#7209B7"], // Pink, Peach, Royal Purple

  // Northern Lights
  ["#06D6A0", "#118AB2", "#7209B7"], // Aqua, Blue, Purple
  ["#00F5D4", "#1B98E0", "#9B5DE5"], // Cyan, Ocean, Violet

  // Spring Garden
  ["#FF5E78", "#55D6BE", "#FFBE0B"], // Coral, Seafoam, Yellow
  ["#FF7096", "#50C9CE", "#FFD93D"], // Rose, Turquoise, Sun

  // Electric Dreams
  ["#FF00E4", "#00FFF0", "#00A3FF"], // Magenta, Cyan, Blue
  ["#FF2A6D", "#05FFA1", "#01CDFE"], // Hot Pink, Mint, Electric Blue

  // Autumn Leaves
  ["#FF6B35", "#86A8E7", "#D4E157"], // Orange, Periwinkle, Lime
  ["#FF8B8B", "#97C1A9", "#FCB75D"], // Salmon, Sage, Golden
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
          rootMargin: '400px'  // This extends the viewport checking area by 2x viewport height
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
        className="absolute top-[-6rem] right-[-10rem] sm:right-[-5rem] md:right-0 lg:right-[5rem]
        h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem] rounded-full blur-[10rem] 
        -z-10 animate-morphBlob transition-colors duration-5000"
        style={{ backgroundColor: colors[0] }}
      />
      <div
        className="absolute top-[-1rem] left-[-10rem] sm:left-[-5rem] md:left-0 lg:left-[5rem]
        h-[31.25rem] w-[31.25rem] sm:w-[40rem] md:w-[50rem] rounded-full blur-[10rem]
        -z-10 animate-morphBlob animation-delay-2000 transition-colors duration-6000"
        style={{ backgroundColor: colors[1] }}
      />
      <div
        className="absolute top-[15rem] left-[20rem] h-[31.25rem] w-[31.25rem] 
        sm:w-[40rem] md:w-[50rem] rounded-full blur-[10rem] opacity-70
        -z-10 animate-morphBlob animation-delay-4000 transition-colors duration-7000"
        style={{ backgroundColor: colors[2] }}
      />
    </div>
  );
}
