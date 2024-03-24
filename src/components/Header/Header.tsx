import React from "react";

import "./style.css";

interface Props {
	title: string;
	iconName?: string;
	backgroundColor?: string;
	color?: string;
}

/**
 * Header component
 */
const Header = ({
	title,
	iconName = "id-layout-icon-ListPlus",
	backgroundColor = "#fff",
	color = "#222",
}: Props) => {
	if (!title) return null;
	return (
		<div
			className="clik-id__header"
			style={{ backgroundColor, ["--clik-id-header--color" as string]: color }}
		>
			<i className={iconName} />
			<span>{title}</span>
		</div>
	);
};

export default Header;
