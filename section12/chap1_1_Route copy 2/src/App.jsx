import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/edit";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      <Button
        text="<"
        onClick={() => {
          console.log("이전달로 이동");
        }}
      />

      <Button
        text=">"
        type="POSITIVE"
        onClick={() => {
          console.log("다음달로 이동");
        }}
      />

      <Button
        text="수정하기"
        type="NEGATIVE"
        onClick={() => {
          console.log("수정페이지로  이동");
        }}
      />

      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/edit">Edit</Link> {/* 굳이 없어도 들어가기는 한다.  */}
      </div>

      {/* <button onClick={onClickButton}>버튼</button> */}

      <Routes>
        {/* Path 속성에 접근 URL 작성해주시고 , element 라는 속성에는 실제로 보여야 할 페이지 컴포넌트 작성해주시면 됩니다.  */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
