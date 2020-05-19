const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    nicolui: "./packages/sharewinfo-utils/src/index.js",
    searchtable: "./packages/sharewinfo-ui/src/index.js",
  },
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "./packages/"),
    filename: "[name]/dist/index.js",
    library: "nicolui",
    libraryTarget: "umd",
  },
};
