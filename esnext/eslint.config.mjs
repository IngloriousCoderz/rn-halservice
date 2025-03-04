import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-magic-numbers": "error",
      // this rule is useful only when declaring function expressions or arrow functions
      "no-use-before-define": ["error", { functions: false }],
      eqeqeq: ["error", "smart"],
    },
  },
];
