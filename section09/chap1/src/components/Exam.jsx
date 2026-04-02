import { useReducer } from "react";

function reducer(cnt, action) {
  switch (action.type) {
    case "plus":
      return cnt + action.data;
    case "minus":
      return cnt - action.data;
    default:
      return cnt;
  }
}

// 여기에 reducer를 만들 것 : +-버튼 클릭시 변수 값 증감하는 코드 작성
const Exam = () => {
  // dispatch : 발송하다
  // 상태 변화가 있어야 한다는 사실을 알리는 함수
  const [count, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 디스패치 호출 시 디스패치에 매핑 되어 있는 reducer가 호출이 됩니다.
    // 동시에 이 안의 값을 action에 인수들을 저장을 합니다. (기본타입, 객체 타입 모두 가능합니다.)
    dispatch({ type: "plus", data: 1 });
  };

  const onClickMinus = () => {
    dispatch({ type: "minus", data: 1 });
  };

  return (
    <div className="Exam">
      <h1>{count}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
