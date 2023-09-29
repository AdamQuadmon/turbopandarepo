import { defineTokens } from "@pandacss/dev";

export const shadows = defineTokens.shadows({
	focus: { value: "0 0 0 3px {colors.amber.500}" },
	// string value
	subtle: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
	// composite value
	accent: {
		// TODO: check this typescript error
		// value: {
		// 	blurRadius: 4,
		// 	color: "rgba(0, 0, 0, 0.1)",
		// 	offsetX: 0,
		// 	offsetY: 4,
		// 	spreadRadius: 0,
		// },
	},
	// multiple string values
	realistic: {
		value: [
			"0 1px 2px 0 rgba(0, 0, 0, 0.05)",
			"0 1px 4px 0 rgba(0, 0, 0, 0.1)",
		],
	},
});
