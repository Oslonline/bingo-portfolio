/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: "#10B981",
      },
      boxShadow: {
        mlight: "25px 25px 0px 5px #E5E7EB;",
        mdark: "25px 25px 0px 5px #374151;",
        mlightphone: "0px 25px 0px 8px #E5E7EB;",
        mdarkphone: "0px 25px 0px 8px #374151;",
      },
    },
  },
  plugins: [],
};
