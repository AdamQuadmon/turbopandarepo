import * as storybook from "eslint-plugin-storybook";

import rules from "@turbopandarepo/eslint-config";

// Check also https://github.com/storybookjs/linter-config
// Maybe implement in eslint-config
const config = [...rules, storybook.configs.recommended];

export default config;
