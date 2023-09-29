import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	docs: {
		autodocs: "tag",
	},
	features: {
		storyStoreV7: true,
	},
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	refs: {
		// web: {
		//   title: "Web",
		//   url:
		//     process.env.NODE_ENV === "development"
		//       ? "http://localhost:6007/"
		//       : "web/",
		// },
		// ui: {
		//   title: "Ui",
		//   url:
		//     process.env.NODE_ENV === "development"
		//       ? "http://localhost:6008/"
		//       : "ui/",
		// },
	},
	stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
};
export default config;
