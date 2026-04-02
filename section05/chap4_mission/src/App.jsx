import "./App.css";
import ProductCard from "./components/ProductCard";
// ES모듈 사용시 React는 파일확장자 생략이 가능하다.
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItem from "./components/TodoItem";

/*
App 컴포넌트에는 화면 구성요소(컴포넌트)들이 들어가야 한다. 
리액트의 컴포넌트들은 하나의 파일에 작성하지 않고 , 
모듈화를 위해 컴포넌트 별로 각각 파일을 나눠서 작성하는 것이 일반적입니다. 
*/
function App() {
  // 메인 컴포넌트 , 인덱스에 렌더링 되는 아이
  const product = {
    title: "무선이어폰",
    price: 129000,
    isNew: true,
  };

  const todos = [
    { content: "리액트 실습 ", isDone: true },
    { content: "리액트 실습2 ", isDone: false },
    { content: "리액트 실습3 ", isDone: false },
  ];

  return (
    <>
      <WelcomeMessage text={"lee"} />
      <WelcomeMessage text={"이종빈"} />

      <ProductCard {...product} />
      <ProductCard title="유선키보드" price={49000} isNew={false} />

      {/* 리스트 태그의 자식요소인 li 태그가 여러개인 경우 
어떤 자식요소를 선택했는지 확인하기 위해 key 필요 
배열의 인덱스를 key로 쓰는 것은 마지막 선택 
*/}
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem
            key={idx}
            content={todo.content}
            button={todo.button}
            isDone={todo.isDone}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
