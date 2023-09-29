import { defineTokens } from "@pandacss/dev";

import { primary } from "./colors/primary";
import { socials } from "./colors/socials";

export const colors = defineTokens.colors({
	black: { value: "#000" },
	blackAlpha: {
		50: { value: "rgba(0, 0, 0, 0.04)" },
		100: { value: "rgba(0, 0, 0, 0.06)" },
		200: { value: "rgba(0, 0, 0, 0.08)" },
		300: { value: "rgba(0, 0, 0, 0.16)" },
		400: { value: "rgba(0, 0, 0, 0.24)" },
		500: { value: "rgba(0, 0, 0, 0.36)" },
		600: { value: "rgba(0, 0, 0, 0.48)" },
		700: { value: "rgba(0, 0, 0, 0.64)" },
		800: { value: "rgba(0, 0, 0, 0.80)" },
		900: { value: "rgba(0, 0, 0, 0.92)" },
	},
	current: { value: "currentColor" },
	dark: { value: "#111" },
	primary,
	socials,
	white: { value: "#fff" },
	whiteAlpha: {
		50: { value: "rgba(255, 255, 255, 0.04)" },
		100: { value: "rgba(255, 255, 255, 0.06)" },
		200: { value: "rgba(255, 255, 255, 0.08)" },
		300: { value: "rgba(255, 255, 255, 0.16)" },
		400: { value: "rgba(255, 255, 255, 0.24)" },
		500: { value: "rgba(255, 255, 255, 0.36)" },
		600: { value: "rgba(255, 255, 255, 0.48)" },
		700: { value: "rgba(255, 255, 255, 0.64)" },
		800: { value: "rgba(255, 255, 255, 0.80)" },
		900: { value: "rgba(255, 255, 255, 0.92)" },
	},
});
