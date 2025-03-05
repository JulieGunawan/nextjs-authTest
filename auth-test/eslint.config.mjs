import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "indent": ["error", 2, {
        "SwitchCase": 1,
        "VariableDeclarator": "first",
        "MemberExpression": 1,
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "CallExpression": {
          "arguments": "first"
        },
        "ArrayExpression": 1,
        "ObjectExpression": 1,
        "ImportDeclaration": 1
      }]
    }
  }
];