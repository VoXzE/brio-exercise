import { usePulse } from "pulse-framework";
import React from "react";
import CartItem from "../../components/CartItem";
import SubtotalBox from "../../components/Subtotal";
import core from "../../core";
import "./index.scss";

const CheckoutPage: React.FunctionComponent = () => {
  const cartItems = usePulse(core.controllers.cart.state.cart);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="items">
        {cartItems && cartItems.map((item) => (
          <CartItem item={item} key={item.productId} />
        ))}
      </div>

      <SubtotalBox />
      <button className="purchase-btn">Purchase</button>
    </div>
  );
}

export default CheckoutPage;
