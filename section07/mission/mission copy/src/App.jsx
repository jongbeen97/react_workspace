import { useEffect } from "react";
import "./App.css";
import { useRef } from "react";
import { useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");
  const preventKeyWord = useRef("");
  const isMount = useRef(false);

  // 1. mount
  useEffect(() => {
    console.log("mount");
    alert("환영합니다. 이 메시지는 마운트 될때만 실행이 됩니다");
  }, []);
  // 2. Update : 업데이트 시 , 이전에 나온 키워드 나오게 하기
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");

    return () => {
      preventKeyWord.current = keyword;
    };
  }, [keyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="App">
      <h1>미션 : 이전 입력 키워드 입력</h1>
      <input type="text" value={keyword} onChange={handleChange} />
      <p>현재 키워드 : {keyword}</p>
      <p>이전 키워드 : {preventKeyWord.current}</p>
    </div>
  );
}

export default App;
