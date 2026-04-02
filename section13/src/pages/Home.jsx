import Header from "../components/Header";
import Button from "../components/Button";
import DirayList from "../components/DiaryList";
import { useState } from "react";
import { DiaryStateContext } from "../App";
import { useContext } from "react";
import usePageTitle from "../hooks/usePageTitle";

// 3월이면 3월 일기만 가져오도록 필터링 기능 구현
// 코드 가독성 및 불필요한 함수 재생성 방지를 위해 외부 선언
const getMonthlyData = (data, pivotDate) => {
  //이번 달의 시작점이 되는 시간값
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1, // 1일
    0, // 0시
    0, // 0분
    0, // 0초
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, // 0일로 지정 -> 해당하는 달에 이전 달의 마지막 날짜로 설정
    23, // 23시
    59, // 59분
    59, // 59초
  ).getTime();
  // 현재 선택된 달에 작성된 일기만 필터링 후 새로운 배열 반환
  return data.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime,
  );
};

const Home = () => {
  // 컨텍스트에 저장된 일기 데이터 가져오기
  const data = useContext(DiaryStateContext);
  usePageTitle("감정 일기장");

  // 현재 일기 조회의 기준이 되는 날짜 저장
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(data, pivotDate);

  // 이전 달
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  // 다음 달
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
      <DirayList data={monthlyData} />
    </div>
  );
};

export default Home;
