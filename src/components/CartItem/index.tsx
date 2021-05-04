import React from "react";
import core from "../../core";
import { CartItem as CartItemObject } from "../../types";
import "./index.scss";

interface CarItemProps {
  item: CartItemObject
}

const CartItem: React.FunctionComponent<CarItemProps> = ({ item }: CarItemProps) => {
  return (
    <div className="item">
      <img className="thumbnail" src={item.image} alt="cart-img" />   
      <div className="info">
        <p className="name">{item.name}</p>
        <p className="quantity">({item.quantity}) x ${item.price}</p>
      </div>
      <button className="remove-btn" onClick={() => core.controllers.cart.actions.removeCartItem(item.productId)}>Remove</button>
    </div>
  );
}

export default CartItem;
