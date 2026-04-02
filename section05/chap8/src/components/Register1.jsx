import { useState } from "react";
// 간단한 회원 가입 폼 만들기
// User 정보 수집을 해야 한다.
//1. 이름
//2. 생년월일
//3. 국적 (선택의 범위를 제한한다. > 그냥 INPUT으로 두어서는 안된다. )
//4. 자기소개

const Register = () => {
  // 스테이트 선언시 초기값 설정 가능
  const [name, setName] = useState(" 성명 ");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [me, setMe] = useState("");
  const onChangeName = (e) => {
    console.log(e.target.value);
  };

  const onChangeBirth = (e) => {
    console.log(e.target.value);
  };

  const onChangeCountry = (e) => {
    console.log(e.target.value);
  };

  const onChangMe = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h1>회원가입</h1>
      <div>
        <input
          value={name}
          type="text"
          onChange={onChangeName}
          placeholder="이름"
        />
      </div>
      <div>
        {/* type 이 date값이면 자동으로 date Picker 실행 웹 브라우저 마다 모양이 다르다.
        |CSS 적용을 무조건 해야 한다 : 예쁘게 하기 위해선 */}
        <input value={birth} type="date" onChange={onChangeBirth} />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
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
          value={me}
          placeholder="자기소개"
          onChange={onChangMe}
        ></textarea>
      </div>
    </div>
  );
};

// export default Register;
