const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    nicolui: "./packages/nicolui/src/index.js",
    searchtable: "./packages/searchtable/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]/index.js",
    library: "nicolui",
    libraryTarget: "umd",
  },
};
