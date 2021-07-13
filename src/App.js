import "./App.css";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/itemListConteiner";
import ItemCount from "./components/ItemCount";

function App() {
	return (
		<div>
			<NavBar />
			<ItemListConteiner titulo={"CATALOGO PLANTAS"} />
			<ItemCount stock={"20"} initial={"1"} />
		</div>
	);
}
export default App;
