import { useState } from "react";
import Want from "./components/want.jsx";

function App() {
  const [name, setName] = useState("");
  //좋아요를 누른 사용자의 이름 목록
  const [likedUser, setLikedUser] = useState([]);
  // 좋아요를 누른 사람인지 아닌지 체크
  const liked = likedUser.includes(name);

  const handleLikeToggle = () => {
    if (liked) {
      // 배열에서 좋아요를 취소한 사람 이름 제거
      setLikedUser(likedUser.filter((user) => user !== name));
    } else {
      // 배열에 새롭게 좋아요를 누름 사람의 이름 맨 뒤에 추가
      setLikedUser([...likedUser, name]);
    }
    setName("");
  };

  return (
    <>
      <h2> 사용자별 좋아요 버튼 </h2>
      <input
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={handleLikeToggle}>
        {liked ? "좋아요 취소" : "좋아요"}
      </button>
      <p>현재 좋아요 수 : {likedUser.length}</p>
      {/* 배열의 값이 존재하지 않으면 join 메서드의 결과는 빈 문자열 입니다. -> falsy */}
      <p>좋아요를 누른 사용자: {likedUser.join(",") || "없음"}</p>
    </>
  );
}
export default App;
