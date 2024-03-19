import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import BlockComponent from "./Block";
import ContentComponent from "./Content";
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

/**
 * Content with Content UI Component
 *
 * Inside a Slider UI Component with Header by using Block UI Component
 */
export const Content: Story = {
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
