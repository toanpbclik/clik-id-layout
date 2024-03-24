import React from "react";
import { Image, ImageProps } from "antd";

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
}

/**
 * Image component
 */
const ImageComponent = ({
	src,
	aspectRatio = "1:1",
	width = "100%",
	...props
}: Props) => {
	if (!src) return null;
	return (
		<div
			className="clik-id__image"
			style={{
				width,
				aspectRatio: aspectRatio === "1:1" ? "1 / 1" : "16 / 9",
			}}
		>
			<Image {...props} src={src} />
		</div>
	);
};

export default ImageComponent;
