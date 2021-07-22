import React from "react";
import { Link } from "react-router-dom";
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
								<Link to="/" className="nav-link active" aria-current="page">
									Indice
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/categoria"
									className="nav-link active"
									aria-current="page"
								>
									Plantas
								</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link active" aria-current="page">
									Carrito
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
export default NavBar;
