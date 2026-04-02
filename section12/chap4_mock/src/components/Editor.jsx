import { useContext, useState } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const Editor = () => {
  const nav = useNavigate();
  // 여러 값을 저장하고 관리하는 스테이트를 생성

  const [input, setInput] = useState({
    createDate: new Date(), // 오늘의 날자
    emotionId: 3, // 오늘의 감정
    content: "", // 일기 내용
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const onSubmitButton = () => {
    useContext(DiaryDispatchContext).onCreate(
      input.createDate,
      input.content,
      input.emotionId,
    );
    setInput({
      createDate: new Date(),
      emotionId: input.emotionId,
      content: "",
    });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜 </h4>

        <input
          type="date"
          name="createDate"
          onChange={onChangeInput}
          value={input.createDate}
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정 </h4>
        <div className="emotion_list_wrapper">
          {/*  반복을 하기 위해서는 반복할 객체가 필요합니다*/}
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => {
                onChangeInput({
                  // 이벤트 객체를 직접 만들어서 전달 ( Emotion Item 컴포넌트는 이벤트 객체를 자동으로 전달하지 않기 때문에 직접 만들어야 합니다 . )
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                });
              }}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId} // input state값과 비교를 해서 선택을 했네 하면 니가 선택했구나 하고 전달을 해주어야 합니다 .
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기 </h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어떤 날이었나요?"
        />
      </section>

      <section className="button_section">
        {/* 페이지 뒤로 가기 기능 구현  */}
        <Button onClick={() => nav(-1)} text={"취소하기"} />

        <Button
          onClick={() => {
            onSubmitButton();
          }}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
