import { defineTokens } from "@pandacss/dev";

import { getConfigFluidValue } from "../utils/getConfigFluidValue";

export const fontSizes = defineTokens.fontSizes({
	"1": { value: getConfigFluidValue(13, 16) },
	"2": { value: getConfigFluidValue(16, 20) },
	"3": { value: getConfigFluidValue(20, 25) },
	"4": { value: getConfigFluidValue(25, 31) },
	"5": { value: getConfigFluidValue(31, 39) },
	"6": { value: getConfigFluidValue(39, 49) },
	"7": { value: getConfigFluidValue(49, 61) },
	"8": { value: getConfigFluidValue(61, 76) },
	base: { value: "1rem" },
});
