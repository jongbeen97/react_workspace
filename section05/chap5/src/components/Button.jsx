//children : <button> 사이에 들어있는 값 </button>
//...rest : 앞에 변수에서 사용된 props를 제외한 나머지 싹다 저장.

const Button = ({ text = "버튼", color = "gold", children, ...rest }) => {
  const onClickButton = (event) => {
    // event 문자열로 강제 형변환
    console.log("이벤트 객체 : " + event);
    // event객체 내부를 출력
    console.log("이벤트 객체 전체 내용 : ", event);
    console.log("이벤트 발생 객체 : ", event.target);
    console.log("발생한 이벤트 종류 : ", event.type);
    console.log(rest);
  };
  return (
    <button onClick={onClickButton} style={{ backgroundColor: color }}>
      {text}
      {children}
      {rest.a}
    </button>
  );
};

export default Button;
