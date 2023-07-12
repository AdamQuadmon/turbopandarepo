import tsc from "@typescript-eslint/eslint-plugin";
import tscParser from "@typescript-eslint/parser";

const files = ["**/*.{ts,tsx}"];

const typescriptConfigs = [
  {
    files,
    languageOptions: {
      parser: tscParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsc,
    },

    rules: {
      ...tsc.configs["eslint-recommended"].rules,
      ...tsc.configs.recommended.rules,
    },
  },
];

export default typescriptConfigs;
