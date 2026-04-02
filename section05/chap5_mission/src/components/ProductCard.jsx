import "./ProductCard.css";

const ProductCard = ({ title, price, isNew }) => {
  const onClickButton = (event) => {
    if (price >= 100000) {
      console.log("상품명: ", { title }, "상품가격:", { price });
      console.log("이 제품은 고가 제품입니다", event);
    } else {
      console.log("상품명: ", { title }, "상품가격:", { price });
      console.log("이 제품은 저가 제품입니다", event);
    }
  };

  /*
  const isExpensive = price >= 100000;
  console.log(`상품명:${title}, 가격 : ${price.toLocaleString()원`)
  */
  return (
    <div>
      <p>
        {title} - {price.toLocaleString()}원
      </p>
      {isNew && <span>NEW!!!!</span>}
      <button onClick={onClickButton}>콘솔에 정보 출력</button>
    </div>
  );
};

export default ProductCard;
