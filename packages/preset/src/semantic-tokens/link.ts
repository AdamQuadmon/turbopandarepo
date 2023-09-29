import { defineSemanticTokens } from "@pandacss/dev";

export const link = defineSemanticTokens.colors({
	DEFAULT: {
		value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
	},
	pressed: {
		value: { _dark: "{colors.blue.300}", base: "{colors.blue.800}" },
	},
});
