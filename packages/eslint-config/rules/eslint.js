const eslintRules = {
	recommended: {
		curly: "warn",
		eqeqeq: "error",
		"eslint-comments/disable-enable-pair": "error",
		"eslint-comments/no-aggregating-enable": "error",
		"eslint-comments/no-duplicate-disable": "error",
		"eslint-comments/no-unlimited-disable": "error",
		"eslint-comments/no-unused-enable": "error",
		indent: "off",
		"logical-assignment-operators": [
			"error",
			"always",
			{ enforceForIfStatements: true },
		],
		"no-case-declarations": "off",
		"no-constant-condition": "off",
		"no-extra-semi": "warn",
		"no-inner-declarations": "off",
		"operator-assignment": "error",
		semi: "off",
		// interfere with next.config.cjs
		"jsdoc/check-tag-names": "off",
		"jsdoc/informative-docs": "error",
		"jsdoc/require-jsdoc": "off",
		"jsdoc/require-param": "off",
		"jsdoc/require-property": "off",
		"jsdoc/require-returns": "off",
		"n/no-extraneous-import": [
			"error",
			{
				allowModules: ["@turbopandarepo/ds"],
			},
		],
		"n/no-missing-import": "off",
		"perfectionist/sort-objects": [
			"error",
			{
				order: "asc",
				"partition-by-comment": true,
				type: "natural",
			},
		],
	},
};

export default eslintRules;
