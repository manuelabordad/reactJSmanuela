import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListCont from "./components/ItemListCont";
import NavBar from "./components/NavBar";
import ItemDetailConteiner from "./components/ItemDetailConteiner";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/" exact component={ItemListCont} />
					<Route path="/categoria" exact component={ItemListCont} />
					<Route path="/Item" exact component={ItemDetailConteiner} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
