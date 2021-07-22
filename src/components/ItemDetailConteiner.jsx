import { useEffect, useState } from "react";
import React from "react";

function ItemDetailConteiner() {
	const [products, setProducts] = useState([]);

	const getItems = async () => {
		const data = await fetch("../../public/localJson.json");
		const responseData = await data.json();
		console.log("response data ", responseData);
	};

	useEffect(() => {
		setTimeout(() => getItems(), 2000);
	}, []);
	return <div></div>;
}

export default ItemDetailConteiner;
