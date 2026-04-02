import "./App.css";
import ProductCard from "./components/ProductCard";
import TodoAction from "./components/TodoAction";
import WelcomeButton from "./components/WelcomeButton";

/*
App 컴포넌트에는 화면 구성요소(컴포넌트)들이 들어가야 한다. 
리액트의 컴포넌트들은 하나의 파일에 작성하지 않고 , 
모듈화를 위해 컴포넌트 별로 각각 파일을 나눠서 작성하는 것이 일반적입니다. 
*/
function App() {
  const todos = [
    { content: "리액트 실습 ", isDone: true },
    { content: "리액트 실습2 ", isDone: false },
    { content: "리액트 실습3 ", isDone: false },
  ];

  return (
    <>
      <WelcomeButton text="철수 정보 출력" />
      <WelcomeButton text="영희 정보 출력" />

      <ProductCard title="무선이어폰" price={129000} isNew={true} />
      <ProductCard title="유선키보드" price={49000} isNew={false} />

      <ul>
        {todos.map((todo, idx) => (
          <TodoAction key={idx} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;
