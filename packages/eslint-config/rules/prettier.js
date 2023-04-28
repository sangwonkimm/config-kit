module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singQuote: true,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
        printWidth: 100,
        arrowParens: "always",
      },
    ],
  },
};
