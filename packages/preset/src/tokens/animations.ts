import { defineTokens } from "@pandacss/dev";

export const animations = defineTokens.animations({
	"shrink-out": {
		value: "shrink-out 0.125s ease-in-out",
	},
	skeleton: {
		value: "skeleton 8s ease-in-out infinite",
	},
	spin: {
		value: "spin 1s linear infinite",
	},
});
