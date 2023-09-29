import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				// color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		// docs: {
		// 	toc: true,
		// },
		nextjs: {
			// https://storybook.js.org/recipes/next#configuring-nextnavigation
			appDirectory: true,
			navigation: {
				pathname: "/docs",
			},
		},
	},
};

export default preview;
