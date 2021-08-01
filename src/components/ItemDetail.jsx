import React from "react";
import Plant from "../images/orquideaBaby.jpg";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context";

function ItemDetail({ nombre, precio, descripcion, stock }) {
	const [readyToBuy, setReadyToBuy] = useState(false);
	const [addCartButtonState, setAddCartButtonState] = useState(false);
	const [cartCount, setCartCount] = useState(0);

	const onCountChange = (count) => {
		setAddCartButtonState(count > 0);
		setCartCount(count);
	};

	const { addToCart } = useCartContext();

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
							stock={20}
							setReadyToBuy={setReadyToBuy}
							onCountChange={onCountChange}
						/>
						<button
							disabled={!addCartButtonState}
							onClick={() => {
								setReadyToBuy(true);
								addToCart(cartCount, { nombre: nombre });
							}}
						>
							Agregar al carrito
						</button>
						<Link to="/cart">
							<button disabled={!readyToBuy}>Termina tu compra</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ItemDetail;
