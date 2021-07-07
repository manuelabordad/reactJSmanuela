import React from "react";
import CartWidget from "../components/CartWidget";
function NavBar(props) {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<CartWidget />
					<a className="navbar-brand" href="#">
						Artemisa
					</a>
					<button
						clas="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Indice
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Plantas interior
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Plantas exterior
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Materas
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
export default NavBar;
