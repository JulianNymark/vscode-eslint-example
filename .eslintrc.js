module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  env: {
    browser: true,
    "jest/globals": true
  },
  plugins: ["jest"],
  rules: {
    quotes: ["error", "single"]
  }
};
