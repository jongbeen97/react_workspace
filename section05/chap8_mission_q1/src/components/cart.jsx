import { useState } from "react";

const Cart = ({ title, price, onAdd }) => {
  const [count, setCount] = useState(0);

  const onClickButton = () => {
    setCount(count + 1);

    onAdd(price); // 내 가격을 onAdd로 넘겨준다. App ( 부모) 컴포넌트의 가격을 전달
  };

  return (
    <div style={{ border: "1px solid black", padding: "15px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>가격 : {price.toLocaleString()}원</p>
      <button onClick={onClickButton}>장바구니 담기</button>
      <p>
        현재 수량 : <strong>{count}</strong>
      </p>
    </div>
  );
};

export default Cart;
