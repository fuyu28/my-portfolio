/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1a16",
        paper: "#fdfcf9",
        sand: "#f6f3ef",
        accent: "#b88b4a",
        line: "#e6e0d8",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Space Grotesk"', "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(38, 28, 14, 0.08)",
        card: "0 14px 30px rgba(38, 28, 14, 0.08)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
