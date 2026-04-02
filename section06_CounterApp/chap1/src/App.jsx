import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  /* 
  현재 카운트 값을 화면에 반영해야 하므로 스테이트 필요하다. 
  App, Viewer , Controller 3개의 컴포넌트 중 어디에 만들지를 선택해야 한다. 

  App 컴포넌트에 count스테이트 선언해야 함. 
  뷰어랑 컨트롤러는 서로 부모 자식 관계가 아니므로 , 어떠한 값도 서로 공유할 수 없습니다. 
  값을 공유하는 방법으로 props를 사용할 것. ( 부모 -> 자식으로 가능 )

  따라서 자식에게 필요한 State와 Event를 부모에 작성후 자식에게 Props로 전달해야 함. 
  => state Lifting 스테이트를 부모로 끄렁 올리는 행위 
   */

  const [count, setCount] = useState(0); // Viewer.jsx 컴포넌트를 위한 State생성
  // 컨트롤러는 버튼을 처리할 이벤트 함수를 받아야 한다.
  // 컨트롤러 컴포넌트를 위한 이벤트 핸들러를 생성
  const onClickButton = (value) => {
    setCount(count + value);
  };

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
