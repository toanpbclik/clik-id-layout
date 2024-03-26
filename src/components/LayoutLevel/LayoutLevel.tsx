import React from "react";

import "./style.css";

interface Props extends React.CSSProperties {
	/**
	 * CSS Property: background-color
	 */
	backgroundColor?: string;
	/**
	 * CSS Property: width
	 */
	width?: string | number;
	/**
	 * CSS Property: height
	 */
	height?: string | number;
	/**
	 * CSS Property: padding
	 */
	padding?: string | number;
	/**
	 * CSS Property: border
	 */
	border?: string;
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
 * Layout Level with CSS Properties
 */
const LayoutLevel = ({
	backgroundColor = "#fff",
	width = "100%",
	height = "100%",
	padding = 16,
	border = "1px solid rgba(34, 34, 34, 0.1)",
	id = "",
	className = "",
	children,
	...props
}: Props) => {
	return (
		<div
			id={id}
			className={["clik-id__layout-level", className].join(" ")}
			style={{
				...props,
				backgroundColor,
				width,
				height,
				padding,
				border,
			}}
		>
			{children}
		</div>
	);
};

export default LayoutLevel;
