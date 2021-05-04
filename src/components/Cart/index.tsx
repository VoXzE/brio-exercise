import { usePulse } from "pulse-framework";
import React, { useRef, useEffect, useState, useCallback } from "react";
import core from "../../core";
import CartItem from "../CartItem";
import "./index.scss";

const Cart: React.FunctionComponent = () => {
  const cartRef: any = useRef(null);
  const [total, setTotal] = useState(0);
  const cartItems = usePulse(core.controllers.cart.state.cart);

  const calculateTotal = useCallback(() => {
    let sum = 0;
    for (const item of cartItems) {
      sum += item.price * item.quantity;      
    }
    setTotal(parseFloat(sum.toFixed(2)));
  }, [cartItems]);

  useEffect(() => {
    // Lets calulate total price
    calculateTotal();
    
    // Lets add event listener so if they click outside of cart
    // We can close it
    document.addEventListener("mousedown", (event: any) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        core.controllers.cart.state.showCart.set(false);
      }
    });
    return () => { document.removeEventListener("mousedown", () => {}) };
  }, [cartRef, cartItems, calculateTotal]);

  return (
    <div className="cart-overlay">
      <div className="cart" ref={cartRef}>
        <h1 className="title">Cart</h1>

        <div className="cart-items">
          {cartItems && cartItems.map((item) => (
            <CartItem item={item} key={item.productId} />
          ))}
        </div>

        <h1 className="total">Subtotal: ${total}</h1>
        <button className="blue-btn">Checkout</button>
       
      </div>
    </div>
  );
}

export default Cart;
