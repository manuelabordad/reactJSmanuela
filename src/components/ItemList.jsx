import React, { useState, useEffect } from "react";
import Item from "../components/Item";

function ItemList({ categoryId }) {
	const [productos, setProductos] = useState([]);

	const getProductsByCategoryId = async () => {
		const dataTest = await fetch(`../product/byCategory/${categoryId}.json`);
		const responseData = await dataTest.json();

		setProductos(responseData);
	};
	useEffect(() => {
		setTimeout(() => getProductsByCategoryId(), 2000);
	}, [categoryId]);

	return (
		<div>
			{productos.map((producto) => (
				<Item
					nombre={producto.nombre}
					precio={producto.precio}
					itemId={producto.id}
					descripcion={producto.descripcion}
					stock={20}
					initial={1}
				/>
			))}
		</div>
	);
}

export default ItemList;
