module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    "react-native/react-native": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      blockBindings: true,
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    },
    sourceType: "module",
    codeFrame: false
  },
  plugins: ["react", "react-native", "prettier", "jsx-a11y", "import"],
  rules: {
    strict: 0,
    indent: ["error", 2],
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],

    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 0,

    "no-console": "off"
    // "react/prop-types": 0
  }
};
