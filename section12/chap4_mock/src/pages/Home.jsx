import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { DiaryStateContext } from "../App";

// 3월이면 3월 일기만 가져오도록 필터링 기능 구현
// 코드 가독성 및 불필요한 함수 재생성 방지를 위해 외부에 선언
const getMonthlyData = (data, pivotDate) => {
  // 이번달의 시작점이 되는 시간 값
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    // 1일 0시 0분 0초
    1, //1일
    0, //0시
    0, //0분
    0, //0초
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, //0일로 지정 -> 해당하는 달에 이전 달의 마지막 날짜로 설정
    23, //23시
    59, //59분
    59, //59초
  ).getTime();
  // 현재 선택된 달에 작성된 일기만 필터링 후 새로운 배열을 반환
  return data.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime,
  );
};

const Home = () => {
  // 컨텍스트에 저장된 일기 데이터 가져오기
  const data = useContext(DiaryStateContext);

  // 현재 일기조회의 기준이 되는 날짜 저장
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(data, pivotDate);

  // 이전달
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  // 다음달
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
