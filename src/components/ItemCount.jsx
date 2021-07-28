import React from "react";
import { useState } from "react";

function ItemCount({ stock, setReadyToBuy, onCountChange }) {
	const [count, setCount] = useState(0);
	const onAdd = () => {
		if (count < stock) {
			onCountChange(count + 1);
			setCount(count + 1);
			setReadyToBuy(false);
		} else {
			alert("No hay stok disponible");
		}
	};

	const onDecrease = () => {
		if (count > 0) {
			onCountChange(count - 1);
			setCount(count - 1);
			setReadyToBuy(false);
		}
	};

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
