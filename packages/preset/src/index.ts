import { semanticColors } from "./colors/semantic";
import { colors } from "./colors/socials";
import { buttonRecipe } from "./recipes/button.recipe";

import type { Config } from "@pandacss/types";

const definePreset = <T extends Config>(config: T) => config;

const preset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: colors,
      },
      semanticTokens: {
        colors: semanticColors,
      },

      recipes: {
        button: buttonRecipe,
      },
    },
  },
});

export default preset;

// export { preset, buttonRecipe };
