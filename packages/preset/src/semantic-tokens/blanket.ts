import { defineSemanticTokens } from "@pandacss/dev";

export const blanket = defineSemanticTokens.colors({
	DEFAULT: {
		value: { _dark: "{colors.slate.100}", base: "{colors.slate.500}" },
	},
	danger: {
		value: { _dark: "#E3493514", base: "#EF5C4814" },
	},
	selected: {
		value: { _dark: "#1D7AFC14", base: "#388BFF14" },
	},
});
