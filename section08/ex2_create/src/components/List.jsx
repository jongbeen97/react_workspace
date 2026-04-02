import ListItem from "./ListItem";
import "./List.css";
import { useState } from "react";

const List = ({ todos, onDelete, onCheckUpdate }) => {
  //검색을 위한 새로운 state생성
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // 검색 처리 이벤트 핸들러 -> 새로운 배열이 저장되는 것
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    //검색어가 입력되었다면 기존 배열에 검색어가 포함된 항목만을 필터링해서 새로운 배열을 반환.
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>할일 목록 </h4>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {/* todos_wrapper 안에 있는 자식드른 반드시 고유한 key라는 prop을 가져야 한다 */}
        {filteredTodos.map((todo) => (
          <ListItem
            key={todo.id}
            {...todo}
            onDelete={onDelete}
            onCheckUpdate={onCheckUpdate}
          />
        ))}
      </div>
    </div>
  );
};
export default List;
