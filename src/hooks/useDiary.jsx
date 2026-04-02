import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router";

const useDiary = (id) => {
  // 일기 내용 가져오기
  // 수정 페이지의 경우 기존에 작성한 일기 내용이 화면에 그대로 출력되야함.
  // 따라서 Context에 저장된 일기 데이터 반환
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();

  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id),
    );
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기 입니다.");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, []); // mount 될때만 실행
  return curDiaryItem;
};
export default useDiary;
