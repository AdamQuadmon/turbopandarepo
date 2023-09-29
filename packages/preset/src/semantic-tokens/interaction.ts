import { defineSemanticTokens } from "@pandacss/dev";

export const interaction = defineSemanticTokens.colors({
	hovered: {
		value: { _dark: "#ffffff33", base: "#00000029" },
	},
	pressed: {
		value: { _dark: "#ffffff5c", base: "#00000052" },
	},
});
