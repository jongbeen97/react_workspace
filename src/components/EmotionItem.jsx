import { getEmotionImage } from "../utils/get-emotion-image";
import "./EmotionItem.css";

// isSelected : EmotionItem 선택 여부 판별
// onClick : 감정 선택시 클릭이벤트
const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}` : ""}`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};
export default EmotionItem;
