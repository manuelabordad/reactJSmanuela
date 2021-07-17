import React from "react";
import localJson from "../JSON/localJson.json";
import { useState, useEffect } from "react";
import FunctionalComponent from "../components/itemList";

const getProducts = async () => {
	let ServerOnline = true;
	let productos = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (ServerOnline) {
				resolve(localJson);
			} else {
				reject(new Error("Servidor sin conexion"));
			}
		}, 2000);
	});
	let data = await productos;
	setProducts(data);
};

function ItemList({ items }) {
	products.map((element) => {
		const [products, setProducts] = useState([]);
		return (
			<FunctionalComponent
				id={element.id}
				nombre={element.nombre}
				precio={element.precio}
				imagen={element.img}
			/>
		);
	});
}
export default ItemList;
