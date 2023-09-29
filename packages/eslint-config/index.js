import prettierConfig from "eslint-config-prettier";

import eslintConfigs from "./configs/eslint.js";
import jsConfigs from "./configs/js.js";
import jsonConfigs from "./configs/json.js";
import markdownConfigs from "./configs/markdown.js";
import reactConfigs from "./configs/react.js";
import storybookConfigs from "./configs/storybook.js";
import testsConfigs from "./configs/tests.js";
import typescriptConfigs from "./configs/typescript.js";
import ymlConfigs from "./configs/yml.js";

// see https://github.com/JoshuaKGoldberg/create-typescript-app/blob/main/.eslintrc.cjs
const config = [
	...eslintConfigs,
	...jsonConfigs,
	...ymlConfigs,
	...markdownConfigs,
	...jsConfigs,
	...typescriptConfigs,
	...reactConfigs,
	...storybookConfigs,
	...testsConfigs,
	prettierConfig,
];

export default config;
