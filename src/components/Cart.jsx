import React from "react";
import { useCartContext } from "../Context";

function Cart() {
	const { cartItems } = useCartContext();
	console.log("cart", cartItems);
	return (
		<div>
			<h1>carrito de compras </h1>
			{cartItems.length > 0 &&
				cartItems.map((item, index) => (
					<p key={index}>
						{item.nombre} x {item.qty}
					</p>
				))}
		</div>
	);
}

export default Cart;
