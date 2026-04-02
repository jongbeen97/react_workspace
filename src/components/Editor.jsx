import "./Editor.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "./Button";
import EmotionItem from "./EmotionItem";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  // 여러 값을 저장하고 관리하는 스테이트 생성
  const [input, setInput] = useState({
    createDate: new Date(), // 오늘의 날짜
    emotionId: 3, // 오늘의 감정
    content: "", // 오늘의 일기
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createDate: new Date(initData.createDate),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // 날짜 변경시 Date 객체가 아닌 문자열이 반환되므로
    // 문자열을 다시 Date 객체로 반환
    if (name === "createDate") {
      value = new Date(value);
    }

    setInput({ ...input, [name]: value });
  };

  const onSubmitButton = () => {
    // Date 객체를 타임 스탬프 형태로 저장해야 하므로 추가 처리 필요
    onSubmit(input);
  };

  const getStringedDate = (targetDate) => {
    // yyyy-mm-dd
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    // 월과 일이 한자리 수인경우 앞에 0붙이기
    if (month < 10) {
      month = `0${month}`;
    }
    if (date < 10) {
      date = `0${date}`;
    }
    return `${year}-${month}-${date}`;
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          type="date"
          name="createDate"
          onChange={onChangeInput}
          // input 태그는 Date 객체로 설정된 값 인식 불가능
          // input 태그에 날짜 정보 표시를 위한 문자열 반환 함수 작성
          // value={ input.createDate}
          value={getStringedDate(input.createDate)}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* 반복을 하려면 반복할 객체 */}
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  // 이벤트 객체를 직접 만들어서 전달(컴포넌트(EmotionItem)는 이벤트 객체를 자동으로 전달 X)
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId} // input state 값과 비교
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          onChange={onChangeInput}
          value={input.content}
          placeholder="오늘은 어떤 하루였나요?"
        />
      </section>
      <section className="button_section">
        {/* 페이지 뒤로가기 기능 구현 */}
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        {/* 새 일기쓰기 뿐만아니라 일기 수정에서도 Editor 컴퍼넌트를 사용하기때문에
          작성완료 버튼 클릭시  Editor 컴퍼넌트가 어떤 페이지에서 사용되었느냐에 따라
          다른 동작을 하게 만들어야 한다.*/}
        <Button onClick={onSubmitButton} text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
