import { defineSlotRecipe } from "@pandacss/dev";

const slots = ["root", "icon", "content"];

export const callout = defineSlotRecipe({
	base: {
		content: {
			lineHeight: "1.75rem",
			minWidth: 0,
			width: "100%",
		},
		icon: {
			_ltr: { pl: 3, pr: 2 },
			_rtl: { pl: 2, pr: 3 },
			fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			textStyle: "xl",
			userSelect: "none",
		},
		root: {
			_ltr: { pr: 4 },
			_moreContrast: {
				_dark: { borderColor: "currentColor" },
				color: "currentColor",
			},
			_rtl: { pl: 4 },
			border: "1px solid",
			borderRadius: "lg",
			display: "flex",
			mt: 6,
			overflowX: "auto",
			py: 2,
		},
	},
	className: "callout",
	defaultVariants: {
		type: "default",
	},
	description: "A callout style",
	jsx: ["Callout"],
	slots,
	variants: {
		type: {
			default: {
				root: {
					_dark: {
						backgroundColor: "rgb(251 146 60 / 0.2)",
						borderColor: "rgb(251 146 60 / 0.3)", // opacity modifier
						color: "orange.300",
					},
					backgroundColor: "orange.50",
					borderColor: "orange.100",
					color: "orange.800",
				},
			},
			error: {
				root: {
					_dark: {
						backgroundColor: "rgb(127 29 29 / 0.3)",
						borderColor: "rgb(248 113 113 / 0.3)",
						color: "red.200",
					},
					backgroundColor: "red.50",
					borderColor: "red.100",
					color: "red.800",
				},
			},
			info: {
				root: {
					_dark: {
						backgroundColor: "rgb(30 58 138 / 0.3)",
						borderColor: "rgb(191 219 254 / 0.3)",
						color: "blue.200",
					},
					backgroundColor: "blue.50",
					borderColor: "blue.100",
					color: "blue.800",
				},
			},
			warning: {
				root: {
					_dark: {
						backgroundColor: "rgb(113 63 18 / 0.3)",
						borderColor: "rgb(254 240 138 / 0.3)",
						color: "yellow.200",
					},
					backgroundColor: "yellow.50",
					borderColor: "yellow.100",
					color: "yellow.800",
				},
			},
		},
	},
});
