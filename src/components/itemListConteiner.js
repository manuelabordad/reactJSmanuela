import React from "react";
import ItemList from "../components/itemList";
function ItemListContainer(props) {
	return (
		<div>
			<h1>{props.titulo}</h1>
			<ItemList />
		</div>
	);
}
export default ItemListContainer;
