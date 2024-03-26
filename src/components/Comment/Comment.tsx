import React from "react";
import Markdown from "react-markdown";

import { calculateTimeDifference } from "../../utils/format";

import "./style.css";

interface Props {
	/**
	 * User name
	 */
	userName: string;
	/**
	 * Comment message
	 */
	message?: string;
	/**
	 * Timestamp
	 */
	timestamp?: number;
	/**
	 * Custom element id
	 */
	id?: string;
	/**
	 * Custom element class
	 */
	className?: string;
	/**
	 * Click event
	 */
	onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
	/**
	 * Header actions Component
	 */
	headerActions?: React.ReactNode;
	/**
	 * Children Component
	 */
	children?: React.ReactNode;
}

/**
 * Comment component
 */
const Comment = ({
	userName,
	message = "",
	timestamp,
	id = "",
	className = "",
	onClick,
	headerActions = null,
	children = null,
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
				{headerActions}
			</div>
			<Markdown className="comment__content">
				{message.replace(/\n/g, "\n\n")}
			</Markdown>
			{children}
		</div>
	);
};

export default Comment;
