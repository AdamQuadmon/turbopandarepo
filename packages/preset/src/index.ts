import type { Preset } from "@pandacss/types";

import { definePreset } from "@pandacss/dev";

import { breakpoints } from "./config/breakpoints";
import { keyframes } from "./config/keyframes";
import { layerStyles } from "./config/layer-styles";
import { textStyles } from "./config/text-styles";
import { globalCss } from "./global-css";
import { recipes, slotRecipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { tokens } from "./tokens";

const preset: Preset = definePreset({
	globalCss,
	theme: {
		extend: {
			breakpoints,
			keyframes,
			layerStyles,
			recipes,
			semanticTokens,
			slotRecipes,
			textStyles,
			tokens,
		},
	},
});

export default preset;
