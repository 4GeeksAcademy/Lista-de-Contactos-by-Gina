import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {


	return (
	<div className="container">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"></span>
			</Link>
			<div className="ml-auto">
				<Link to="/registro">
					<button className="btn btn-success">Add a new conctact</button>
				</Link>
			</div>
		</nav>
		</div>
	);

	}