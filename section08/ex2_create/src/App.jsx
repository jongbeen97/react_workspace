import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/header";
import List from "./components/List";

//DB에 저장된 정보를 불러온다고 가정
const mockData = [
  {
    id: 0,
    isDone: true,
    content: "React공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빅분기 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "네트워크 관리사 공부하기",
    date: new Date().getTime(),
  },
];

function App() {
  //DB 값을 받아와서 그것을 STATE로 관리하는 것.
  const [todos, setTodos] = useState(mockData);

  // 에디터 컴포넌트에서 입력한 값을 가져와
  // 새롭게 생성될  ListItem을 위한 객체 생성
  const onCreate = (content) => {
    const newTodo = {
      id: todos.length, // 아이디는 식별자 이므로 중복이 되면 안됨
      isDone: false,
      content, // 즉 content : content
      date: new Date().getTime(),
    };
    // 기존에 배열에 새로 생성된 할일 객체 추가
    // 기존에 배열에 들어있던 값을 유지하면서 새로운 객체 추가 ( 스프레드 연산자 사용)
    setTodos([...todos, newTodo]);
  };

  // targetID와 동일한 ID를 갖는 요소를 삭제한 새로운 배열을 반환
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  const onCheckUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      {/* 리스트 형태로 랜더링 하는 기능 구현을 위해 props로 todos스테이트 전달 */}
      <List todos={todos} onDelete={onDelete} onCheckUpdate={onCheckUpdate} />
    </div>
  );
}

export default App;
