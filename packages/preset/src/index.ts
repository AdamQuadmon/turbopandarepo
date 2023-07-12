import { semanticColors } from "./colors/semantic";
import { colors } from "./colors/socials";

import type { Config } from "@pandacss/types";

const definePreset = <T extends Config>(config: T) => config;

export const preset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: colors,
      },
      semanticTokens: {
        colors: semanticColors,
      },
    },
  },
});

export default preset;
