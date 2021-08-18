import React, { useState } from "react";
import { useCartContext } from "../Context";
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";

function Cart() {
	const { cartItems, deleteItem, totalPrice } = useCartContext();
	const [form, setForm] = useState({ personName: "", phone: "", email: "" });
	const [confrimacion, setConfirmacion] = useState();

	const onChangeName = (e) => {
		setForm({
			personName: e.target.value,
		});
	};
	const onChangePhone = (e) => {
		setForm({
			phone: e.target.value,
		});
	};
	const onChangeEmail = (e) => {
		setForm({
			email: e.target.value,
		});
	};
	const confirmarCompra = () => {
		const firestore = getFirestore();
		const collection = firestore.collection("ordenes");
		const query = collection.add(form);
		query
			.then((resultado) => {
				setConfirmacion(resultado.id);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	console.log("state", form);
	const { personName } = form;
	const { phone } = form;
	const { email } = form;
	return (
		<div>
			<h1>carrito de compras </h1>
			{cartItems.length > 0 ? (
				cartItems.map((item, index) => (
					<p key={index}>
						{item.title} x {item.qty} <br />
						<button onClick={() => deleteItem(item)}>Eliminar</button>
					</p>
				))
			) : (
				<p>
					no hay items en el carrito
					<Link to="/">
						<button> volver a tienda</button>
					</Link>
				</p>
			)}

			<h2>Total: {totalPrice()}</h2>
			<form>
				<div class="mb-3">
					<label for="exampleInputEmail1" class="form-label">
						Name
					</label>
					<input
						onChange={onChangeName}
						value={personName}
						type="name"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">
						Phone
					</label>
					<input
						onChange={onChangePhone}
						value={phone}
						type="phone"
						class="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<div class="mb-3">
					<label for="exampleInputPassword1" class="form-label">
						Email
					</label>
					<input
						onChange={onChangeEmail}
						value={email}
						type="email"
						class="form-control"
						id="exampleInputPassword1"
					/>
				</div>

				<button type="submit" class="btn btn-primary" onClick={confirmarCompra}>
					confrimar compra
				</button>
			</form>
		</div>
	);
}

export default Cart;
