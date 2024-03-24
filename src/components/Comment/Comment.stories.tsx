import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Comment from "./Comment";

const meta: Meta<typeof Comment> = {
	component: Comment,
	title: "Components/Comment",
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: () => (
		<>
			{[
				{
					userName: "Toan",
					message: "Hello world!",
					timestamp: Date.now(),
				},
				{
					userName: "Toan",
					message: "Hello world!",
					timestamp: Date.now(),
				},
			].map((item) => (
				<Comment {...item} />
			))}
		</>
	),
};
