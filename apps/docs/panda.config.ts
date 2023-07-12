import { defineConfig } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

import presetPanda from "@turbopandarepo/preset";

export default defineConfig({
  presets: [presetPanda, preset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
