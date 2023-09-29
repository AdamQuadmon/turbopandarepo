import next from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import turbo from "eslint-plugin-turbo";

import jsxA11yRules from "../rules/jsxA11y.js";
import nextRules from "../rules/next.js";
import reactRules from "../rules/react.js";

const files = ["**/*.{js,jsx,mjs,cjs,ts,tsx}"];

const reactConfigs = [
	// reactJsxRecommended,
	{
		...reactRecommended,
		files,
		plugins: {
			"@next/next": next,
			"jsx-a11y": jsxA11y,
			react,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			turbo,
		},
		rules: {
			...reactRecommended.rules,
			...jsxA11y.configs.recommended.rules,
			...next.configs["core-web-vitals"].rules,
			...turbo.configs.recommended.rules,
			...reactRules.recommended,
			...jsxA11yRules.recommended,
			...nextRules.recommended,
		},
		settings: {
			next: {
				rootDir: ["apps/*/"],
			},
			react: {
				version: "detect",
			},
		},
	},
];

export default reactConfigs;
