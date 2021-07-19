import "./App.css";
import NavBar from "./components/NavBar";
import ItemListCont from "./components/ItemListCont";

function App() {
	return (
		<div>
			<NavBar />
			<ItemListCont titulo={"CATALOGO PLANTAS"} />
		</div>
	);
}

export default App;
