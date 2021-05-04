import React, { useEffect, useState, useCallback } from "react";
import { usePulse } from "pulse-framework";
import core from "../../core";


const SubtotalBox: React.FunctionComponent = () => {
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
    calculateTotal();
  }, [calculateTotal])

  return (
    <h1 className="total">Subtotal: ${total}</h1>
  )
}

export default SubtotalBox