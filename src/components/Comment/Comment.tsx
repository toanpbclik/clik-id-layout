import React from "react";
import Markdown from "react-markdown";

import { calculateTimeDifference } from "../../utils/format";

import "./style.css";

interface Props {
	userName: string;
	message?: string;
	timestamp?: number;
	/**
	 * Custom element id
	 */
	id?: string;
	/**
	 * Custom element class
	 */
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Comment component
 */
const Header = ({
	userName,
	message = "",
	timestamp,
	id = "",
	className = "",
	onClick,
}: Props) => {
	if (!userName) return null;
	return (
		<div
			id={id}
			className={["clik-id__comment", className].join(" ")}
			onClick={onClick}
		>
			<div className="comment__user">
				<div className="comment__avatar">
					{userName.slice(0, 1).toUpperCase()}
				</div>
				<div className="comment__title">
					<span className="title__name">{userName}</span>
					<span className="title__time">
						{calculateTimeDifference(timestamp)}
					</span>
				</div>
			</div>
			<Markdown className="comment__content">
				{message.replace(/\n/g, "\n\n")}
			</Markdown>
		</div>
	);
};

export default Header;
