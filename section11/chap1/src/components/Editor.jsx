import { useState } from "react";
import "./Editor.css";
import { useRef } from "react";
import { memo } from "react";
import { useContext } from "react";
import { TodoContext } from "../App";

// TodoContext에 저장되어 있는 onCreate값 가져와서 사용 .
// 위 코드 처럼 컨텍스트 안에 있는 전체 Data를 가져오기
const Editor = () => {
  const data = useContext(TodoContext);
  console.log(data);

  const { onCreate } = data;

  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onSubmit = () => {
    if (content === "") {
      alert("텍스트를 입력하세요");
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 추가된 문자열 초기화
    alert("할일이 추가되었습니다");
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        placeholder="새로운 할 일..."
        onChange={onChangeContent}
        onKeyDown={onKeyDown} // Enter입력시 이벤트 처리 항목 추가
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default memo(Editor);
