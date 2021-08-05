import { sum } from "lodash";
import React, { useState, useContext } from "react";

export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
	const [cartCount, setCartCount] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (qty, item) => {
		console.log("item", item);
		if (
			cartItems &&
			cartItems.some((product) => product.nombre === item.nombre)
		) {
			const copy = [...cartItems];
			const repeteadIndex = cartItems.findIndex(
				(product) => product.nombre === item.nombre
			);
			copy[repeteadIndex] = {
				...copy[repeteadIndex],
				qty: copy[repeteadIndex].qty + qty,
			};
			setCartItems(copy);
		} else {
			setCartItems([...cartItems, { ...item, qty }]);
		}
		setCartCount((prev) => prev + qty);
	};

	const deleteItem = (item) => {
		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.nombre !== item.nombre
		);

		setCartCount(cartCount - item.qty);
		setCartItems(newCartItems);
	};
	const totalPrice = () => {
		console.log("total");
		const total = sum(cartItems.map((item) => item.precio * item.qty));
		console.log("total", total);
		return total;
	};

	return (
		<div>
			<CartContext.Provider
				value={{ cartCount, cartItems, addToCart, deleteItem, totalPrice }}
			>
				{children}
			</CartContext.Provider>
		</div>
	);
}

export default CartProvider;
