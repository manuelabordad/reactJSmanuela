import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailConteiner() {
	const [producto, setProducto] = useState([]);

	const getItems = async () => {
		const data = await fetch("../localJson.json");
		const responseData = await data.json();
		console.log("dataJSON", responseData);
		setProducto(responseData);
	};

	useEffect(() => {
		setTimeout(() => getItems(), 2000);
	}, []);

	return (
		<div>
			<ItemDetail
				nombre={producto.nombre}
				img={producto.img}
				precio={producto.precio}
				despcripcion={producto.descripcion}
				stock={20}
				initial={1}
			/>
		</div>
	);
}

export default ItemDetailConteiner;
