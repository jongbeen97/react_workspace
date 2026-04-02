import { useState } from "react";
import "./Editor.css";
import { useRef } from "react";

// 에디터 컴포넌트에서 추가 버튼이 클릭되면
// 앱 컴포넌트에서 만든 onCreate함수를 호출 하면서 인수로 입력값을 전달
const Editor = ({ onCreate }) => {
  // input 태그의 value를 별도로 State로 관리
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

export default Editor;
