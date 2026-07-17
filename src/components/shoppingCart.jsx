import React, { useState } from "react";

const ShoppingCart = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addCart = () => {
    alert(`${count}個カートに入れました`);
  };

  return (
    <div>
      <h1>ショッピングカート</h1>

      <p>現在の選択個数: {count}</p>

      <button onClick={minus}>-1</button>
      <button onClick={plus}>+1</button>

      <br />

      <button onClick={addCart}>カートに入れる</button>
    </div>
  );
};

export default ShoppingCart;