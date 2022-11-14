// eslint-disable-next-line import/no-unresolved
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      iceland: ["Iceland", "sans-serif"],
      "istok-web": ["Istok Web", "sans-serif"],
    },
  },
  plugins: [],
});
