/*
JSX 만들시 주의사항 
1. 표현식 {} : 중괄호 내부에는 자바 스크립트 표현식만 사용 가능 
2. 숫자, 문자열, 배열 값만 랜더링 가능하다. ( 객체는 배열화 시키면 된다 )
3. 모든 태그는 닫혀 있어야 합니다. ( 너무 당연한 소리 )
4. ★ 최상위 태그는 반드시 하나여야 한다.
*/

const Main = () => {
  return (
    <main>
      <div>
        <h1>Main Left</h1>
      </div>
      <div>
        <h1>Main right</h1>
      </div>
    </main>
  );
};

export default Main;
