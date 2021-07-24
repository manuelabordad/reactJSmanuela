import React from "react";
import Plant from "../images/orquideaBaby.jpg";
import { useState } from "react";

function ItemDetail({ nombre, precio, descripcion, stock }) {
	const [number, setNumber] = useState(1);
	return (
		<div>
			<div class="container">
				<div class="row">
					<div class="col">
						<img width="500px" height="500px" src={Plant} />
					</div>
					<div class="col">
						<h1>{nombre}</h1> <br />
						<h2>Precio : {precio}</h2> <br />
						<p> {descripcion}</p> <br />
						<button
							type="button"
							onClick={() => (number > 0 ? setNumber(number - 1) : { number })}
						>
							-
						</button>
						<input type="number" disabled value={number} />
						<button
							type="button"
							onClick={() =>
								number < stock
									? setNumber(number + 1)
									: alert("No hay stock disponible")
							}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetail;
