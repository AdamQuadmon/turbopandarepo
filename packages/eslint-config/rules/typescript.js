const typescriptRules = {
	recommended: {
		"@typescript-eslint/indent": ["warn", "tab", { SwitchCase: 1 }],
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-unnecessary-condition": [
			"error",
			{
				// Stylistic concerns that don't interfere with Prettier
				allowConstantLoopConditions: true,
			},
		],
		// "@typescript-eslint/no-unused-vars": ["error", { caughtErrors: "all" }],
		"@typescript-eslint/padding-line-between-statements": [
			"error",
			{ blankLine: "always", next: "*", prev: "block-like" },
		],
		"@typescript-eslint/semi": "error",
		"deprecation/deprecation": "error",
	},
	test: {
		// These on-by-default rules aren't useful in test files.
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
	},
};

export default typescriptRules;
