import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import "./DirayList.css";

// 해당하는 월에 대한 일기 데이터를 props 전달
const DirayList = ({ data }) => {
  const nav = useNavigate();
  // 정렬 타입을 저장할 상태 초기화
  const [sortType, setSortType] = useState("latest");

  // select 값이 변경 될때 실행되는 이벤트 핸들러
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  // 실제 정렬 기능 구현 -> 정렬된 배열을 반환
  const getSortedData = () => {
    // toSorted : 원본 배열은 유지한채로 정렬한 새로운 배열 반환
    // 단, createDate는 객체의 속성이기 때문에, 단순 정렬 불가능
    // 직접 비교 하여 정렬 처리하는 코드 작성 필요
    return data.toSorted((a, b) => {
      if (sortType === "latest") {
        // 최신순 정렬
        // 크기 비교에 따라 두 원소의 순서를 바꾸는 기능
        return b.createDate - a.createDate;
      } else {
        return a.createDate - b.createDate;
      }
    });
  };

  const storedData = getSortedData();

  return (
    <div className="DirayList">
      <div className="menu_bar">
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => {
            nav("/new");
          }}
          text={"새 일기 쓰기"}
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

export default DirayList;
