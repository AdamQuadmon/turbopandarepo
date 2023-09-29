import config from "@turbopandarepo/eslint-config";

export default [
	...config,
	{
		rules: {
			"n/no-extraneous-import": [
				"error",
				{
					allowModules: ["@turbopandarepo/ds"],
				},
			],
		},
	},
];
