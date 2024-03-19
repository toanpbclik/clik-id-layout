import type { Meta, StoryObj } from "@storybook/react";

import LayoutLevel from "./LayoutLevel";

const meta: Meta<typeof LayoutLevel> = {
	component: LayoutLevel,
	title: "Components/Display Level",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Screen with Layout Level UI Component
 */
export const Screen: Story = {
	args: { backgroundColor: "#ffd591", height: 230 },
};

/**
 * Zone with Layout Level UI Component
 */
export const Zone: Story = {
	args: { backgroundColor: "#b7eB8f", height: 230 },
};

/**
 * Block with Layout Level UI Component
 */
export const Block: Story = {
	args: { backgroundColor: "#87e8de", height: 230 },
};

/**
 * Component with Layout Level UI Component
 */
export const Component: Story = {
	args: { backgroundColor: "#91d5ff", height: 230 },
};
