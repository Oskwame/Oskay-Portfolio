/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      xs:"350px",
      sm: "640px",  // Small screens
      md: "768px",  // Medium screens
      lg: "1024px", // Large screens
      xl: "1280px", // Extra large screens
      xxl: "1536px", // 2x extra large screens
    }, 
  },
  plugins: [],
};