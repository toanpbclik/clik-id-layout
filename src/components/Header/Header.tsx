import React from "react";

import "./style.css";

interface Props {
	title: string;
	iconName?: string;
	backgroundColor?: string;
	color?: string;
	/**
	 * Custom element id
	 */
	id?: string;
	/**
	 * Custom element class
	 */
	className?: string;
}

/**
 * Header component
 */
const Header = ({
	title,
	iconName = "id-layout-icon-ListPlus",
	backgroundColor = "#fff",
	color = "#222",
	id = "",
	className = "",
}: Props) => {
	if (!title) return null;
	return (
		<div
			id={id}
			className={["clik-id__header", className].join(" ")}
			style={{ backgroundColor, ["--clik-id-header--color" as string]: color }}
		>
			<i className={iconName} />
			<span>{title}</span>
		</div>
	);
};

export default Header;
