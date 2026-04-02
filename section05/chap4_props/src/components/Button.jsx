//Props로 전달 받는 값들은 모두 중괄호 안에 작성을 해야 합니다
// const Button = ({ text = "버튼" }) => {
//   return <button>{text}</button>;
// };
// 이 방식이 가장 권장되는 방식입니다

// 버튼 컴포넌트에 자식 태그를 추가하면
// children 이라는 이름으로 props가 자동전달
// 구조분해 할당 사용
// const Button = ({ text, color, children }) => {
//   return (
//     <button style={color}>
//       {text} - {color}
//       {children}
//     </button>
//   );
// };

//props인 속성인 아이가 없기에 , {props} : props라는 속성이름으로 전달하는 값이 있어야 사용 가능하다.
//props : app 에서 전달된 props전체를 props 변수에 저장
// const Button = (props) => {
//   console.log(props);
//   return (
//     <button style={{ color: props.color }}>
//       {props.text} - {props.color}
//       {children}
//     </button>
//   );
// };

const Button = ({ text = "버튼", color = "blue" }) => {
  if (!text) return null; // 버튼 자체를 보여주기 싫을때 사용
  return (
    <button style={{ color }}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

export default Button;
