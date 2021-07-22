import React from "react";
import ItemList from "../components/ItemList";
import { useparams } from "react-router-dom";

function ItemListCont(props) {
	return (
		<div>
			<h1>{props.titulo}</h1>
			<ItemList />
		</div>
	);
}
export default ItemListCont;
