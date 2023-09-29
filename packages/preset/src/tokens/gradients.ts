import { defineTokens } from "@pandacss/dev";

export const gradients = defineTokens.gradients({
	// string value
	simple: { value: "linear-gradient(to right, red, blue)" },
	// composite value
	primary: {
		value: {
			placement: "to right",
			stops: ["red", "blue"],
			type: "linear",
		},
	},
});
