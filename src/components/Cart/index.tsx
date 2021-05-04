import { usePulse } from "pulse-framework";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import core from "../../core";
import CartItem from "../CartItem";
import SubtotalBox from "../Subtotal";
import "./index.scss";

const Cart: React.FunctionComponent = () => {
  const cartRef: any = useRef(null);
  const cartItems = usePulse(core.controllers.cart.state.cart);

  useEffect(() => {
    // Lets add event listener so if they click outside of cart
    // We can close it
    document.addEventListener("mousedown", (event: any) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        core.controllers.cart.state.showCart.set(false);
      }
    });
    return () => { document.removeEventListener("mousedown", () => {}) };
  }, [cartRef, cartItems]);

  return (
    <div className="cart-overlay">
      <div className="cart" ref={cartRef}>
        <h1 className="title">Cart</h1>

        <div className="cart-items">
          {cartItems && cartItems.map((item) => (
            <CartItem item={item} key={item.productId} />
          ))}
        </div>

        <SubtotalBox />
        <Link to="/checkout"><button className="blue-btn">Checkout</button></Link>
       
      </div>
    </div>
  );
}

export default Cart;
