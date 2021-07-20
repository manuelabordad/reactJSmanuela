import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemListCont from "./components/ItemListCont";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/" exact component={ItemListCont} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
