import jsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";

import jsonRules from "../rules/json.js";

const files = ["*.json", "*.jsonc"];
const jsoncFiles = ["*.jsonc"];
const ignores = ["package.json", "tsconfig.json"];

const jsonConfigs = [
	{
		files,
		ignores,
		languageOptions: {
			parser: jsoncParser,
		},
		plugins: { jsonc },
		rules: {
			...jsonc.rules["recommended-with-json"],
			...jsonRules.recommended,
		},
	},
	{
		files: jsoncFiles,
		rules: {
			...jsonRules.jsonc,
		},
	},
];

export default jsonConfigs;
