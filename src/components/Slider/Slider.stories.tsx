import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LayoutLevel from "../LayoutLevel/LayoutLevel";
import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
	component: Slider,
	title: "Components/Slider",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutScreen: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 400,
				display: "grid",
				gridTemplateAreas: `'header header' 'menu-left main-content'`,
				gridTemplateRows: "var(--layout-level-header--height) 1fr",
				gridTemplateColumns: "var(--layout-level-menu-left--width) 1fr",
			}}
		>
			<LayoutLevel
				backgroundColor="#ffd591"
				height="var(--layout-level-header--height)"
				padding="4px 16px"
				gridArea="header"
				zIndex={2}
			/>
			<LayoutLevel
				backgroundColor="#b7eB8f"
				width="var(--layout-level-menu-left--width)"
				paddingLeft={12}
				gridArea="menu-left"
				zIndex={2}
			/>
			<LayoutLevel
				backgroundColor="#87e8de"
				padding={0}
				gridArea="main-content"
			/>
			<Slider backgroundColor="#b7eB8f" />
			<Slider mode="right" backgroundColor="#b7eB8f" />
		</div>
	),
};

export const SliderLeft: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 400,
				display: "grid",
				gridTemplateAreas: `'header header' 'menu-left main-content'`,
				gridTemplateRows: "var(--layout-level-header--height) 1fr",
				gridTemplateColumns: "var(--layout-level-menu-left--width) 1fr",
			}}
		>
			<LayoutLevel
				backgroundColor="#ffd591"
				height="var(--layout-level-header--height)"
				padding="4px 16px"
				gridArea="header"
				zIndex={2}
			/>
			<LayoutLevel
				backgroundColor="#b7eB8f"
				width="var(--layout-level-menu-left--width)"
				paddingLeft={12}
				gridArea="menu-left"
				zIndex={2}
			/>
			<LayoutLevel
				backgroundColor="#87e8de"
				padding={0}
				gridArea="main-content"
			/>
			<Slider backgroundColor="#b7eB8f" />
		</div>
	),
};

export const SliderRight: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 400,
				display: "grid",
				gridTemplateAreas: `'header header' 'menu-left main-content'`,
				gridTemplateRows: "var(--layout-level-header--height) 1fr",
				gridTemplateColumns: "var(--layout-level-menu-left--width) 1fr",
			}}
		>
			<LayoutLevel
				backgroundColor="#ffd591"
				height="var(--layout-level-header--height)"
				padding="4px 16px"
				gridArea="header"
				zIndex={2}
			/>
			<LayoutLevel
				backgroundColor="#b7eB8f"
				width="var(--layout-level-menu-left--width)"
				paddingLeft={12}
				gridArea="menu-left"
				zIndex={2}
			/>
			<LayoutLevel
				backgroundColor="#87e8de"
				padding={0}
				gridArea="main-content"
			/>
			<Slider mode="right" backgroundColor="#b7eB8f" />
		</div>
	),
};
