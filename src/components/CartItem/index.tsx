import React from "react";
import core from "../../core";
import { CartItem as CartItemObject } from "../../types";
import "./index.scss";

const CartItem = ({ item }: { item: CartItemObject }) => {
  return (
    <div className="item" key={item.productId}>
      <img className="thumbnail" src="https://i.imgur.com/MtjJNrk.jpg" alt="cart-img" />   
      <div className="info">
        <p className="name">{item.name}</p>
        <p className="quantity">({item.quantity}) x ${item.price}</p>
      </div>
      <button className="remove-btn">Remove</button>
    </div>
  );
}

export default CartItem;
