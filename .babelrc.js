module.exports = {
  presets: ["react-native", "flow"],
  env: {
    production: {
      plugins: ["ignite-ignore-reactotron"]
    }
  }
};
