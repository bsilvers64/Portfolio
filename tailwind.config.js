/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        morphBlob: "morphBlob 15s ease-in-out infinite",
      },
      keyframes: {
        morphBlob: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            transform: "scale(1) rotate(0deg)",
          },
          "33%": {
            borderRadius: "70% 30% 50% 50%/30% 30% 70% 70%",
            transform: "scale(1.4) rotate(90deg)",  // Increased scale, reduced rotation
          },
          "66%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
            transform: "scale(0.7) rotate(180deg)",  // Decreased scale, reduced rotation
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            transform: "scale(1) rotate(0deg)",  // Reset to initial state
          }
        }
      }
    }
  },
  plugins: [],
  darkMode: "class",
};
