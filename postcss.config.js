module.exports = {
  plugins: [
    require("postcss-import"),
    requir("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
