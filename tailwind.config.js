/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suissIntl: ["suiss Intl", "sans-serif"],
        montreal: ["neue montreal", "sans-serif"],
        forma: ["FormaDJRDisplay", "sans-serif"],
      },
      fontWeight: {
        bold: 800,
        medium: 600,
        regular: 400,
        light: 200,
      },
      fontSize: { md: "16px" },
      colors: {
        dark: "#171717",
        whitegrey: "#F1F1F1",
      },
      borderWidth: {
        1: "1px",
      },
      height: {
        half: "50vh",
      },
      width: {
        half: "50%",
      },
      screens: {
        min: "400px",
      },
    },
  },
  plugins: [],
};
