import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Editor from "../components/Editor";

const New = () => {
  const nav = useNavigate();
  return (
    <div className="New">
      <Header
        title={"새일기쓰기"}
        leftChild={
          <Button
            text={"뒤로가기"}
            onClick={() => {
              // nav("/"); // Home 페이지 컴포넌트로 이동
              nav(-1); // 이전 페이지로 이동
            }}
          />
        }
      />
      <Editor />
    </div>
  );
};

export default New;
