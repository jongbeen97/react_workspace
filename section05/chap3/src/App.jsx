import "./App.css";
// ES모듈 사용시 React는 파일확장자 생략이 가능하다.
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

/*
App 컴포넌트에는 화면 구성요소(컴포넌트)들이 들어가야 한다. 
리액트의 컴포넌트들은 하나의 파일에 작성하지 않고 , 
모듈화를 위해 컴포넌트 별로 각각 파일을 나눠서 작성하는 것이 일반적입니다. 
*/
function App() {
  // 메인 컴포넌트 , 인덱스에 렌더링 되는 아이
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
