/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/Pattern.js"],
  theme: {
    extend: {
      colors: {
        "start-blue": "#4C49D9",
        "start-cyan": "#3D3BAC",
        "start-text": "#F8F8F8",
        "start-paragraph": "#908B8B",
        "color-text": "#F8F8F8",
        violets: "#8C3F9F",
        reds: "#AD3838",
        grens: "#4D9F3F",
        grays: "#393939",
        whites: "#ECECEC",
        patternbg: "#E2E2E2",
        nftbg: "#D9D9D9",
      },
      backgroundImage: {
        home: "url(../../public/HomePage.jpg)",
      },
      fontFamily: {
        lalezar: ["Lalezar"],
        Kumbh: ["Kumbh Sans"],
      },
    },
  },
  plugins: [],
};
