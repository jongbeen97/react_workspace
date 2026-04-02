import { useEffect } from "react";

// count 스테이트 값이 짝수 일때만 화면에 랜더링 되는 컴포넌트
const Even = () => {
  useEffect(() => {
    //useEffect의 첫번째 인자인 콜백함수 안에서 return 으로 새로운 함수를 다시 한번 반환을 해준다.
    // -> 클린업 함수
    // 정리함수는 useEffect 가 끝날 때 실행
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>짝수입니다</div>;
};
export default Even;
