/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            primary: "#ff6347",
            secondary: "#00bfff",
            gray: {
               100: "#f7fafc",
               200: "#edf2f7",
            },
         },
         boxShadow: {
            "2xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
         },
         fontFamily: {
            raleway: ["Raleway", "sans-serif"],
         },
      },
   },
   plugins: [],
};
