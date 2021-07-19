import React from "react";
import { useEffect, useState } from "react";

function Item(producto, stock, initial, onAdd) {
	const [number, setNumber] = useState(1);
	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src={producto.img} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">{producto.nombre}</h5>
					<p>Precio {producto.precio}</p>
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

					<a href="#" className="btn btn-primary">
						Agregar al carrito
					</a>
				</div>
			</div>
		</div>
	);
}

export default Item;
