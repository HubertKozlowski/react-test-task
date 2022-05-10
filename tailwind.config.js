module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    borderRadius: {
      s: "4px",
      m: "5px",
      lg: "10px",
    },
    extend: {
      colors: {
        "custom-black": "#0D0D0D",
        "custom-light-black": "#1F1F1F",
        "custom-gray": "#A2A2A2",
        "custom-blue": "#665AEF",
        "custom-red": "#FC364C",
      },
    },
  },
  plugins: [],
};
