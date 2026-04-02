import ListItem from "./ListItem";
import "./List.css";

const List = () => {
  return (
    <div className="List">
      <h4>할일 목록 </h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
};
export default List;
