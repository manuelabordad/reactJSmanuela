import React from "react";
import { useEffect, useState } from "react";
import orquidea from "../images/orquidea.jpg";

function ItemCount({ stock, initial, onAdd }) {
	const [number, setNumber] = useState(1);

	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src={orquidea} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">ORQUIDEA</h5>
					<button
						type="button"
						onClick={() => {
							setNumber(number - 1);
						}}
					>
						-
					</button>
					<input type="number" disabled value={number} />
					<button
						type="button"
						onClick={() => {
							setNumber(number + 1);
						}}
					>
						+
					</button>

					<a href="#" className="btn btn-primary">
						Agregar al carrito
					</a>
				</div>
			</div>
			{number < stock ? (
				<button
					type="button"
					onClick={() => {
						setNumber(number + 1);
					}}
				>
					+
				</button>
			) : (
				alert("No hay stock disponible")
			)}
		</div>
	);
}
export default ItemCount;
