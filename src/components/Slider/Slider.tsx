import React from "react";

import "./style.css";

interface Props extends React.CSSProperties {
	/**
	 * Slider Mode
	 */
	mode?: "left" | "right";

	/**
	 * CSS Property: background-color
	 */
	backgroundColor?: string;
	/**
	 * CSS Property: width
	 */
	width?: string | number;
	/**
	 * CSS Property: padding
	 */
	padding?: string | number;
	/**
	 * CSS Property: border
	 */
	border?: string;
	/**
	 * Children Component
	 */
	children?: React.ReactNode;
	/**
	 * Flag to show/hide the slider
	 */
	isShown?: boolean;
}

/**
 * Slider with CSS Properties
 */
const Slider = ({
	mode = "left",
	backgroundColor = "#fff",
	padding = "8px 12px 12px",
	border = "1px solid rgba(34, 34, 34, 0.1)",
	width = "",
	isShown = false,
	children,
	...props
}: Props) => {
	return (
		<div
			className={[
				"clik-id__slider",
				`clik-id__slider--${mode}`,
				isShown ? "clik-id__slider--shown" : "",
			].join(" ")}
			style={{
				...props,
				backgroundColor,
				border,
				padding,
				width,
			}}
		>
			{children}
		</div>
	);
};

export default Slider;
