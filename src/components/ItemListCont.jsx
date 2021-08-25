import React from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";

function ItemListCont() {
	const { id } = useParams();

	return (
		<div>
			<ItemList categoryId={id} />
		</div>
	);
}
export default ItemListCont;
