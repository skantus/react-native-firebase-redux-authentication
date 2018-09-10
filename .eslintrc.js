module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:prettier/recommended"],
  env: {
    jest: true
  },
  settings: {
    "import/resolver": { "babel-module": {} }
  }
};
