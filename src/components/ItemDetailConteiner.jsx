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
		firestore
			.collection("productos")
			.doc(id)
			.get()
			.then((resultado) => {
				setProducto(resultado.data());
			});
	}, [id]);

	return (
		producto && (
			<div>
				<ItemDetail
					title={producto.title}
					image={producto.image}
					price={producto.price}
					descripcion={producto.descripcion}
					itemId={producto.idProducto}
					stock={producto.stock}
					initial={1}
				/>
			</div>
		)
	);
}

export default ItemDetailConteiner;
