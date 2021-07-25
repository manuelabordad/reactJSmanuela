import React from "react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
	const [productsCategory, setProductsCategory] = useState([]);

	const { categoriaID } = useParams();

	const getCategory = async () => {
		let data = fetch("..CategoryID.json");
		responseData = await llamada.json();
	};

	useEffect(() => {
		getCategory();
	}, [categoriaID]);

	return (
		<div>
			<h1>CATEGORIA {categoriaID}</h1>
			{productsCategory.map((element) => {
				return (
					<Link to={`/Detalle/${element.id}`}>
						<p> {element.title}</p>
					</Link>
				);
			})}
		</div>
	);
}
