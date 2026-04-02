import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  usePageTitle("새 일기 쓰기");

  const onSubmit = (input) => {
    // Date 객체를 타임 스탬프 형태로 저장해야 하므로 추가 처리 필요
    onCreate(input.createDate.getTime(), input.emotionId, input.content);
    // 새로운 일기 작성시 HOME 페이지로 이동 또한 뒤로가기 버튼 클릭시 새 일기 작성 페이지로 재이동 방지
    nav("/", { replace: true }); // replace: 뒤로가기 옵션 -> true : 뒤로가기 방지 처리
  };
  return (
    <div className="New">
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => {
              // nav("/"); // Home 페이지 컴포넌트로 이동
              nav(-1);
            }}
          />
        }
      />
      {/* Editor 컴퍼넌트는 Edit, New 페이지 두군데에서 사용됨
      Edit 페이지에서는 onUdpate 함수 실행
      New 페이지에서는 onCreate 함수 실행
      따라서 부모 컴포넌트에 따라 다른 기능이 수행되야 하므로 이벤트 핸들러를 
      prpos로 전달해야 한다.
       */}
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
