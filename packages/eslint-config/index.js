import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import reactJsxRecommended from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

import importConfigs from "./configs/import.js";
import reactConfigs from "./configs/react.js";
import typescriptConfigs from "./configs/typescript.js";

const config = [
  eslint.configs.recommended,
  ...typescriptConfigs,
  ...importConfigs,
  reactRecommended,
  reactJsxRecommended,
  ...reactConfigs,
  prettierConfig,
];

export default config;
