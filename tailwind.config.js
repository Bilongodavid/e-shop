/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#23A6F0",
      second: "#737373",
      danger: "#E74040",
      black: "#000000",
      "light-gray": "#FAFAFA",
    },
    fontSize: {
      sm: [
        "14px",
        {
          lineHeight: "24px",
          letterSpacing: "0.2px",
          fontWeight: "500",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0.2px",
          fontWeight: "500",
        },
      ],
      lg: [
        "20px",
        {
          lineHeight: "30px",
          letterSpacing: "0.2px",
          fontWeight: "500",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "0.1px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "30px",
        {
          lineHeight: "36px",
          letterSpacing: "0.2px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "40px",
        {
          lineHeight: "57px",
          letterSpacing: "0.2px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "58px",
        {
          lineHeight: "80px",
          letterSpacing: "0.2px",
          fontWeight: "500",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
