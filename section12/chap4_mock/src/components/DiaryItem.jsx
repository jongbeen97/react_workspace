import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../utils/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = ({ id, createDate, emotionId, content }) => {
  const nav = useNavigate();
  const goDiaryPage = () => {
    nav(`/diary/${id}`); // nav(`diary"/" +1 ) 이렇게 해도 되지만,
  };
  const goEditPage = () => {
    nav(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={goDiaryPage}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} alt="emotion" />
      </div>
      <div className="info_section">
        <div onClick={goDiaryPage} className="created_date">
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div onClick={goEditPage} className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};
export default DiaryItem;
