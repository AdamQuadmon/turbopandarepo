import { defineSemanticTokens } from "@pandacss/dev";

export const skeleton = defineSemanticTokens.colors({
	DEFAULT: {
		value: "{colors.slate.200}",
	},
	subtle: {
		value: "{colors.slate.100}",
	},
});
