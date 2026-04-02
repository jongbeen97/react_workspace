import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const timerRef = useRef(null);
  const isMount = useRef(false);

  useEffect(() => {
    console.log("mount ");
  }, []);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const onoff = (command) => {
    if (command === "start") {
      setRunning(true);
    } else if (command === "stop") {
      setRunning(false);
    }
  };

  // useEffect(() => {
  //   if (!isMount.current) {
  //     isMount.current = true;
  //     return;
  //   }
  //   console.log("update");
  // }, []);

  // useEffect(() => {
  //   console.log(`count : ${count} / input"${input}`);
  // }, [count, input]);

  // const onClickButton = (value) => {
  //   setCount(count + value);
  // };

  return (
    <div className="App">
      <h1>미션 : 타이머</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <button onClick={() => onoff("start")}>시작</button>
        <button onClick={() => onoff("stop")}>정지</button>
      </section>
    </div>
  );
}

export default App;
