import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/categories/:category" exact component={Categories} />
      </Router>
    </>
  );
}

export default App;
