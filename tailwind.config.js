/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upDonw: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        strike: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(80px)" },
        },
        leftRight: {
          "0%": { transform: "translateX(-50px)" },
          "50%": { transform: "translateX(50px)" },
          "100%": { transform: "translateX(-50px)" },
        },
        blink: {
          "0%": { opacity: "1" },
          "50%": { opacity: ".5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "up-down": "upDonw 2s ease-in-out infinite",
        strike: "strike .4s ease-in-out infinite",
        "left-right": "leftRight 3s ease-in-out infinite",
        blink: "blink 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
