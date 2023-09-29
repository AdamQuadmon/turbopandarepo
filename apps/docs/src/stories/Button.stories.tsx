import type { Meta, StoryObj } from "@storybook/react";

import { css } from "@turbopandarepo/ds/css";
import { Button } from "@turbopandarepo/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	component: Button,
	tags: ["autodocs"],
	title: "Example/Button",
	// -
	decorators: [
		(Story) => (
			<div className={css({ m: 10 })}>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		label: "Button",
		variant: "solid",
	},
};

export const Secondary: Story = {
	args: {
		label: "Button",
	},
};

export const Large: Story = {
	args: {
		label: "Button",
		size: "lg",
	},
};

export const Small: Story = {
	args: {
		label: "Button",
		size: "sm",
	},
};
