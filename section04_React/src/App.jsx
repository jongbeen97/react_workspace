import { useState } from "react";
import "./App.css";

/*
HTML 태그를 리턴하는 함수를 컴포넌트 라고 부른다. 
앱 컴포넌트라고 부른다 (app.jsx)
리턴 값에 존재하는 테그들이 main.jsx에서 호출되어 render메서드를 통해서 랜더링 화면 렌더링이 되고 있다. 
 */
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>hello react!</div>
    </>
  );
}

export default App;
