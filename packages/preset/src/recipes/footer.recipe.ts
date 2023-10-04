import { defineSlotRecipe } from "@pandacss/dev";

const slots = ["header", "navMain", "root", "left", "center", "right", "hr"];

export const footer = defineSlotRecipe({
	base: {
		center: {},
		header: {
			borderBottomWidth: {
				_horizontal: "1px",
			},
			borderLeftWidth: {
				_vertical: "1px",
			},
			display: "flex",
			flexDirection: {
				_horizontal: "row",
				_vertical: "column",
			},
			gap: {
				_horizontal: "4",
				_vertical: "1",
			},
			// justifyContent: "space-between",
			position: "relative",
			px: { base: "", md: "4" },
			py: { base: "2", md: "3" },
		},
		hr: {
			_dark: { borderColor: "neutral.800" },
		},
		left: {
			display: "flex",
			gap: {
				_horizontal: "4",
				_vertical: "1",
			},
		},
		navMain: {
			display: "flex",
			gap: 2,
		},
		right: {},
		root: {
			_dark: { bg: "neutral.900" },
			bg: "stone.100",

			pb: "env(safe-area-inset-bottom)",
		},
	},
	className: "footer",
	description: "A footer style",
	slots,
	variants: {
		size: {
			md: {},
		},
		variant: {
			main: {},
		},
	},
});
