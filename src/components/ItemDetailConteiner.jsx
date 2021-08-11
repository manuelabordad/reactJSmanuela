import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

function ItemDetailConteiner() {
	const [producto, setProducto] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const firestore = getFirestore();
		const collection = firestore.collection("productos");
		const query = collection.get();
		query.then((resultado) => {
			const documentos = resultado.docs.map((doc) => {
				return {
					id: doc.id,
					...doc.data(),
				};
				doc.data();
			});
			setProducto(documentos);
			console.log("firebaseDetail", producto);
		});
	}, []);

	return (
		<div>
			<ItemDetail
				title={producto.title}
				image={producto.image}
				price={producto.price}
				descripcion={producto.descripcion}
				itemId={producto.id}
				stock={producto.stock}
				initial={1}
			/>
		</div>
	);
}

export default ItemDetailConteiner;
