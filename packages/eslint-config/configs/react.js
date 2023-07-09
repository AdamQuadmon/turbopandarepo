import next from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import turbo from "eslint-plugin-turbo";

import jsxRules from "../rules/jsx.js";
import nextRules from "../rules/next.js";
import reactRules from "../rules/react.js";

const files = ["**/*.{js,ts,tsx}"];

const reactConfig = {
  files,
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "jsx-a11y": jsxA11y,
    "@next/next": next,
    turbo,
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,
    ...next.configs["core-web-vitals"].rules,
    ...turbo.configs.recommended.rules,
    ...reactRules,
    ...jsxRules,
    ...nextRules,
  },
};

export default reactConfig;
