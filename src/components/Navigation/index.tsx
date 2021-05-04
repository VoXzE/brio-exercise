import React from "react";
import core from "../../core";
import "./index.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1 className="logo">React Store</h1>
      <ul className="nav-items">
        <li className="item">Product A</li>
        <li className="item">Product A</li>
        <li className="item">Product A</li>
      </ul>
      <button className="btn" onClick={() => core.controllers.cart.state.showCart.set(true)}>View Cart</button>
    </div>
  );
}

export default Navigation;
