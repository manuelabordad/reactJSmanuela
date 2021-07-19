import "./App.css";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/itemListConteiner";

function App() {
	return (
		<div>
			<NavBar />
			<ItemListConteiner titulo={"CATALOGO PLANTAS"} />
		</div>
	);
}

export default App;
