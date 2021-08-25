import React, { useState } from "react";
import { useCartContext } from "../Context";
import { Link } from "react-router-dom";
import { getFirestore } from "../firebase";
import firebase from "firebase/app";
import "firebase/firestore";

function Cart() {
	const {
		cartItems,
		deleteItem,
		totalPrice,
		addPurchase,
		deleteAllItems,
		purchasesIds,
	} = useCartContext();
	const actualDate = firebase.firestore.Timestamp.fromDate(new Date());
	const [form, setForm] = useState({
		items: cartItems,
		total: totalPrice(),
		personName: "",
		phone: "",
		email: "",
		date: actualDate,
	});

	//const [confirmed, setConfirmed] = useState(false);

	const onChangeName = (e) => {
		setForm({ ...form, personName: e.target.value });
	};
	const onChangePhone = (e) => {
		setForm({ ...form, phone: e.target.value });
	};
	const onChangeEmail = (e) => {
		setForm({ ...form, email: e.target.value });
	};

	console.log("form", form);
	const confirmarCompra = (e) => {
		e.preventDefault();
		console.log("confirm onclick");
		const firestore = getFirestore();
		const collection = firestore.collection("ordenes");

		const query = collection.add(form);
		query
			.then(({ id }) => {
				alert("tu compra ha sido satisfactoria");
				//setConfirmed(true);
				console.log("id", id);
				addPurchase(id);
				deleteAllItems();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const { personName } = form;
	const { phone } = form;
	const { email } = form;

	console.log("purchasesIds", purchasesIds);

	return (
		<div>
			{purchasesIds.length > 0 && (
				<div>
					<h1>compras satisfactorias </h1>
					{purchasesIds.map((item, index) => (
						<p key={index}>
							Codigo de compra N°
							{`${index + 1} ${item}`}
							<br />
						</p>
					))}
				</div>
			)}

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
			{cartItems.length > 0 && (
				<form>
					<div className="mb-3">
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
					<div className="mb-3">
						<label for="exampleInputPassword1" class="form-label">
							Phone
						</label>
						<input
							onChange={onChangePhone}
							value={phone}
							class="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<div className="mb-3">
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

					<button
						type="submit"
						className="btn btn-primary"
						onClick={confirmarCompra}
					>
						confrimar compra
					</button>
				</form>
			)}
		</div>
	);
}

export default Cart;
