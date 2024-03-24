import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LayoutLevel from "../LayoutLevel/LayoutLevel";
import Breadcrumb from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
	component: Breadcrumb,
	title: "Components/Breadcrumb tab",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Example with Layout Level and Breadcrumb UI Components
 */
export const Example: Story = {
	render: () => {
		return (
			<div
				style={{
					position: "relative",
					width: "100%",
					height: 200,
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
				/>
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
				>
					<Breadcrumb backgroundColor="#87e8de" />
				</LayoutLevel>
			</div>
		);
	},
};
