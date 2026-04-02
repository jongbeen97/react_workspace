// URL 파라미터를 가져오는 리액트 훅
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
  const nav = useNavigate();
  // useParams 훅을 사용하여 URL 경로에 있는 파라미터 값 가져오기
  // Ex) /edit/3 -> params.id는 "3" 로 나온다.
  const params = useParams();
  console.log(params);

  return (
    <div className="Edit">
      <Header
        leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"} />}
        title={"일기 수정하기"}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} />}
      />
      <Editor />
    </div>
  );
};

export default Edit;
