import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import Edit from "./Edit";
import Viewer from "../components/Viewer";

const Diary = () => {
  const nav = useNavigate();

  // 브라우저에 명시된 url 파라미터 값을 가져오는 기능
  // params의 객체를 저장
  const params = useParams();
  console.log(params);
  return (
    <div className="Diary">
      <Header
        leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"} />}
        title={params.id + "번의 기록"}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer />
    </div>
  );
};

export default Diary;
