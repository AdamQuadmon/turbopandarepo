import { defineSemanticTokens } from "@pandacss/dev";

import { background } from "./background";
import { blanket } from "./blanket";
import { border } from "./border";
import { icon } from "./icon";
import { interaction } from "./interaction";
import { link } from "./link";
import { skeleton } from "./skeleton";
import { text } from "./text";

// inspired by https://github.com/chakra-ui/panda/tree/main/packages/preset-atlaskit
export const semanticTokens = defineSemanticTokens({
	colors: {
		background,
		blanket,
		border,
		icon,
		interaction,
		link,
		skeleton,
		text,
	},
});
