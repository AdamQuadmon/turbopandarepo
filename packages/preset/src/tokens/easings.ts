import { defineTokens } from "@pandacss/dev";

export const easings = defineTokens.easings({
	default: { value: [0.4, 0, 0.2, 1] },
	easeIn: { value: [0.4, 0, 0.2, 1] },
	easeInOut: { value: [0.15, 1, 0.3, 1] },
	easeOut: { value: [0.2, 0, 0, 1] },
});
