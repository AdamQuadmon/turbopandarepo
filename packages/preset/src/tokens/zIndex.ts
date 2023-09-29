import { defineTokens } from "@pandacss/dev";

export const zIndex = defineTokens.zIndex({
	init: { value: 0 },
	modal: { value: 10000 },
	nuclear: { value: 9999 },
	over: { value: 1 },
	under: { value: -1 },
});
