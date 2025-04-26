// tailwind.config.js
module.exports = {
  darkMode: 'class',  // ← 이 줄 추가!
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
