import { defineTokens } from "@pandacss/dev";

export const borders = defineTokens.borders({
	// string value
	subtle: { value: "1px solid red" },
	// string value with reference to color token
	danger: { value: "1px solid {colors.red.400}" },
	// composite value
	accent: { value: { color: "red", style: "solid", width: "1px" } },
});
