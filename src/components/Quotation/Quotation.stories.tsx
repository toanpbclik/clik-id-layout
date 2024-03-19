import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LayoutLevel from "../LayoutLevel/LayoutLevel";
import Quotation from "./Quotation";
import Breadcrumb from "../Breadcrumb";

const meta: Meta<typeof Quotation> = {
	component: Quotation,
	title: "Components/Quotation",
	tags: ["autodocs"],
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Layout Screen with Layout Level, Breadcrumb and Quotation UI Components
 */
export const LayoutScreen: Story = {
	render: () => {
		return (
			<div
				style={{
					position: "relative",
					width: "100%",
					height: 700,
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
					display="flex"
					flexDirection="column"
					alignItems="center"
					gap={16}
				>
					<Breadcrumb backgroundColor="#dfdfdf" />
					<Quotation backgroundColor="#87e8de" />
				</LayoutLevel>
			</div>
		);
	},
};
