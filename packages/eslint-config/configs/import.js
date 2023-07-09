import * as importPlugin from "eslint-plugin-import";

import importRules from "../rules/import.js";

//? https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
const importConfig = {
  languageOptions: {
    parserOptions: {
      // Eslint doesn't supply ecmaVersion in `parser.js` `context.parserOptions`
      // This is required to avoid ecmaVersion < 2015 error or 'import' / 'export' error
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  plugins: { import: importPlugin },
  settings: {
    // This will do the trick
    "import/parsers": {
      espree: [".js", ".cjs", ".mjs", ".jsx"],
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    ...importPlugin.configs["recommended"].rules,
    ...importRules,
  },
};

export default importConfig;
