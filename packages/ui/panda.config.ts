import { defineConfig } from "@pandacss/dev";
// import pandaPreset from "@pandacss/preset-panda";
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
			prose: {
				colors: {
					body: "slate.12",
					bold: "slate.12",
					bullet: "slate.11",
					caption: "slate.11",
					code: "amber.11",
					counter: "slate.11",
					heading: "slate.12",
					hrBorder: "slate.6",
					lead: "slate.12",
					link: "blue.11",
					preBackground: "slate.2",
					preCode: "slate.12",
					quote: "slate.11",
					quoteBorder: "slate.6",
					tdBorder: "slate.6",
					thBorder: "slate.6",
				},
				name: "typography",
				// Advanced JSX tracking:
				// https://panda-css.com/docs/concepts/recipes#advanced-jsx-tracking
				jsx: ["Button", "Link", /Button$/],
			},
		}),
		"@park-ui/presets",
		turborepoPreset,
	],
	// Whether to use css reset
	exclude: [],

	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	jsxFramework: "react",

	preflight: true,
	theme: {
		extend: {},
	},
	// The output extension and directory for your css system
	outExtension: "js",
	outdir: "@turbopandarepo/ds",
	// https://panda-docs.vercel.app/docs/guides/component-library#use-panda-as-external-package
	emitPackage: true,
});
