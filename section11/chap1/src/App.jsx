import { useReducer, useState, useCallback, createContext } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/header";
import List from "./components/List";
import { useRef } from "react";

// 일반적으로 컴포넌트 외부에 생성
// 컨텍스트는 각 컴포넌트의 데이터를 공급(props 드릴링 방지,
// 리랜더링 시 다시 생성될 필요가 없음 . )
export const TodoContext = createContext();
// 컨텍스트 개체 내부 확인
// provider 프로퍼티 : 공급자 , 제공자
// -> 공급할 데이터를 설정하거나 , 공급받을 컴포넌트 설정 가능

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
// 실제로 todos의 상태 변화를 처리하는 함수
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      // 새롭게 추가될 리스트 아이템 인 action.data를 기존 todos에 추가
      return [action.data, ...state];
  }
  switch (action.type) {
    case "DELETE":
      return state.filter((todo) => todo.id !== action.data.id);
  }
  switch (action.type) {
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.data.id ? { ...todo, isDone: !todo.isDone } : todo,
      );
    default:
      return state;
  }
}

function App() {
  // useState 대신 useReducer를 사용.
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3); // 그래야 id 중복이 안되고 1씩 증가를 할 것

  // 에디터 컴포넌트에서 입력한 값을 가져와
  // 새롭게 생성될  ListItem을 위한 객체 생성
  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        // id: todos.length, 최초 마운트될때 한번 실행되므로 todos.length 값이 고정된 상태로 처리
        isDone: false,
        content,
        date: new Date().getTime(),
      },
    });
  }, []); //의존성 배열이 빈 배열 임으로 컴포넌트가 다시 랜더링 되더라도 함수는 재 생성되지 않는다.

  // 기존에 배열에 새로 생성된 할일 객체 추가
  // 기존에 배열에 들어있던 값을 유지하면서 새로운 객체 추가 ( 스프레드 연산자 사용)

  // targetID와 동일한 ID를 갖는 요소를 삭제한 새로운 배열을 반환

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: {
        id: targetId,
      },
    });
  }, []); // 불필요한 함수 재생성 방지를 위해 useCallBack훅 사용

  const onCheckUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
      },
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {/* 이렇게 컨텍스트로 컴포넌트를 묶어주면 Editor 랑 List 컴포넌트와 
      이 컴포넌트의 그 자식 후손들 까지 todo컨텍스트에 접근 가능  
      -> Provider가 공급하는 데이터를 사용 가능하다*/}
      <TodoContext.Provider
        value={{ todos, onCreate, onDelete, onCheckUpdate }}
      >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;

/*
useState 와 useReducer 코드 비교하면서 공부 
보통 리액트에서 State관리시 배열 안에 객체가 들어가는 복잡한 구조의 경우 useReudcer 사용이 일반적 ( 코드가 복잡한 경우 )
counterApp 처럼 간단한 처리가 필요할 때는 useState 만으로 충분하다. 
코드가 어찌 하면 관리가 더 쉬울지 생각을 해보는 것이다. 
 */
