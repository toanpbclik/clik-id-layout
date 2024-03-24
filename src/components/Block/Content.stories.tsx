import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import BlockComponent from "./Block";
import ContentComponent from "./Content";
import Slider from "../Slider";

const meta: Meta<typeof BlockComponent> = {
	component: BlockComponent,
	title: "Layouts/Block/Content",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Example with Content UI Component
 *
 * Inside a Slider UI Component with Header by using Block UI Component
 */
export const Example: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 400,
				overflow: "hidden",
			}}
		>
			<Slider isShown backgroundColor="#dfdfdf" top={0} left={0}>
				<BlockComponent backgroundColor="#dfdfdf">Header</BlockComponent>
				<ContentComponent backgroundColor="#87e8de">
					<div style={{ height: 1000, backgroundColor: "#ffd591" }}>
						Height: 1000px
					</div>
				</ContentComponent>
			</Slider>
		</div>
	),
};
