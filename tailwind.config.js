module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Overpass": ["Overpass Mono", "mono"],
      "Raleway": ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
