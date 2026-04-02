import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("mount");
    alert("환영합니다. 이 메시지는 마운트 될때만 실행이 됩니다");
  }, []);

  return (
    <div className="App">
      <h1>마운트시 메시지</h1>
      <p>콘솔 또는 alert로 환영 메시지를 확인하세요</p>
    </div>
  );
}

export default App;
