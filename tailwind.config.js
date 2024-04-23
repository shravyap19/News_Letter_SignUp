/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#36384E",
        "custom-blue": "#242540",
        "custom-border": "#DADADA",
        "custom-subscribe": "#252742",
        "custom-text": "#3A3A41",
        "dissmiss-button": "#232742",
        "subscription-approval-custom-gray": "#3C3C4E",
      },
      fontSize: {
        "5xl": "3rem",
        "4xl": "2rem",
        "1xl": "1rem",
      },
    },
  },
  plugins: [],
};
