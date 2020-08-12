module.exports = {
  entry: {
    "./x.bundle.js": `./x.js`,
  },
  target: "node",
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "[name]",
  },
};
