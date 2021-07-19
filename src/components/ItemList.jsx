import React, { useState, useEffect } from "react";
import Item from "./Item";
import localJson from "../JSON/localJson.json";

function ItemList(props) {
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		const task = new promise((resolve, reject) => {
			const data = localJson;
			console.log(data);
			setTimeout(() => {
				resolve(data);
			}, 2000);
		});

		task.then((resolve) => {
			setProductos(resolve);
		});
		(rej) => {
			console.log("error");
		};
	}, []);

	return (
		<div>
			{productos.map((producto) => {
				<Item
					titulo={producto.nombre}
					imagen={producto.img}
					precio={producto.precio}
				/>;
			})}
		</div>
	);
}

export default ItemList;
