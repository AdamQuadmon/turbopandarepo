import tsc from "@typescript-eslint/eslint-plugin";
import tscParser from "@typescript-eslint/parser";
import deprecation from "eslint-plugin-deprecation";
import globals from "globals";

import typescriptRules from "../rules/typescript.js";

const files = ["**/*.{ts,tsx}"];
const testFiles = ["**/*.test.ts"];

const typescriptConfigs = [
	{
		files,
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
				...globals.commonjs,
			},
			parser: tscParser,
			parserOptions: {
				ecmaVersion: 2022,
				project: [
					"./tsconfig.json",
					"./packages/*/tsconfig.json",
					"./apps/*/tsconfig.json",
				],
				reportUnusedDisableDirectives: true,
				root: true,
				sourceType: "module",
			},
			sourceType: "module",
		},
		plugins: {
			"@typescript-eslint": tsc,
			deprecation,
		},
		rules: {
			...tsc.configs["eslint-recommended"].rules,
			...tsc.configs["strict-type-checked"].rules,
			...tsc.configs["stylistic-type-checked"].rules,
			...typescriptRules.recommended,
		},
	},
	{
		files: testFiles,
		rules: {
			...typescriptRules.test,
		},
	},
];

export default typescriptConfigs;
