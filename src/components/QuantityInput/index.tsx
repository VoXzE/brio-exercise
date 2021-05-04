import React from "react";
import "./index.scss";

interface QuantityInputProps {
  increment: () => void;
  decrement: () => void;
  onChange: (val: number) => void;
  value: number;
}

const QuantityInput: React.FunctionComponent<QuantityInputProps> = ({ increment, decrement, onChange, value }: QuantityInputProps) => {
  return (
    <div className="qty-selector">
      <button className="qty-btn" onClick={decrement}>-</button>
      <input value={value} className="input" type="number" onChange={(e => onChange(parseInt(e.target.value)))} />
      <button className="qty-btn"  onClick={increment}>+</button>
    </div>
  );
}

export default QuantityInput;
