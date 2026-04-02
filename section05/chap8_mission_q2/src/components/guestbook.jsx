import { useState } from "react";

const Guestbook = () => {
  const [input, setInput] = useState({
    name: "",
    word: "",
  });

  const onChange = (e) => {
    console.log(e.target.name + ":" + e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>방명록</h1>
      <div>
        <input
          name="name"
          value={input.name}
          type="text"
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="word"
          value={input.word}
          type="text"
          onChange={onChange}
          placeholder="내용"
        />
      </div>
      <div>
        <button>글 저장</button>
      </div>
    </div>
  );
};

export default Guestbook;
