import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

// 해당하는 월에 대한 일기 데이터를 props로 전달
const DiaryList = ({ data }) => {
  const nav = useNavigate();
  //정렬 타입을 저장할 상태 초기화
  const [sortType, setSortType] = useState("latest");

  //select 값이 변경 될때 실행되는 이벤트 핸들러
  const onChangeSortType = (e) => {
    setSortType(e.target.value); // 일을 상태도 바꾸면서 동시에 정렬도 하니 나눠주는게 좋다.
  };

  // 실제 정렬 기능을 구현하기 - 정렬된 배열을 반환
  const getSortedData = () => {
    // toSorted : 원본 배열은 유지한 채로 정렬한 새로운 배열을 반환.
    // 단 createdDate는 객체의 속성이기 때문에 단순 정렬이 불가능하다.
    // 직접 비교하여 정렬 처리하는 코드를 작성 필요
    return data.toSorted((a, b) => {
      if (sortType === "latest") {
        // 최신 순 정렬
        // 다음 값에서 이전의 값을 뺄 때 , 그게 양수라면
        // 뒤의 있는 것이 더 크다 (최근이라는 소리 , 밀리세컨으로 보면 )
        // 크기 비교에 따라 두 원소의 순서를 바꾸는 기능
        return b.createdDate - a.createdDate;
      } else {
        return a.createdDate - b.createdDate;
      }
    });
  };

  const storedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          onClick={() => {
            nav("/new");
          }}
          text={"새일기쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {storedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default DiaryList;
