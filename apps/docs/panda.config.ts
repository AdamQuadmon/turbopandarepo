import { defineConfig } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

import presetPanda from "@turbopandarepo/preset";

export default defineConfig({
  presets: [presetPanda, preset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./node_modules/@turbopandarepo/ds/src/**/*.ts*",
    "./node_modules/@turbopandarepo/ui/src/**/*.ts*",
    // "./node_modules/@turbopandarepo/preset/src/**/*.ts*",
    // using this instead of the above will trigger a refresh when the preset is changed
    // but config:change is not triggered
    //
    // touching this config will trigger a refresh and config:change is triggered
    // but still the style is not updated until storybook reload
    "../../packages/preset/src/**/*.ts*",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },
  hooks: {
    "config:resolved": (conf) => {
      // console.log(JSON.stringify(conf, null, 5));
      console.log("🐼 config:resolve");
    },
    "config:change": (conf) => {
      console.log(
        "🐼 config:change",
        JSON.stringify(conf?.theme?.recipes, null, 5),
      );
    },
    "parser:before": (file, _content) => {
      console.log("🐼 parser:before", file);
    },
    "generator:css": (file, _css) => {
      console.log("🐼 generator:css", file);
    },
  },
  // The output directory for your css system
  outdir: "@turbopandarepo/ds",
  // https://panda-docs.vercel.app/docs/guides/component-library#use-panda-as-external-package
  emitPackage: true,
});
