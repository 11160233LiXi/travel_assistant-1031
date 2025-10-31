/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class", // 確保用 .dark 切換
  theme: {
    extend: {},
  },
  plugins: [],
};
