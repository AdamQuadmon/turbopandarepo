import yml from "eslint-plugin-yml";
import yamlParser from "yaml-eslint-parser";

import ymlRules from "../rules/yml.js";

const files = ["**/*.{yml,yaml}"];

const ymlConfigs = [
	{
		files,
		languageOptions: {
			parser: yamlParser,
		},
		plugins: { yml },
		rules: {
			...yml.configs.standard,
			...yml.configs.prettier,
			...ymlRules.recommended,
		},
	},
];

export default ymlConfigs;
