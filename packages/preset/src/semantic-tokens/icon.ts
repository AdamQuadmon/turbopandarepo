import { defineSemanticTokens } from "@pandacss/dev";

export const icon = defineSemanticTokens.colors({
	DEFAULT: {
		value: "{colors.stone.600}",
	},
	accent: {
		blue: {
			value: "{colors.blue.500}",
		},
		gray: {
			value: "{colors.stone.600}",
		},
		green: {
			value: { _dark: "{colors.green.500}", base: "{colors.green.600}" },
		},
		magenta: {
			value: { _dark: "{colors.magenta.500}", base: "{colors.magenta.600}" },
		},
		orange: {
			value: { _dark: "{colors.orange.500}", base: "{colors.orange.600}" },
		},
		purple: {
			value: { _dark: "{colors.purple.500}", base: "{colors.purple.600}" },
		},
		red: {
			value: { _dark: "{colors.red.500}", base: "{colors.red.600}" },
		},
		teal: {
			value: { _dark: "{colors.teal.500}", base: "{colors.teal.600}" },
		},
		yellow: {
			value: { _dark: "{colors.yellow.500}", base: "{colors.yellow.600}" },
		},
	},
	brand: {
		value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
	},
	danger: {
		value: { _dark: "{colors.red.500}", base: "{colors.red.600}" },
	},
	disabled: {
		value: "{colors.slate.400}",
	},
	discovery: {
		value: { _dark: "{colors.purple.500}", base: "{colors.purple.600}" },
	},
	information: {
		value: { _dark: "{colors.blue.500}", base: "{colors.blue.600}" },
	},
	inverse: {
		value: "{colors.stone.50}",
	},
	selected: {
		value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
	},
	subtle: {
		value: "{colors.stone.700}",
	},
	success: {
		value: { _dark: "{colors.green.500}", base: "{colors.green.600}" },
	},
	warning: {
		DEFAULT: {
			value: { _dark: "{colors.orange.500}", base: "{colors.orange.600}" },
		},
		inverse: {
			value: { _dark: "{colors.stone.50}", base: "{colors.stone.900}" },
		},
	},
});
