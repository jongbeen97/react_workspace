// 함수 컴포넌트에서 state 생성을 위해 react 내장 함수 useState 사용
import { useState } from "react";
import "./App.css";

function App() {
  // state 생성
  // const[변수명,설정자(setter)] = useState(초기값);
  const [isOn, setIsOn] = useState(false);
  const [cnt, setCnt] = useState(0); // 변수의 초기값을 적어주는 것입니다.

  // 일반 지역변수
  let count = 0;
  function add() {
    count += 1;
    console.log(count);
  }
  return (
    <>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
      <button onClick={add}>{count}</button>
      {/* 스테이트 변수의 경우 상태값이 변경되면 자동으로 리렌더링 발생
      즉, App 컴포넌트를 다시 호출 하여 화면에 랜더링을 한다. 
      일반 변수의 경우 값이 변경되도 , 감지가 되지 않으므로 리렌더링이 발생하지 않는다. 
      이거는 화면에 나와야 하는 변수 값이 바뀌어야 하는 변수 : state 
      이거는 내부에서만 사용하는 변수야 : 일반 변수를 사용한다. 
      */}
      <button
        onClick={() => {
          setCnt(cnt + 1);
        }}
      >
        {cnt}
      </button>
    </>
  );
}

//

export default App;
