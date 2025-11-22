/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px"
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily:{
        primary : ["var(--font-dm-sans)", "sans-serif"],
        secondary : ["var(--font-barlow)", "sans-serif"],
      },
      colors: {
        primary: "#121315",
        secondary: "#4a4a4a",
        accent: "#ffca3b",
        border: "#d7d7d7",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18,19,21,0.06)"
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      }
    }
  }
}
