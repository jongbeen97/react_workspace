import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  //useState의 set은 비동기로 동작을 합니다
  // ( 비동기 : 함수의 호출은 이미 되었으나 완료가 아직 안된 상태 )
  // 변경되기 이전의 값이 콘솔에 출력이 되어 버립니다
  // 변경된 스테이트 값을 바로 사용해서 추가 작업(SideEffct)를 해야 하는 경우 useEffect사용은 필수다

  const onClickButton = (value) => {
    setCount(count + value);
    console.log(`클릭이벤트 : ${count}`);
  };

  //useEffect는 컴포넌트 생애주기에 따른 , 추가적인 기능을 구현할수 있는 리액트 훅입니다.(이미 함수이다)
  //첫번째 인수로는 : 콜백 함수를 넣어줄 것(~를 한 뒤에 실행 되는 것)
  //두번째 인수로는 배열을 넣어주는 것이다. (count라는 값이 변할때 마다 실행해줘 라는 의미)
  //배열에 들어있는 값에 의해 , useEffect가 실행되므로 ,
  //배열의 useEffect는 배열에 의존하고 있습니다.
  // 이런 배열을 특별히 의존성 배열이라고 한다. (dependencyArray -> deps)
  // deps에는 값을 여러개 넣을 수 있습니다.
  useEffect(() => {
    console.log(`count : ${count} / input"${input}`);
  }, [count, input]); // count나 인풋 값중 하나만 변경되어도 useEffect실행
  // dependency Array , 이미 있는 함수이기에, 이 배열에 있는 값을 의존하는 기능이 구현이 되어 있다.
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
