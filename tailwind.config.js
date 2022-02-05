module.exports = {
  theme: {
    extend: {
      colors: { "default-text": "#202020", gold: "#b69f58" },
      fontFamily: {
        sans: "MillerBanner",
      },
      fontSize: {
        sm: ["14px", "20px"],
        base: ["15px", "24px"],
        lg: ["22px", "28px"],
        xl: ["24px", "32px"],
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    options: {},
  },
};
