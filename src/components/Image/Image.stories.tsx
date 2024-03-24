import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Image from "./Image";
import ContentComponent from "../Block/Content";
import BlockComponent from "../Block/Block";
import Slider from "../Slider";

const meta: Meta<typeof Image> = {
	component: Image,
	title: "Components/Image",
	tags: ["autodocs"],
	argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Example with Layout Level and Image UI Components
 */
export const ExampleSlider: Story = {
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
				<ContentComponent backgroundColor="#dfdfdf" padding="12px 0 0">
					{[
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
						"https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
					].map((url, idx) => (
						<Image key={idx} src={url} width="fit-content" />
					))}
				</ContentComponent>
			</Slider>
		</div>
	),
};

/**
 * Example with size 80x80
 */
export const Small: Story = {
	args: {
		src: "https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
		width: 80,
	},
};

/**
 * Example with size 98x98
 */
export const Medium: Story = {
	args: {
		src: "https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
		width: 98,
	},
};

/**
 * Example with aspect ratio 16:9
 */
export const Large: Story = {
	args: {
		src: "https://549c054214354722bc6ad210d5a4afdd.cdn.bubble.io/f1706076930003x542223222487362600/Rectangle%206.png",
		aspectRatio: "16:9",
		width: 248,
	},
};
