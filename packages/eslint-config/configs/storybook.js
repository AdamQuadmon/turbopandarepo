import storybook from "eslint-plugin-storybook";

import storybookRules from "../rules/storybook.js";

// Check also https://github.com/storybookjs/linter-config
const storybookConfigs = [
	{
		files: [
			"*.stories.@(ts|tsx|js|jsx|mjs|cjs)",
			"*.story.@(ts|tsx|js|jsx|mjs|cjs)",
		],
		plugins: { storybook },
		rules: {
			...storybookRules.recommended,
		},
	},
	{
		files: [".storybook/main.@(js|cjs|mjs|ts)"],
		plugins: { storybook },
		rules: {
			...storybookRules.main,
		},
	},
];

export default storybookConfigs;
