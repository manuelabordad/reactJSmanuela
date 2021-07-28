import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListCont from "./components/ItemListCont";
import NavBar from "./components/NavBar";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/categoria/:id" exact component={ItemListCont} />
					<Route path="/Item/:id" exact component={ItemDetailConteiner} />
					<Route path="/cart" exact component={Cart} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
