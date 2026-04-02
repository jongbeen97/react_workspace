// 이미지를 불러오는 기능을 별도의 js파일로 구현하여
// 이미지 관리 효율성 높임
// -> 번들 파일

// 경로 주의
import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";

// 불러온 이미지를 반환
export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
