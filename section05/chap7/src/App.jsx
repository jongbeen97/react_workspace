import "./App.css";
import Bulb from "./components/Bulb";

function App() {
  // 앱컴포넌트 에는 최소한의 코드가 존재해야 합니다.
  // 불필요한 리랜더링을 방지하기 위해서
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
