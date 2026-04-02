import { useState } from "react";
// 3-1
// const want = () => {
//   const [count, setCount] = useState(0);

//   const onClickButton = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       {/* <h2>좋아요 버튼 ~ </h2>
//       <button onClick={onClickButton}>
//         좋아요 <strong>▲{count}</strong>
//       </button> */}
//     </div>
//   );
// };

//3-2
const want = () => {
  const [like, isLike] = useState(false); // 좋아요 여부
  const [count, setCount] = useState(0); //좋아요 갯수

  const onClickButton = () => {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    isLike(!like); // like 상태 반전
  };

  <button onClick={onClickButton}>{like ? "좋아요 취소" : "좋아요"}</button>;
};

export default want;
