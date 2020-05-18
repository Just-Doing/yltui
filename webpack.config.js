const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    nicolui: "./packages/nicolui/src/index.js",
    searchtable: "./packages/searchtable/index.js",
  },
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "./packages/"),
    filename: "[name]/dist/index.js",
    library: "nicolui",
    libraryTarget: "umd",
  },
};
