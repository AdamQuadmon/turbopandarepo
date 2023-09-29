import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
	skeleton: {
		"0%": {
			backgroundPosition: "200% 0%",
		},
		"100%": {
			backgroundPosition: "-200% 0%",
		},
	},
});
