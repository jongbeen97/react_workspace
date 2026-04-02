// URL 파라미터를 가져오는 리액트 훅
import { useParams } from "react-router-dom";

const Edit = () => {
  // useParams 훅을 사용하여 URL 경로에 있는 파라미터 값 가져오기
  // Ex) /edit/3 -> params.id는 "3" 로 나온다.
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기 수정</div>;
};

export default Edit;
