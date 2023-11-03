import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ to, text }) => {
	return (
		<Link to={to}>
			<button>{text}</button>
		</Link>
	);
};

export default ButtonLink;
