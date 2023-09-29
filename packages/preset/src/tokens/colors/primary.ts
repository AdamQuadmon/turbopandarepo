import { defineTokens } from "@pandacss/dev";

import { makePrimaryColor } from "../../utils/colors";

export const primary = defineTokens.colors({
	50: makePrimaryColor(97),
	100: makePrimaryColor(94),
	200: makePrimaryColor(86),
	300: makePrimaryColor(77),
	400: makePrimaryColor(66),
	500: makePrimaryColor(50),
	600: makePrimaryColor(45),
	700: makePrimaryColor(39),
	750: makePrimaryColor(35),
	800: makePrimaryColor(32),
	900: makePrimaryColor(24),
});
