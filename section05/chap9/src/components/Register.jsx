import { useRef, useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    me: "",
  });
  // 폼 안에 있는 input이 얼마나 많이 변경되었는지 횟수를 카운팅 하는 변수
  const countRef = useRef(0);
  // 비교를 위한 일반 변수 선언
  // 이벤트 발생시(onChange) State 상태가 변경됨에 따라 리랜더링 발생
  // -> 컴포넌트를 다시 읽음(count 변수 값은 0으로 계속 초기화)
  let count = 0;

  // DOM요소중 요소에 접근하기 위한 useRef 선언 -> 접근할 요소(태그)에 ref속성이 반드시 있어야 한다.
  const inputName = useRef();

  const onChange = (e) => {
    countRef.current++;
    count++;
    console.log("countRef값 : ", countRef.current);
    console.log("count값 : ", count);

    console.log(e.target.name + ":" + e.target.value); // me : ㄹ
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    // 이름이 입력되지 않은 경우 포커스
    if (inputName === "") {
      inputName.current.focus();
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <input
          ref={inputName}
          name="name "
          value={input.name}
          type="text"
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="kr">한국</option>
          <option value="jp">일본</option>
          <option value="cn">중국</option>
          <option value="us">미국</option>
          <option value="gb">영국</option>
          <option value="fr">프랑스</option>
          <option value="de">독일</option>
          <option value="ch">스위스</option>
          <option value="es">스페인</option>
          <option value="it">이탈리아</option>
          <option value="ar">아르헨티나</option>
          <option value="br">브라질</option>
          <option value="ca">캐나다</option>
          <option value="id">인도네시아</option>
          <option value="" selected>
            :::선택하세요:::
          </option>
        </select>
      </div>
      <div>
        <textarea
          name="me"
          value={input.me}
          placeholder="자기소개"
          onChange={onChange}
        ></textarea>
      </div>
      <button onClick={onSubmit}>제출하기</button>
    </div>
  );
};

export default Register;
