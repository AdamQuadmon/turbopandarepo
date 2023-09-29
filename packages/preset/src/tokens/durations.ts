import { defineTokens } from "@pandacss/dev";

export const durations = defineTokens.durations({
	default: {
		value: "225ms",
	},
	fast: { value: "100ms" },
	largeMs: { value: "700ms" },
	mediumMs: { value: "350ms" },
	smallMs: { value: "100ms" },
});
