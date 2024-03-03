import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const DefaultButton: Story = {
  args: {
    label: "Button",
  },
};
