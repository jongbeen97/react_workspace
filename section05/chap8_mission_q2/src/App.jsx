import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [entries, setEntries] = useState([]);

  // 저장을 해주는 로직
  const onSave = () => {
    if (name === "" || msg === "") {
      alert("이름과 내용 입력을 확인해주세요!");
      return;
    }

    // 저장 로직이 onSave 함수 '안쪽'에 있어야 함!
    setEntries([...entries, { name, msg }]);
    setName("");
    setMsg("");
  };
  return (
    <div className="App">
      <h1>방명록</h1>
      <div className="input-group">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="남기고 싶은 말"
        />
        <button onClick={onSave}>남기기</button>
      </div>

      <hr />

      <ul className="guestbook-list">
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>{entry.name}</strong>: {entry.msg}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
