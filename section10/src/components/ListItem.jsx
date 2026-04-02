import { memo } from "react";
import "./ListItem.css";

const ListItem = ({ isDone, content, date, onDelete, id, onCheckUpdate }) => {
  const onButtonClick = () => {
    alert("삭제되었습니다");
    onDelete(id);
  };

  const onChangeCheckbox = () => {
    onCheckUpdate(id);
  };
  return (
    <div className="ListItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onButtonClick}>삭제</button>
    </div>
  );
};
// id,isDone,content,date 부모로부터 전달받은 값들이 바뀌지 않으면
// 부모 컴포넌트에서 전달 받는 props가 변경되지 않으면 리랜더링 일어나지 않음.
export default memo(ListItem);
