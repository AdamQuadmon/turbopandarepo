import { defineSemanticTokens } from "@pandacss/dev";

export const text = defineSemanticTokens.colors({
	DEFAULT: { value: "{colors.stone.900}" },
	accent: {
		DEFAULT: {
			bolder: {
				value: { _dark: "{colors.blue.200}", base: "{colors.900}" },
			},
			value: { _dark: "{colors.blue.300}", base: "{colors.blue.800}" },
		},
		gray: {
			DEFAULT: { value: "{colors.stone.800}" },
			bolder: { value: "{colors.stone.950}" },
		},
		green: {
			DEFAULT: {
				value: { _dark: "{colors.green.300}", base: "{colors.green.800}" },
			},
			bolder: {
				value: { _dark: "{colors.green.200}", base: "{colors.900}" },
			},
		},
		magenta: {
			DEFAULT: {
				value: {
					_dark: "{colors.magenta.300}",
					base: "{colors.magenta.800}",
				},
			},
			bolder: {
				value: { _dark: "{colors.magenta.200}", base: "{colors.900}" },
			},
		},
		orange: {
			DEFAULT: {
				value: { _dark: "{colors.orange.300}", base: "{colors.orange.800}" },
			},
			bolder: {
				value: { _dark: "{colors.orange.200}", base: "{colors.900}" },
			},
		},
		purple: {
			DEFAULT: {
				value: { _dark: "{colors.purple.300}", base: "{colors.purple.800}" },
			},
			bolder: {
				value: { _dark: "{colors.purple.200}", base: "{colors.900}" },
			},
		},
		red: {
			DEFAULT: {
				value: { _dark: "{colors.red.300}", base: "{colors.red.800}" },
			},
			bolder: { value: { _dark: "{colors.red.200}", base: "{colors.900}" } },
		},
		teal: {
			DEFAULT: {
				value: { _dark: "{colors.teal.300}", base: "{colors.teal.800}" },
			},
			bolder: {
				value: { _dark: "{colors.teal.200}", base: "{colors.900}" },
			},
		},
		yellow: {
			DEFAULT: {
				value: { _dark: "{colors.yellow.300}", base: "{colors.yellow.800}" },
			},
			bolder: {
				value: { _dark: "{colors.yellow.200}", base: "{colors.900}" },
			},
		},
	},
	brand: {
		value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
	},
	danger: {
		value: { _dark: "{colors.red.300}", base: "{colors.red.800}" },
	},
	disabled: {
		value: "{colors.stone.400}",
	},
	discovery: {
		value: { _dark: "{colors.purple.300}", base: "{colors.purple.800}" },
	},
	information: {
		value: { _dark: "{colors.blue.300}", base: "{colors.blue.800}" },
	},
	inverse: {
		value: "{colors.stone.10}",
	},
	selected: {
		value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
	},
	subtle: {
		value: "{colors.stone.800}",
	},
	subtlest: {
		value: "{colors.stone.700}",
	},
	success: {
		value: { _dark: "{colors.green.300}", base: "{colors.green.800}" },
	},
	warning: {
		DEFAULT: {
			value: { _dark: "{colors.orange.300}", base: "{colors.orange.800}" },
		},
		inverse: {
			value: { _dark: "{colors.stone.50}", base: "{colors.stone.900}" },
		},
	},
});
