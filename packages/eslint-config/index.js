module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ["./rules/import"].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
