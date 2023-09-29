import markdown from "eslint-plugin-markdown";
import markdownlint from "eslint-plugin-markdownlint";

import markdownRules from "../rules/markdown.js";

const files = ["*.md"];

const markdownConfigs = [
	{
		files,
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					// Adding a "use strict" directive at the top of
					// every code block is tedious and distracting, so
					// opt into strict mode parsing without the
					// directive.
					impliedStrict: true,
				},
			},
		},
		plugins: { markdown, markdownlint },
		processor: "markdown/markdown",
		rules: {
			...markdown.configs.recommended.rules,
			...markdownlint.configs.recommended.rules,
			...markdownRules.recommended,
		},
	},
];

export default markdownConfigs;
