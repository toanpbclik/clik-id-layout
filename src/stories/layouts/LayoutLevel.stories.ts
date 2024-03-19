import type { Meta, StoryObj } from "@storybook/react";

import LayoutLevel from "./layoutLevel";

const meta: Meta<typeof LayoutLevel> = {
  component: LayoutLevel,
  title: "Display Level",
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Screen: Story = {
  args: {
    backgroundColor: "#ffd591",
    height: 230,
  },
};

export const Zone: Story = {
  args: {
    backgroundColor: "#b7eB8f",
    height: 230,
  },
};

export const Block: Story = {
  args: {
    backgroundColor: "#87e8de",
    height: 230,
  },
};

export const Component: Story = {
  args: {
    backgroundColor: "#91d5ff",
    height: 230,
  },
};
