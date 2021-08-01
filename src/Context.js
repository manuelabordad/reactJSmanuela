import React, { useState, useContext } from "react";

export const CartContext = React.createContext();
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
	const [cartCount, setCartCount] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (qty, item) => {
		console.log("qty", qty);
		console.log("item", item);

		if (cartItems.some((product) => product.nombre === item.nombre)) {
			console.log("entro if");
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
			console.log("entro else");
			setCartItems([...cartItems, { ...item, qty }]);
		}
		setCartCount((prev) => prev + qty);
	};

	console.log("cartItemsContext", cartItems);

	return (
		<div>
			<CartContext.Provider value={{ cartCount, cartItems, addToCart }}>
				{children}
			</CartContext.Provider>
		</div>
	);
}

export default CartProvider;
