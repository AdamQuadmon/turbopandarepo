import { semanticColors } from "./colors/semantic";
import { colors } from "./colors/socials";
import { recipes } from "./recipes";

import type { Config } from "@pandacss/types";

const definePreset = <T extends Config>(config: T) => config;

const preset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors,
      },
      semanticTokens: {
        colors: semanticColors,
      },

      recipes,
    },
  },
});

export default preset;

// export { preset, buttonRecipe };
