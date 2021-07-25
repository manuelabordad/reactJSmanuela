import React from "react";
import icono from "../images/iconoFlor.png";
import { Link } from "react-router-dom";
function CartWidget(props) {
	return (
		<div>
			<Link to="/">
				<img src={icono} width="80px" height="80px" />
			</Link>
		</div>
	);
}
export default CartWidget;
