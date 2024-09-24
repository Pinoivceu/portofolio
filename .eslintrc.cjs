const { extend } = require("@vue/shared");

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["nuxt/eslintconfig", "plugin:prettier/recommended"],
    plugins: [],
    rules: {},
}