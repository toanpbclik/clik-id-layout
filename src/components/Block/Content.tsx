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
	 * Flag to show scrollbar
	 */
	isScrollbarShown?: boolean;
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
 * Content with CSS Properties
 * @param backgroundColor - CSS Property: background-color
 * @param width - CSS Property: width - default: 100%
 * @param height - CSS Property: height - default: 34px
 * @param padding - CSS Property: padding - default: 8px 12px
 */
const Content = ({
	backgroundColor = "#fff",
	width = "100%",
	height = "100%",
	padding = "12px",
	isScrollbarShown = false,
	id = "",
	className = "",
	children,
	...props
}: Props) => {
	return (
		<div
			id={id}
			className={[
				"clik-id__content",
				isScrollbarShown ? "clik-id__content--scrollbar" : "",
				className,
			].join(" ")}
			style={{
				...props,
				backgroundColor,
				width,
				height,
				padding,
			}}
		>
			{children}
		</div>
	);
};

export default Content;
