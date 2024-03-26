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
	 * Flag to show/hide the slider
	 */
	isShown?: boolean;
	/**
	 * Custom element id
	 */
	id?: string;
	/**
	 * Custom element class
	 */
	className?: string;
	/**
	 * Children Component
	 */
	children?: React.ReactNode;
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
	id = "",
	className = "",
	children,
	...props
}: Props) => {
	return (
		<div
			id={id}
			className={[
				"clik-id__slider",
				`clik-id__slider--${mode}`,
				isShown ? "clik-id__slider--shown" : "",
				className,
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
