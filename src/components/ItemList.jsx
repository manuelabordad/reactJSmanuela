import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import { getFirestore } from "../firebase";
import "../../src/itemListCont.css";

function ItemList({ categoryId }) {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const firestore = getFirestore();
		const collection = firestore.collection("productos");
		const productosFiltrados = categoryId
			? collection.where("categoryId", "==", parseInt(categoryId))
			: collection;
		productosFiltrados.get().then((resultado) => {
			const documentos = resultado.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
				doc.data();
			});
			setProductos(documentos);
		});
	}, [categoryId]);

	return (
		<div className="display">
			{productos.map((producto) => (
				<Item
					title={producto.title}
					price={producto.price}
					descripcion={producto.descripcion}
					stock={producto.stock}
					image={producto.image}
					id={producto.id}
					initial={1}
				/>
			))}
		</div>
	);
}

export default ItemList;
