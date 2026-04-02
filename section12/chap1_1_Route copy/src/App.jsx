import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import { getEmotionImage } from "./utils/get-emotion-image";
// import emotion1 from "./assets/emotion1.png";
import emo1 from "/emotion1.png";

function App() {
  // const nav = useNavigate(); //이거 두개 세트다
  // const onClickButton = () => {
  // window.location.href = "/new";
  // MPA 방식으로 동작(리액트에서는 사용되지 않습니다)
  // 버튼 클릭시 useNavigate함수 호출 하면서 인수로 이동하려는 url 경로를 작성하시면 됩니다. ( 새로고침 안함 )
  //   nav("/new"); // 새로 고침 안당하고 잘 들어감.
  // };
  return (
    <>
      <div>
        {/* 이미지 기본 랜더링 방식  */}
        {/* <img src={emotion1} alt="emotion1" /> */}
        {/* 퍼블릭에 저장된 이미지는 클라이언트에게 공개가 되고  */}
        <img src={emo1} alt="emotion1" />
      </div>
      <div>
        {/* assets에 저장된 이미지는 빌드도구(vite)를 통해 자동 최적화 
        자주 사용되는 이미지는 assets 저장(컴포넌트 내부에서 사용) */}
        <img src={getEmotionImage(1)} alt="emotion" />
        <img src={getEmotionImage(2)} alt="emotion" />
        <img src={getEmotionImage(3)} alt="emotion" />
        <img src={getEmotionImage(4)} alt="emotion" />
        <img src={getEmotionImage(5)} alt="emotion" />
      </div>

      {/* a태그는 MPA 방식으로 동작(리액트에서는 사용되지 않습니다) */}
      <h1>App</h1>
      <div>
        {/*  리액트에서 페이지 이동 메뉴를 만들때는 링크 컴포넌트를 배치한 후 
        to 라는 props에 url 경로를 작성을 해주어야 합니다 (화면 매핑은 안됨)*/}
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/diary">Diary</Link>
      </div>

      {/* <button onClick={onClickButton}>버튼</button> */}

      <Routes>
        {/* Path 속성에 접근 URL 작성해주시고 , element 라는 속성에는 실제로 보여야 할 페이지 컴포넌트 작성해주시면 됩니다.  */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
