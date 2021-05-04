import React, { useState } from "react";
import QuantityInput from "../../components/QuantityInput";
import "./index.scss";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQty = () => setQuantity(quantity + 1);
  const decrementQty = () => setQuantity(quantity - 1);

  return (
    <div className="product-page">
      <h1 className="product-name">Product A</h1>

      <div className="main-info">
        <img src="https://i.imgur.com/r5Y0xpy.jpg" alt="product-img" className="thumbnail" />
        <p className="description">1233123123123123123123131313</p>
      </div>

      <h1 className="price">$12.99</h1>

      <div className="qty-info">
        <p>Quantity</p>
        <QuantityInput value={quantity} increment={incrementQty} decrement={decrementQty} onChange={setQuantity} />
      </div>
      
    </div>
  );
}

export default ProductPage;
