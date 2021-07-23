import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import localJson from "../../public/localJson.json";

function ItemList(props) {
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const task = new Promise((resolve, reject) => {
			const data = localJson;
			console.log(data);
			setTimeout(() => {
				resolve(data);
			}, 2000);
		});

		task.then(
			(resolve) => {
				setProductos(resolve);
			},
			(reject) => {
				console.log("error");
			}
		);
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
