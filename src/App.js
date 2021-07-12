import "./App.css";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/itemListConteiner";

function App() {
	return (
		<div>
			<NavBar />
			<ItemListConteiner titulo={"CATALOGO PLANTAS"} />
			<ItemCount stock={"50"} initial={"1"} />
		</div>
	);
}
export default App;
