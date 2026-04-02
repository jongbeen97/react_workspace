const TodoItem = ({ content, isDone }) => {
  // 구조 분해 할당
  return (
    <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
      {content}
    </li>
  );
};
export default TodoItem;
