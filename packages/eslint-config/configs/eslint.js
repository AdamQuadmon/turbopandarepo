import eslint from "@eslint/js";
import comments from "eslint-plugin-eslint-comments";
import jsdoc from "eslint-plugin-jsdoc";
import n from "eslint-plugin-n";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import regexp from "eslint-plugin-regexp";

import eslintRules from "../rules/eslint.js";

const eslintConfigs = [
	eslint.configs.recommended,
	n.configs["flat/recommended"],
	jsdoc.configs["flat/recommended-typescript"],
	perfectionistNatural,
	{
		plugins: {
			"eslint-comments": comments,
			jsdoc,
			regexp,
		},
		rules: {
			...regexp.configs.recommended.rules,
			...jsdoc.configs["flat/recommended-typescript"].rules,
			...eslintRules.recommended,
		},
	},
];

export default eslintConfigs;
