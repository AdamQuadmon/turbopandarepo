import { css } from "@turbopandarepo/ds/css";
import { Button } from "@turbopandarepo/ui";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={css({ m: 10 })}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};
