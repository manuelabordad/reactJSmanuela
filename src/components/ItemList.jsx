import React, { useState, useEffect } from "react";
import Item from "../components/Item";

function ItemList(props) {
	const [productos, setProductos] = useState([]);
	const getProducts = async () => {
		const dataTest = await fetch("../localJson.json");
		const responseData = await dataTest.json();
		console.log("dataJson", responseData);
		setProductos(responseData);
	};
	useEffect(() => {
		setTimeout(() => getProducts(), 2000);
	}, []);

	return (
		<div>
			{productos.map((producto) => (
				<Item
					nombre={producto.nombre}
					img={producto.img}
					precio={producto.precio}
					stock={20}
					initial={1}
				/>
			))}
		</div>
	);
}

export default ItemList;
