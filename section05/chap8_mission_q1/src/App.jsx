import { useState } from "react";
import "./App.css";
import Cart from "./components/cart";

function App() {
  // 상품 정보를 반환 받는 리스트 ( 배열 )
  const products = [
    { name: " 운동화", price: 50000 },
    { name: "가방", price: 80000 },
    { name: "모자", price: 20000 },
  ];
  // totalprice는 장바구니에 담은 전체 상품의 합계와 전체 상품의 가격이기 때문에 ,
  // 모든 상품(Cart)의 버튼 클릭에 영향을 받음.
  // 문제 : React 에서는 "상태를 소유한 컴포넌트만" 그 상태의 값 변경이 가능하다.
  // 해결법 : Cart에서 장바구니 담기 버튼 클릭시 장바구니에 담긴 상품의 가격을 부모 컴포넌트 (App) 에 전달
  // 그리고 Total상태 변경은 App처리해야 한다.
  const [totalprice, setTotalPrice] = useState(0);

  // 누적 합계를 구하는 함수를 생성함.
  const addTotal = (price) => {
    setTotalPrice((prev) => prev + price);
  }; // 어찌 보면 이건 이벤트 처리기 , 그래서 onAddTotal 이런 식으로 주어야 합니다.
  return (
    <>
      <h1>상품카드</h1>
      {products.map((product) => (
        <Cart title={product.name} price={product.price} onAdd={addTotal} /> // addTotal 도 Cart에 같이 추가를 해주어야 한다.
      ))}
      <hr />
      <div> 결제금액 : {totalprice.toLocaleString()}원</div>
    </>
  );
}

export default App;
