import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import reactJsxRecommended from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

import importConfig from "./configs/import.js";
import reactConfig from "./configs/react.js";
import typescriptConfig from "./configs/typescript.js";

const config = [
  eslint.configs.recommended,
  typescriptConfig,
  importConfig,
  reactRecommended,
  reactJsxRecommended,
  reactConfig,
  prettierConfig,
];

export default config;
