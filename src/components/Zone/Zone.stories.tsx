import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LayoutLevel from "../LayoutLevel/LayoutLevel";

const meta: Meta<typeof LayoutLevel> = {
	component: LayoutLevel,
	title: "Layouts/Zone",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Layout Screen with Header, Menu Left, and Main Content
 */
export const LayoutScreen: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 200,
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
			/>
			<LayoutLevel
				backgroundColor="#b7eB8f"
				width="var(--layout-level-menu-left--width)"
				paddingLeft={12}
				gridArea="menu-left"
			/>
			<LayoutLevel
				backgroundColor="#87e8de"
				padding={0}
				gridArea="main-content"
			/>
		</div>
	),
};

/**
 * Menu Left by using Layout Level UI Component
 */
export const MenuLeft: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 200,
				display: "grid",
				gridTemplateAreas: `'header header' 'menu-left main-content'`,
				gridTemplateRows: "var(--layout-level-header--height) 1fr",
				gridTemplateColumns: "var(--layout-level-menu-left--width) 1fr",
			}}
		>
			<LayoutLevel
				backgroundColor="#dfdfdf"
				height="var(--layout-level-header--height)"
				padding="4px 16px"
				gridArea="header"
			/>
			<LayoutLevel
				backgroundColor="#b7eB8f"
				width="var(--layout-level-menu-left--width)"
				paddingLeft={12}
				gridArea="menu-left"
			/>
			<LayoutLevel
				backgroundColor="#dfdfdf"
				padding={0}
				gridArea="main-content"
			/>
		</div>
	),
};

/**
 * Header by using Layout Level UI Component
 */
export const Header: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 200,
				display: "grid",
				gridTemplateAreas: `'header header' 'menu-left main-content'`,
				gridTemplateRows: "var(--layout-level-header--height) 1fr",
				gridTemplateColumns: "var(--layout-level-menu-left--width) 1fr",
			}}
		>
			<LayoutLevel
				backgroundColor="#b7eB8f"
				height="var(--layout-level-header--height)"
				padding="4px 16px"
				gridArea="header"
			/>
			<LayoutLevel
				backgroundColor="#dfdfdf"
				width="var(--layout-level-menu-left--width)"
				paddingLeft={12}
				gridArea="menu-left"
			/>
			<LayoutLevel
				backgroundColor="#dfdfdf"
				padding={0}
				gridArea="main-content"
			/>
		</div>
	),
};

/**
 * Main Content by using Layout Level UI Component
 */
export const MainContent: Story = {
	render: () => (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: 200,
				display: "grid",
				gridTemplateAreas: `'header header' 'menu-left main-content'`,
				gridTemplateRows: "var(--layout-level-header--height) 1fr",
				gridTemplateColumns: "var(--layout-level-menu-left--width) 1fr",
			}}
		>
			<LayoutLevel
				backgroundColor="#dfdfdf"
				height="var(--layout-level-header--height)"
				padding="4px 16px"
				gridArea="header"
			/>
			<LayoutLevel
				backgroundColor="#dfdfdf"
				width="var(--layout-level-menu-left--width)"
				paddingLeft={12}
				gridArea="menu-left"
			/>
			<LayoutLevel
				backgroundColor="#b7eB8f"
				padding={0}
				gridArea="main-content"
			/>
		</div>
	),
};
