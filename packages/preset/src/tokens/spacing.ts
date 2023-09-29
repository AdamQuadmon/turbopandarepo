import { defineTokens } from "@pandacss/dev";

import { getConfigFluidValue } from "../utils/getConfigFluidValue";

export const spacing = defineTokens.radii({
	"2xl": { value: getConfigFluidValue(64, 80) },
	"2xs": { value: getConfigFluidValue(8, 10) },
	"3xl": { value: getConfigFluidValue(96, 120) },
	"3xs": { value: getConfigFluidValue(4, 5) },
	l: { value: getConfigFluidValue(32, 40) },
	m: { value: getConfigFluidValue(24, 30) },
	s: { value: getConfigFluidValue(16, 20) },
	xl: { value: getConfigFluidValue(48, 60) },
	xs: { value: getConfigFluidValue(12, 15) },
});
