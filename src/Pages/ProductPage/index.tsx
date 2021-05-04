import React, { useEffect, useState } from "react";
import QuantityInput from "../../components/QuantityInput";
import data from "../../data/products.json";
import { ProductInfo } from "../../types";
import { useParams } from "react-router-dom";
import "./index.scss";

const ProductPage = () => {
  const { productId }: any = useParams();
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [quantity, setQuantity] = useState(0);

  const incrementQty = () => setQuantity(quantity + 1);
  const decrementQty = () => setQuantity(quantity - 1);

  useEffect(() =>  {
    for (const prod of data.products) {
      if (prod.id === productId) {
        setProduct(prod);
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="product-page">

      {!product &&
        <div className="not-found">
          No such product found
        </div>
      }
      
      {product &&
        <React.Fragment>
          <h1 className="product-name">Product A</h1>

          <div className="main-info">
            <img src={product.image} alt="product-img" className="thumbnail" />
            <p className="description">{product.description}</p>
          </div>

          <h1 className="price">${product.price}</h1>

          <div className="qty-info">
            <p>Quantity</p>
            <QuantityInput value={quantity} increment={incrementQty} decrement={decrementQty} onChange={setQuantity} />
            <button className="blue-btn">Add to Cart</button>
          </div>
        </React.Fragment>
      }
      
    </div>
  );
}

export default ProductPage;
