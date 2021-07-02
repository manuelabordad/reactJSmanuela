import React from "react";
function NavBar(props) {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">
					Artemisa
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">
								Indice
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Plantas interior
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Plantas exterior
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Materas
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
