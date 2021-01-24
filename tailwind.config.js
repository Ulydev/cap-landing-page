const colors = require("tailwindcss/colors")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.html", "./src/**/*.tsx"],
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: colors.warmGray,
      white: colors.white,
      primary: {
        100: "#43ff44",
        200: "#39dc38",
        300: "#2fba2c",
        400: "#249820",
      },
      secondary: {
        100: "#c5c5c7",
        200: "#25254f",
        300: "#1e1e44",
        400: "#1d1c3d",
      },
    },
  },
  variants: {},
  plugins: [],
}
