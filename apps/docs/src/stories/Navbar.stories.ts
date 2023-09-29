import type { Meta, StoryObj } from "@storybook/react";

// import { userEvent, within } from "@storybook/testing-library";
import { Navbar } from "~/components/layout/navbar";

const meta: Meta<typeof Navbar> = {
	component: Navbar,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
		docs: {
			story: {
				iframeHeight: 700,
				inline: false,
			},
		},
		layout: "fullscreen",
		nextjs: {
			// https://storybook.js.org/recipes/next#configuring-nextnavigation
			appDirectory: true,
			navigation: {
				pathname: "/docs",
			},
		},
	},
	title: "Example/Navbar",
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
	// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
	// play: async ({ canvasElement }) => {
	// 	const canvas = within(canvasElement);
	// 	const loginButton = canvas.getByRole("button", {
	// 		name: /Log in/i,
	// 	});
	// 	await userEvent.click(loginButton);
	// },
};

export const LoggedOut: Story = {};
