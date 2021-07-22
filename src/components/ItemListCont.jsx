import React from "react";
import ItemList from "../components/ItemList";
import { useparams } from "react-router-dom";
import ItemDetailConteiner from "./ItemDetailConteiner";

function ItemListCont(props) {
	return (
		<div>
			<h1>{props.titulo}</h1>
			<ItemList />
			<ItemDetailConteiner />
		</div>
	);
}
export default ItemListCont;
