import React from "react";

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
 * Block with CSS Properties
 */
const Breadcrumb = ({
	backgroundColor = "#fff",
	width = "100%",
	height = "34px",
	padding = "8px 16px",
	border = "1px solid rgba(34, 34, 34, 0.1)",
	id = "",
	className = "",
	children,
	...props
}: Props) => {
	return (
		<div
			id={id}
			className={["clik-id__breadcrumb", className].join(" ")}
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

export default Breadcrumb;
