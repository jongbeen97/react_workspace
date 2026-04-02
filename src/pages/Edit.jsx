// URL 파라미터를 가지고오는 훅
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import { useContext } from "react";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  // useParams 훅을 사용하여 URL 경로에 있는 파라미터 값 가져오기
  // EX ) /edit/3 -> params.id는 "3"
  const params = useParams();
  usePageTitle(`${params.id}번 일기 수정`);
  const nav = useNavigate();

  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    // 사용자에게 확인 메세지 표시 일반적(삭제 or 수정)
    // js -> 확인, 취소버튼이 존재하는 입력창 confirm() : 확인->true, 취소->false
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    // 수정 알림
    if (window.confirm("정말로 수정하시겠습니까?")) {
      onUpdate(
        params.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
