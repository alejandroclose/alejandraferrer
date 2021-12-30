module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    fontSize: {
      xs: ".80rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      'coral-600': "#C06937",
      'coral-200': "#F1B398"
    },
    extend: {
      lineHeight: {
        'min': '0.1rem'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
