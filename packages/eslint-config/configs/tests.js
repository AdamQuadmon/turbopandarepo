import noOnlyTest from "eslint-plugin-no-only-tests";
import vitest from "eslint-plugin-vitest";

const files = ["tests/**"];

// see also ./typescript.js
const testsConfigs = [
	{
		files,
		languageOptions: {
			globals: {
				...vitest.environments.env.globals,
			},
		},
		plugins: {
			"no-only-tests": noOnlyTest,
			vitest,
		},
		rules: {
			...vitest.configs.recommended.rules,
			...noOnlyTest.rules,
			"no-only-tests/no-only-tests": "error",
		},
	},
];

export default testsConfigs;
