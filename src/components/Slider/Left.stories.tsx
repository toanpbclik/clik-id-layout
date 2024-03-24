import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LayoutLevel from "../LayoutLevel/LayoutLevel";
import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
	component: Slider,
	title: "Components/Slider/Left",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Layout Screen with Layout Level and Slider UI Components
 *
 * Toggle Left Sliders by clicking on the left button in the header
 */
export const SliderLeft: Story = {
	args: { backgroundColor: "#b7eB8f", mode: "left" },
	render: (args) => {
		const [isLeftShown, setLeftShown] = useState<boolean>(false);

		return (
			<div
				style={{
					position: "relative",
					width: "100%",
					height: 400,
					display: "grid",
					gridTemplateAreas: `'header header' 'menu-left main-content'`,
					gridTemplateRows: "var(--layout-level-header--height) 1fr",
					gridTemplateColumns: "var(--layout-level-menu-left--width) 1fr",
					overflow: "hidden",
				}}
			>
				<LayoutLevel
					backgroundColor="#dfdfdf"
					height="var(--layout-level-header--height)"
					padding="4px 16px"
					gridArea="header"
					zIndex={2}
				>
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();

							setLeftShown(!isLeftShown);
						}}
					>
						Toggle
					</button>
				</LayoutLevel>
				<LayoutLevel
					backgroundColor="#dfdfdf"
					width="var(--layout-level-menu-left--width)"
					paddingLeft={12}
					gridArea="menu-left"
					zIndex={2}
				/>
				<LayoutLevel
					backgroundColor="#dfdfdf"
					padding={0}
					gridArea="main-content"
				/>
				<Slider isShown={isLeftShown} {...args} />
			</div>
		);
	},
};
