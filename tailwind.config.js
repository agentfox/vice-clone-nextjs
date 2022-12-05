/** @type {import('tailwindcss').Config} */
/* eslint-disable no-use-before-define */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        msm: { max: "640px" },
        mmd: { max: "700px" },
        mlg: { max: "1000px" },
        sm: "640px",
        md: "700px",
        lg: "1000px",
      },
      fontFamily: {
        lora: ["Lora", "Georgia", "serif"],
        sourceCodePro: ['"Source Code Pro"', "monaco", "monospace"],
        viceGrotesk: ['"VICE Grotesk"', '"Helvetica Neue"', "sans-serif"],
        helvetica: ['"Helvetica Neue"', "Arial", "sans-serif"],
      },
      boxShadow: {
        sm: "inset 0 1px 0 0 rgb(255 255 255 / 0.2)",
      },
      maxWidth: {
        "10xl": "1600px",
      },
      spacing: {
        0.75: "0.1875rem",
        pix10: "10px",
        pix15: "15px",
        pix30: "30px",
        pix40: "40px",
        pix80: "80px",
        pix60: "60px",
        pix20: "20px",
        npix20: "-20px",
        npix40: "-40px",
        pix150: "150px",
        19: "4.75rem",
        30: "7.5rem",
        "16by9": "56.25%",
      },
      width: {
        pix40: "40px",
      },
      padding: {},
      minWidth: {
        30: "7.5rem",
        pix150: "150px",
      },
      fontSize: {
        sxs: "0.6875rem",
        ssm: "0.8125rem",
        "3xlp": "2rem",
        "5xlp": "3.125rem",
      },
      lineHeight: {
        general: "1.3",
      },
      flexBasis: {},
      minHeight: {
        pix400: "400px",
      },
      animation: {
        "spin-slow": "spin 36s linear infinite",
        "spin-medium": "spin 5s linear infinite",
      },
      transformOrigin: {
        "bottom-center": "bottom center",
      },
    },
  },
  plugins: [],
};
