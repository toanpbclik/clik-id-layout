import React from "react";
import { Empty, Image, ImageProps } from "antd";

import "./style.css";

interface Props extends ImageProps {
	/**
	 * Image aspect ratio
	 */
	aspectRatio?: "1:1" | "16:9";
	/**
	 * CSS Property: width
	 */
	width?: string | number;
	/**
	 * CSS Property: height
	 */
	height?: string | number;
	/**
	 * Custom element id
	 */
	id?: string;
	/**
	 * Custom element class
	 */
	className?: string;
	/**
	 * Show empty image
	 */
	isEmpty?: boolean;
	/**
	 * Empty message
	 */
	emptyMessage?: string;
}

/**
 * Image component
 */
const ImageComponent = ({
	src,
	aspectRatio = "1:1",
	width = "100%",
	height = "auto",
	id = "",
	className = "",
	isEmpty = false,
	emptyMessage = "No Image",
	...props
}: Props) => (
	<div
		id={id}
		className={["clik-id__image", className].join(" ")}
		style={{
			width,
			height,
			aspectRatio:
				height === "auto" ? (aspectRatio === "1:1" ? "1 / 1" : "16 / 9") : "",
			cursor:
				props.onClick || props.onContextMenu || props.preview ? "pointer" : "",
		}}
	>
		{!isEmpty ? (
			<Image {...props} src={src} />
		) : (
			<Empty description={emptyMessage} image={Empty.PRESENTED_IMAGE_DEFAULT} />
		)}
	</div>
);

export default ImageComponent;
