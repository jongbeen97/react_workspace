import { useState } from "react";
import "./App.css";

/*
HTML 태그를 리턴하는 함수를 컴포넌트라고 한다.
앱 컴포넌트라고 부른다.
리턴 값에 존재하는 태그들이 main.jsx에서 호출되어 render 메서드를 통해 화면 렌더링
*/
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello React!</div>
    </>
  );
}

export default App;
