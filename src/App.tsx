import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

// 
import "./assets/css/main.scss";
import Navigation from "./components/Navigation";
import Cart from "./components/Cart";
import { usePulse } from "pulse-framework";
import core from "./core";

const App = () => {
  const showCart = usePulse(core.controllers.cart.state.showCart);

  return (
    <div className="App">
      <Router>
        <Navigation />
        {showCart && <Cart />}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:productId" component={ProductPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
