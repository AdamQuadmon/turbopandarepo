import { defineConfig } from "@pandacss/dev";
// import pandaPreset from "@pandacss/preset-panda";
import presetPark from "@park-ui/presets";
import turborepoPreset from "@turbopandarepo/preset";
import radixColorsPreset from "pandacss-preset-radix-colors";
import typographyPreset from "pandacss-preset-typography";

export default defineConfig({
	presets: [
		// using pandaPreset gives typescript errors on vscode
		"@pandacss/dev/presets",
		// pandaPreset,
		"panda-transitions-css",
		"animated-pandacss",
		radixColorsPreset(),
		typographyPreset({
			recipe: {
				// Name of the recipe export
				className: "prose",
				name: "prose",
				// Sizes you want to include
				defaultSize: "base",
				sizes: ["sm", "base", "lg", "xl", "2xl"],
				// Enable/disable not-prose functionality
				// just like in TailwindCSS
				notProse: false,
				// notProse: true,
				// notProse: {
				//   className: "not-prose",
				// },
				semanticTokens: {
					// defaults: true,
					defaults: {
						// Set a color palette to use for the defaults.
						// It only works with colors that have a numeric scale (11x)
						// from 50 to 950. (50, 100, 200, ..., 800, 900, 950).
						colorPalette: "slate",
					},
					// The prefix to use for semantic tokens.
					// ex: --colors-<prefix>-body
					prefix: "prose",
				},
			},
		}),
		presetPark,
		turborepoPreset,
	],
	// Whether to use css reset
	exclude: [],

	include: [
		"./node_modules/@turbopandarepo/ui/src/**/*.tsx",
		"./src/**/*.{js,jsx,ts,tsx}",
	],

	jsxFramework: "react",

	preflight: true,
	theme: {
		extend: {},
	},
	// The output directory for your css system
	outExtension: "js",
	outdir: "@turbopandarepo/ds",
	// https://panda-docs.vercel.app/docs/guides/component-library#use-panda-as-external-package
	emitPackage: true,
});
