import React from "react";
import { Link } from "react-router-dom";
import core from "../../core";
import "./index.scss";

const Navigation: React.FunctionComponent = () => {
  return (
    <div className="navigation">
      <Link to="/"><h1 className="logo">React Store</h1></Link>
      <ul className="nav-items">
        <li className="item">
          <Link to="/product/2b8c08ba-acfa-11eb-8529-0242ac130003">Product A</Link>
        </li>
        <li className="item">
          <Link to="/product/2b8c0b26-acfa-11eb-8529-0242ac130003">Product B</Link>
        </li>
        <li className="item">
          <Link to="/product/2b8c0c16-acfa-11eb-8529-0242ac130003">Product C</Link>
        </li>
      </ul>
      <button className="btn" onClick={() => core.controllers.cart.state.showCart.set(true)}>View Cart</button>
    </div>
  );
}

export default Navigation;
