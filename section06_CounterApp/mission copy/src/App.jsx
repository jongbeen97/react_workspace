import { useRef, useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import OperatorButtons from "./components/OperatorButtons";
import ResultBox from "./components/ResultBox";

function App() {
  // 숫자 상태를 저장(문자열 초기화)
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  // 계산 결과 상태 저장
  const [result, setResult] = useState(null);
  //
  const inputRef1 = useRef(null); //  일단 초기 Ref값은 null로 둔다
  const inputRef2 = useRef(null);
  //연산을 수행하는 함수
  const calculate = (operator) => {
    // 첫번째 숫자가 비어 있을 경우 경고 및 포커스(useRef, 이것도 props로 전달)
    if (num1 === "") {
      alert("첫번째 숫자를 입력하세요");
      inputRef1.current.focus();
      return;
    }
    // 두번째 숫자가 비어 있을 경우 경고 및 포커스
    if (num2 === "") {
      alert("두번째 숫자를 입력하세요");
      inputRef2.current.focus();
      return;
    }

    // 입력 값을 실수 형태 숫자로 변환
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);

    let res = 0;

    //선택한 연산자에 따라 결과가 계산이 되어야 한다
    switch (operator) {
      case "+":
        res = num1Value + num2Value;
        break;
      case "-":
        res = num1Value - num2Value;
        break;
      case "*":
        res = num1Value * num2Value;
        break;
      case "/": // 나누는 값은 0이면 안됨 (num2value가 0이면 안됨 )
        if (num2Value === 0) {
          alert("0으로 나눌 수 없습니다.");
          return;
        }
        res = num1Value / num2Value; // num2는 영이 되어서는 안됩니다 ( alert ) 그래서 null 처리를 함
        break;
      default:
        res = "잘못된 연산자 입니다.";
        break;
    }
    // 계산 결과를 result스테이트에 값으로 저장
    setResult(res);
  };
  return (
    <div className="App">
      <h1>사칙연산 계산기</h1>
      {/* inputBox 두개의 숫자를 입력 컴포넌트 */}
      <InputBox
        num1={num1}
        setNum1={setNum1}
        num2={num2}
        setNum2={setNum2}
        ref1={inputRef1}
        ref2={inputRef2}
      />
      {/* OperatorButtons 사칙연산 버튼 컴포넌트 */}
      <OperatorButtons OnCalculate={calculate} />
      {/* ResultBox 계산 결과 표시 컴포넌트 */}
      <ResultBox result={result} />
    </div>
  );
}

export default App;
