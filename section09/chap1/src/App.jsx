import "./App.css";
import Exam from "./components/Exam";

//App 컴포넌트의 주요 역할 : UI 랜더링
// App 컴포넌트 내부에 state를 만들어 사용하게 되면 ,
// State를 관리하는 코드들 역시 App에 작성해야 합니다.
// 이렇게 되면 App 코드가 길어지고 , 주객이 전도된 상황이 발생을 함.
// 이런 문제를 해결하기 위해 useState대신 useReducer를 사용하면 됩니다.
function App() {
  return (
    <div className="App">
      <Exam />
    </div>
  );
}

export default App;
