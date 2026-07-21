export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "20s linear infinite",
      },
      colors: {
        prueba: "#ff0000", // para testear
      },
    },
  },
  plugins: [],
}
