import React from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

function ItemListCont(props) {
	const { id } = useParams();

	return (
		<div>
			<h1>{props.titulo}</h1>
			<ItemList categoryId={id} />
		</div>
	);
}
export default ItemListCont;
