module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ["./src/**/*.html", "./src/**/*.tsx"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#46e850",
      },
    },
  },
  variants: {},
  plugins: [],
}
