import logo from "./logo.svg";
import data from "./data";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Itemslink from "./pages/Itemslink";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Store" component={Store} />
          <Route path="/item/:id" component={Itemslink} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
