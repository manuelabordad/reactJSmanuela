import React from "react";

function ItemCount({ stock, initial, onAdd, onDecrease, count }) {
	// const [product, setProduct] = useState(1);

	// const onDecrease = () => {
	// 	product > 0 ? setProduct(product - 1) : setProduct(product);
	// };
	// const onAdd = () => {
	// 	console.log("add");
	// 	product < stock
	// 		? setProduct(product + 1)
	// 		: alert("No hay stock disponible");
	// };

	return (
		<div>
			<button type="button" onClick={onDecrease}>
				-
			</button>
			<input type="number" disabled value={count} />
			<button type="button" onClick={onAdd}>
				+
			</button>
		</div>
	);
}

export default ItemCount;
