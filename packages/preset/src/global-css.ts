import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
	html: {
		MozOsxFontSmoothing: "grayscale",
		WebkitFontSmoothing: "antialiased",
		WebkitTextSizeAdjust: "100%",
		minHeight: "100%",
		textRendering: "optimizeLegibility",
	},
});
