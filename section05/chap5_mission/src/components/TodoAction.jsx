const TodoAction = ({ todo }) => {
  const onClickButton = () => {
    console.log(`할일 : ${todo.content}, 완료여부 : ${todo.isDone}`);
    if (todo.isDone) {
      console.log(" 완료된 항목");
    } else {
      console.log("완료가 되지 않았습니다");
    }
  };
  // 구조 분해 할당
  return (
    <li>
      {todo.content}
      <button onClick={{ onClickButton }}>할일 정보 보기</button>
    </li>
  );
};
export default TodoAction;
