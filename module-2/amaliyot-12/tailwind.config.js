/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/index.html"],
   theme: {
      extend: {},
      container: {
         center: true,
         padding: "16px",
         screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
         },
      },
      fontFamily: {
         sans: ["Inter", "sans-serif"],
         serif: ["Georgia", "serif"],
         mono: ["Menlo", "monospace"],
      },
   },
   plugins: [],
};
