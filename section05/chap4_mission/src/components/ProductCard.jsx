import "./ProductCard.css";

const ProductCard = ({ title, price, isNew }) => {
  return (
    <div>
      <h3>{title}</h3>
      {/* price.toLocaleString() : 사람이 읽기 쉽게 value 값을 바꿔주는 함수  
      예 : 숫자 , 날짜 , 통화(화폐.,$ 유로 등등 )*/}
      <p>가격 : {price.toLocaleString()}원</p>
      {isNew && <span>NEW!!!!</span>}
    </div>
  );
};

export default ProductCard;
