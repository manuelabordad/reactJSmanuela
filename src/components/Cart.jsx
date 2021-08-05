import React from "react";
import { useCartContext } from "../Context";
import { Link } from "react-router-dom";

function Cart() {
	const { cartItems, deleteItem, totalPrice } = useCartContext();

	return (
		<div>
			<h1>carrito de compras </h1>
			{cartItems.length > 0 ? (
				cartItems.map((item, index) => (
					<p key={index}>
						{item.nombre} x {item.qty} <br />
						<button onClick={() => deleteItem(item)}>Eliminar</button>
					</p>
				))
			) : (
				<p>
					no hay items en el carrito
					<Link to="/">
						<button> volver a tienda</button>
					</Link>
				</p>
			)}
			<h2>Total: {totalPrice()}</h2>
		</div>
	);
}

export default Cart;
