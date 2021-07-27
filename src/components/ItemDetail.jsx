import React from "react";
import Plant from "../images/orquideaBaby.jpg";
import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ nombre, precio, descripcion, stock }) {
	const [count, setCount] = useState(0);
	const [readyToBuy, setReadyToBuy] = useState(false);

	const onAdd = () => {
		if (count < stock) {
			setCount(count + 1);
			setReadyToBuy(false);
		} else {
			alert("No hay stok disponible");
		}
	};

	const onDecrease = () => {
		if (count > 0) {
			setCount(count - 1);
			setReadyToBuy(false);
		}
	};

	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col">
						<img width="500px" height="500px" src={Plant} />
					</div>
					<div className="col">
						<h1>{nombre}</h1> <br />
						<h2>Precio : {precio}</h2> <br />
						<p> {descripcion}</p> <br />
						<ItemCount
							initial={1}
							onAdd={onAdd}
							onDecrease={onDecrease}
							count={count}
						/>
						<button disabled={count < 1} onClick={() => setReadyToBuy(true)}>
							Agregar al carrito
						</button>
						<button disabled={!readyToBuy}>Termina tu compra</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetail;
