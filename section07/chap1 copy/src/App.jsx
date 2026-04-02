import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import { useEffect } from "react";
import Even from "./components/Even";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // 초기 값으로 아직 이 컴포넌트가 Mount 되지 않았다난 의미로 false 초기값 설정
  const isMount = useRef(false);

  //1. 마운트 탄생 -> 화면에 최초로 랜더링 되었을때 나오는 것.
  // useEffect가 실행되기 위해서는 deps에 있는 값이 변경되어야 한다.
  // 결국 이 callback 함수는 app 컴포넌트가 처음 mount될때 이후에는 다시 실행되지 않는다.
  // 브라우저를 새로고침하면 콘솔에 메시지가 최초로 출력이 된다.
  //  이후 아무리 state 값들을 변경해도 실행되지 않는다.
  useEffect(() => {
    console.log("mount");
  }, []);

  //2.  업데이트 : 변화, 리랜더링 될때만
  // 두번째 인수인 deps를 생략시 , 컴포넌트가 랜더링 될때 마다 자동으로 실행이 된다.
  // 만약 마운트 시점 제외하고 업데이터(리랜더링) 되는 순간에만 실행하고 싶은 경우 useEffect만으로는 불가능하다 .
  // useRef 사용
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return; //  콘솔이 실행이 되지 않도록 리턴 걸기
    }
    console.log("update");
  });

  //3. 언마운트 : 죽음
  // 화면에 나타났다 사라졌다 하는 컴포넌트가 필요

  useEffect(() => {
    console.log(`count : ${count} / input"${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
