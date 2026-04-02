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
export default ListItem;
