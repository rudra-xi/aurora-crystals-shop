import React from "react";
import "../Style/Navbar.css";

function Navbar() {
	return (
		// ? ===== NAVBAR COMPONENT FROM BOOTSTRAP =====
		<nav className="navbar navbar-expand-lg ">
			<div className="container-fluid">
				<div className="navbar-brand" id="logo" href="/" >
					Aurora Crystals Shop
				</div>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav ms-auto" id="marginRight">
						<a
							className="nav-link"
							aria-current="page"
							href="/"
						>
							Home
						</a>
						<a className="nav-link" href="/">
							Shop
						</a>
						<a className="nav-link" href="/">
							About
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
