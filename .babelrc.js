module.exports = {
  presets: ["react-native", "flow"],
  plugins: [["transform-class-properties", { spec: true }]],
  env: {
    production: {
      plugins: ["ignite-ignore-reactotron"]
    }
  }
};
