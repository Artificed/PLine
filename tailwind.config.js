/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-scrollbar": {
          scrollbarWidth: "thin",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(0, 0, 0, 0.1)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
