import { useParams } from "react-router-dom";

const Diary = () => {
  // 브라우저에 명시된 url 파라미터 값을 가져오는 기능
  // params의 객체를 저장
  const params = useParams();
  console.log(params);
  return <div>Diary{params.id}번 일기입니다 ~ </div>;
};

export default Diary;
