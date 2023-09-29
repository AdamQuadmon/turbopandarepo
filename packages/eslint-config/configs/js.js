import globals from "globals";

const files = ["**/*.{js,cjs}"];

const jsConfigs = [
	{
		files,
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
				...globals.commonjs,
			},
			sourceType: "module",
		},
	},
];

export default jsConfigs;
