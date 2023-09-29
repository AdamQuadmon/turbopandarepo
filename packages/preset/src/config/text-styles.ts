import { defineTextStyles } from "@pandacss/dev";

export const textStyles = defineTextStyles({
	base: {
		value: {
			fontFamily: "sans",
			fontSize: "2",
			fontWeight: "normal",
			lineHeight: "normal",
		},
	},
	body: {
		value: {
			fontFamily: "sans",
			fontSize: "2",
			fontWeight: "normal",
			lineHeight: "normal",
		},
	},
	h1: {
		value: {
			fontSize: "6",
			letterSpacing: "tighter",
			lineHeight: "none",
		},
	},
	h2: {
		value: {
			fontSize: { base: "4", lg: "5" },
			letterSpacing: "tight",
			lineHeight: "tight",
		},
	},
	h3: {
		value: {
			fontSize: { base: "3", lg: "4" },
			letterSpacing: "tight",
			lineHeight: "tight",
		},
	},
	h4: {
		value: {
			fontSize: "2",
			letterSpacing: "tight",
			lineHeight: "tight",
		},
	},
	heading: {
		value: {
			fontFamily: "sans",
			fontSize: "4",
			fontWeight: "normal",
			lineHeight: "normal",
		},
	},
});
