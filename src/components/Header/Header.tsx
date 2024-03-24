import React from "react";

import "./style.css";

interface Props {
	title: string;
	backgroundColor?: string;
	color?: string;
}

/**
 * Block with CSS Properties
 */
const Header = ({ title, backgroundColor = "#fff", color = "#222" }: Props) => {
	if (!title) return null;
	return (
		<div className="clik-id__header" style={{ backgroundColor, color }}>
			<span>{title}</span>
		</div>
	);
};

export default Header;
