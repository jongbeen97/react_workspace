import ListItem from "./ListItem";
import "./List.css";
import { useState } from "react";
import { useMemo } from "react";

const List = () => {
  const { todos } = useContext(TodoContext);
  //검색을 위한 새로운 state생성
  const [search, setSearch] = useState("");

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

  // 전체 항목, 완료 항목 , 미완료 항목의 갯수
  // 매번 연산 실행을 방지하기 위해서 , 연산 자체를 메모리제이션 ( 기억하고 있을 것 )
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = filteredTodos.length;
    const doneCount = filteredTodos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [filteredTodos]); // todos 값이 변경될때마다 , 실행되도록 의존성 배열을 적용

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="List">
      <h4>할일 목록 </h4>
      <div>total:{totalCount}</div>
      <div>done:{doneCount}</div>
      <div>notDone:{notDoneCount}</div>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {/* todos_wrapper 안에 있는 자식드른 반드시 고유한 key라는 prop을 가져야 한다 */}
        {filteredTodos.map((todo) => (
          <ListItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};
export default List;
