import { useState } from "react";
// 간단한 회원 가입 폼 만들기
// User 정보 수집을 해야 한다.
//1. 이름
//2. 생년월일
//3. 국적 (선택의 범위를 제한한다. > 그냥 INPUT으로 두어서는 안된다. )
//4. 자기소개

/*
회원가입 폼에서 스테이스 변수를 사용하는 이유는 
사용자가 입력창에 글자를 입력할때마다 화면에 실시간으로 글자가 보이게 하기 위해서 (UI 업데이트)

이름을 입력하다가 생년월일을 선택해도 이미 입력한 이름이 사라지지 않도록 보관하기 위해서 (데이터 유지를 위해 )
- HTML 만을 사용하면 입력창에 어떤 값이 입력되었는지 매번 웹 브라우저를 통해 확인 
- 스테이트는 제어 컴포넌트, 스태이트로 관리하면 리액트가 입력값에 주인이 됨(주도권이 달라짐)
-> 입력 값에 대한 검사나 제어에 대한 결과가 실시간으로 화면에 반영하기 수월하다. 
*/

const Register = () => {
  // 스테이트 선언시 초기값 설정 가능
  // 각 입력값에 대한 스테이트를 객체로 관리
  // 이런 식으로 K-V 형식으로 바꿔줄 것.
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    me: "",
  });

  // 각 스테이트에 통합 이벤트 처리
  const onChange = (e) => {
    // console.log(e.target); // <input ~ > 이렇게 나온다. 우리는 이를 원하는게 아니고 결국에는 여기서 이름이 바뀌었으니 이름 값을 바꿔줘 , 생년원일을 바꿔줘 이게 필요하다.
    console.log(e.target.name + ":" + e.target.value); // me : ㄹ
    setInput({
      // Spread 연산자를 이용하여 일단 기존에 state변수에 들어있던 property 값을 그대로 유지
      ...input,
      [e.target.name]: e.target.value, // 변경하고자 하는 key-value만 변경
    });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <input
          name="name "
          value={input.name}
          type="text"
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        {/* type 이 date값이면 자동으로 date Picker 실행 웹 브라우저 마다 모양이 다르다.
        |CSS 적용을 무조건 해야 한다 : 예쁘게 하기 위해선 */}
        <input
          name="birth"
          value={input.birth}
          type="date"
          onChange={onChange}
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          {/* 국가별 코드 , 국가별 언어 코드 존재  이 코드에 맞춰서 작성 */}
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
    </div>
  );
};

export default Register;
