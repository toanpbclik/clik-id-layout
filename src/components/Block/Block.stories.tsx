import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import BlockComponent from "./Block";
import Slider from "../Slider";

const meta: Meta<typeof BlockComponent> = {
	component: BlockComponent,
	title: "Components/Block",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Header with Block UI Component
 *
 * Inside a Slider UI Component
 */
export const Header: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 200,
				overflow: "hidden",
			}}
		>
			<Slider isShown backgroundColor="#dfdfdf" top={0} left={0}>
				<BlockComponent backgroundColor="#87e8de">Action</BlockComponent>
			</Slider>
			<Slider isShown mode="right" backgroundColor="#dfdfdf" top={0}>
				<BlockComponent backgroundColor="#87e8de">Header</BlockComponent>
			</Slider>
		</div>
	),
};
