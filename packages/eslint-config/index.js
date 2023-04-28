module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: ["./rules/import", "./rules/prettier"].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
