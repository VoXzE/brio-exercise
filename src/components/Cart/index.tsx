import React, { useRef, useEffect } from "react";
import core from "../../core";
import "./index.scss";

const Cart = () => {
  const cartRef: any = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event: any) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        core.controllers.cart.state.showCart.set(false);
      }
    });
    return () => { document.removeEventListener("mousedown", () => {}) };
  }, [cartRef]);

  return (
    <div className="cart-overlay">

      <div className="cart" ref={cartRef}>
        <h1>Cart</h1>
      </div>
    </div>
  );
}

export default Cart;
