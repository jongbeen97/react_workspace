import "./ListItem.css";

const ListItem = () => {
  return (
    <div className="ListItem">
      <input type="checkbox" />
      <div className="content">할일...</div>
      <div className="date">날짜</div>
      <button>삭제</button>
    </div>
  );
};
export default ListItem;
