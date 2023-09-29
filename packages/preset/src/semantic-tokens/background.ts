import { defineSemanticTokens } from "@pandacss/dev";

export const background = defineSemanticTokens.colors({
	accent: {
		blue: {
			bolder: {
				value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
			},
			subtle: {
				value: { _dark: "{colors.blue.800}", base: "{colors.blue.400}" },
			},
			subtler: {
				value: { _dark: "{colors.blue.900}", base: "{colors.blue.200}" },
			},
			subtlest: {
				value: { _dark: "{colors.blue.1000}", base: "{colors.blue.100}" },
			},
		},
		gray: {
			bolder: {
				value: "{colors.stone.700}",
			},
			subtle: {
				value: { _dark: "{colors.stone.500}", base: "{colors.stone.400}" },
			},
			subtler: {
				value: { _dark: "{colors.stone.400}", base: "{colors.stone.300}" },
			},
			subtlest: {
				value: { _dark: "{colors.stone.300}", base: "{colors.stone.200}" },
			},
		},
		green: {
			bolder: {
				value: { _dark: "{colors.green.400}", base: "{colors.green.700}" },
			},
			subtle: {
				value: { _dark: "{colors.green.800}", base: "{colors.green.400}" },
			},
			subtler: {
				value: { _dark: "{colors.green.900}", base: "{colors.green.200}" },
			},
			subtlest: {
				value: { _dark: "{colors.green.1000}", base: "{colors.green.100}" },
			},
		},
		magenta: {
			bolder: {
				value: {
					_dark: "{colors.magenta.400}",
					base: "{colors.magenta.700}",
				},
			},
			subtle: {
				value: {
					_dark: "{colors.magenta.800}",
					base: "{colors.magenta.400}",
				},
			},
			subtler: {
				value: {
					_dark: "{colors.magenta.900}",
					base: "{colors.magenta.200}",
				},
			},
			subtlest: {
				value: {
					_dark: "{colors.magenta.1000}",
					base: "{colors.magenta.100}",
				},
			},
		},
		orange: {
			bolder: {
				value: { _dark: "{colors.orange.400}", base: "{colors.orange.700}" },
			},
			subtle: {
				value: { _dark: "{colors.orange.800}", base: "{colors.orange.400}" },
			},
			subtler: {
				value: { _dark: "{colors.orange.900}", base: "{colors.orange.200}" },
			},
			subtlest: {
				value: { _dark: "{colors.orange.1000}", base: "{colors.orange.100}" },
			},
		},
		purple: {
			bolder: {
				value: { _dark: "{colors.purple.400}", base: "{colors.purple.700}" },
			},
			subtle: {
				value: { _dark: "{colors.purple.800}", base: "{colors.purple.400}" },
			},
			subtler: {
				value: { _dark: "{colors.purple.900}", base: "{colors.purple.200}" },
			},
			subtlest: {
				value: { _dark: "{colors.purple.1000}", base: "{colors.purple.100}" },
			},
		},
		red: {
			bolder: {
				value: { _dark: "{colors.red.400}", base: "{colors.red.700}" },
			},
			subtle: {
				value: { _dark: "{colors.red.800}", base: "{colors.red.400}" },
			},
			subtler: {
				value: { _dark: "{colors.red.900}", base: "{colors.red.200}" },
			},
			subtlest: {
				value: { _dark: "{colors.red.1000}", base: "{colors.red.100}" },
			},
		},
		teal: {
			bolder: {
				value: { _dark: "{colors.teal.400}", base: "{colors.teal.700}" },
			},
			subtle: {
				value: { _dark: "{colors.teal.800}", base: "{colors.teal.400}" },
			},
			subtler: {
				value: { _dark: "{colors.teal.900}", base: "{colors.teal.200}" },
			},
			subtlest: {
				value: { _dark: "{colors.teal.1000}", base: "{colors.teal.100}" },
			},
		},
		yellow: {
			bolder: {
				value: { _dark: "{colors.yellow.400}", base: "{colors.yellow.700}" },
			},
			subtle: {
				value: { _dark: "{colors.yellow.800}", base: "{colors.yellow.400}" },
			},
			subtler: {
				value: { _dark: "{colors.yellow.900}", base: "{colors.yellow.200}" },
			},
			subtlest: {
				value: { _dark: "{colors.yellow.1000}", base: "{colors.yellow.100}" },
			},
		},
	},
	brand: {
		bold: {
			DEFAULT: {
				value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
			},
			hovered: {
				value: { _dark: "{colors.blue.300}", base: "{colors.blue.800}" },
			},
			pressed: {
				value: { _dark: "{colors.blue.200}", base: "{colors.blue.900}" },
			},
		},
	},
	danger: {
		DEFAULT: {
			value: { _dark: "{colors.red.1000}", base: "{colors.red.100}" },
		},
		bold: {
			DEFAULT: {
				value: { _dark: "{colors.red.400}", base: "{colors.red.700}" },
			},
			hovered: {
				value: { _dark: "{colors.red.300}", base: "{colors.red.800}" },
			},
			pressed: {
				value: { _dark: "{colors.red.200}", base: "{colors.red.900}" },
			},
		},
		hovered: {
			value: { _dark: "{colors.red.900}", base: "{colors.red.200}" },
		},
		pressed: {
			value: { _dark: "{colors.red.800}", base: "{colors.red.300}" },
		},
	},
	disabled: {
		value: "{colors.stone.100}",
	},
	discovery: {
		DEFAULT: {
			value: { _dark: "{colors.purple.1000}", base: "{colors.purple.100}" },
		},
		bold: {
			DEFAULT: {
				value: { _dark: "{colors.purple.400}", base: "{colors.purple.700}" },
			},
			hovered: {
				value: { _dark: "{colors.purple.300}", base: "{colors.purple.800}" },
			},
			pressed: {
				value: { _dark: "{colors.purple.200}", base: "{colors.purple.900}" },
			},
		},
		hovered: {
			value: { _dark: "{colors.purple.900}", base: "{colors.purple.200}" },
		},
		pressed: {
			value: { _dark: "{colors.purple.800}", base: "{colors.purple.300}" },
		},
	},
	information: {
		DEFAULT: {
			value: { _dark: "{colors.blue.1000}", base: "{colors.blue.100}" },
		},
		bold: {
			DEFAULT: {
				value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
			},
			hovered: {
				value: { _dark: "{colors.blue.300}", base: "{colors.blue.800}" },
			},
			pressed: {
				value: { _dark: "{colors.blue.200}", base: "{colors.blue.900}" },
			},
		},
		hovered: {
			value: { _dark: "{colors.blue.900}", base: "{colors.blue.200}" },
		},
		pressed: {
			value: { _dark: "{colors.blue.800}", base: "{colors.blue.300}" },
		},
	},
	input: {
		DEFAULT: {
			value: { _dark: "{colors.slate.100}", base: "{colors.stone.50}" },
		},
		hovered: {
			value: { _dark: "{colors.stone.200}", base: "{colors.stone.100}" },
		},
		pressed: {
			value: { _dark: "{colors.stone.100}", base: "{colors.stone.50}" },
		},
	},
	inverse: {
		subtle: {
			DEFAULT: {
				value: { _dark: "#FFFFFF29", base: "#00000029" },
			},
			hovered: {
				value: { _dark: "#FFFFFF3D", base: "#0000003D" },
			},
			pressed: {
				value: { _dark: "#FFFFFF52", base: "#00000052" },
			},
		},
	},
	selected: {
		DEFAULT: {
			value: { _dark: "{colors.blue.1000}", base: "{colors.blue.100}" },
		},
		bold: {
			DEFAULT: {
				value: { _dark: "{colors.blue.400}", base: "{colors.blue.700}" },
			},
			hovered: {
				value: { _dark: "{colors.blue.300}", base: "{colors.blue.800}" },
			},
			pressed: {
				value: { _dark: "{colors.blue.200}", base: "{colors.blue.900}" },
			},
		},
		hovered: {
			value: { _dark: "{colors.blue.900}", base: "{colors.blue.200}" },
		},
		pressed: {
			value: { _dark: "{colors.blue.800}", base: "{colors.blue.300}" },
		},
	},
	slate: {
		DEFAULT: {
			value: "{colors.slate.200}",
		},
		bold: {
			DEFAULT: {
				value: "{colors.stone.800}",
			},
			hovered: {
				value: "{colors.stone.900}",
			},
			pressed: {
				value: "{colors.stone.900}",
			},
		},
		hovered: {
			value: "{colors.slate.300}",
		},
		pressed: {
			value: "{colors.slate.400}",
		},
		subtle: {
			DEFAULT: {
				value: "transparent",
			},
			hovered: {
				value: "{colors.slate.200}",
			},
			pressed: {
				value: "{colors.slate.300}",
			},
		},
	},
	success: {
		DEFAULT: {
			value: { _dark: "{colors.green.1000}", base: "{colors.green.100}" },
		},
		bold: {
			DEFAULT: {
				value: { _dark: "{colors.green.400}", base: "{colors.green.700}" },
			},
			hovered: {
				value: { _dark: "{colors.green.300}", base: "{colors.green.800}" },
			},
			pressed: {
				value: { _dark: "{colors.green.200}", base: "{colors.green.900}" },
			},
		},
		hovered: {
			value: { _dark: "{colors.green.900}", base: "{colors.green.200}" },
		},
		pressed: {
			value: { _dark: "{colors.green.800}", base: "{colors.green.300}" },
		},
	},
	warning: {
		DEFAULT: {
			value: { _dark: "{colors.yellow.1000}", base: "{colors.yellow.100}" },
		},
		bold: {
			DEFAULT: {
				value: { _dark: "{colors.yellow.400}", base: "{colors.yellow.400}" },
			},
			hovered: {
				value: { _dark: "{colors.yellow.300}", base: "{colors.yellow.500}" },
			},
			pressed: {
				value: { _dark: "{colors.yellow.200}", base: "{colors.yellow.600}" },
			},
		},
		hovered: {
			value: { _dark: "{colors.yellow.900}", base: "{colors.yellow.200}" },
		},
		pressed: {
			value: { _dark: "{colors.yellow.800}", base: "{colors.yellow.300}" },
		},
	},
});
