import React from "react";
import { useState } from "react";
import Plant from "../images/orquideaBaby.jpg";
import { Link } from "react-router-dom";

function Item({ title, price, id, image }) {
	const [number, setNumber] = useState(1);

	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<Link to={`/Item/${id}`}>
					<img className="card-img-top" src={Plant} alt="Card image cap" />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p>Precio {price}</p>
				</div>
			</div>
		</div>
	);
}

export default Item;
