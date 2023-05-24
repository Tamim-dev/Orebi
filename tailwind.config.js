/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        cGrey: "#767676",
        cbg: "#F2F2F2",
        cdrop: "#262626",
      },
    },
  },
  plugins: [],
};
