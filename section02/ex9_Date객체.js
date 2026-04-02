/**
 * 현업에서 날짜를 관리하는 Tip
 * (1) 가급적이면 표준 포맷을 사용하는 것이 좋다. (YYYY-MM--DD) 사용
 * (2) 복잡한 날짜 계산 직접 구현하기보다 Day.js같은 라이브러리를 사용
 */

// 현재 시간 기준으로 객체 생성
const now = new Date();
console.log(now); // 현재 시간 기준으로 객체 생성된 것

// 특정 날짜 기준 객체 생성 (년,월,일,시,분,초)
// 월(Month)은 0부터 시작을 하기 때문에, 4월을 원하면 3을 기입해야 합니다.
const targetDay = new Date(2026, 3, 4, 10, 0, 0);
console.log(targetDay);

// 날짜 포맷팅 함수
const formatDate = (date) => {
  const year = date.getFullYear();
  // 2026년 03월 03일 이게 관례이다
  // 숫자는 0이 앞에 붙고 6을 쓰면 6만 나온다. 숫자로 저장하면 7만 저장이 된다.
  // 0을 앞에 붙이려면 문자열이어야 한다.
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 3 ->03으로 변경
  // Pad start :  첫번째 자리 수를 0으로 기입하라 , 13일이면 2자리수이기에 0을 넣지 않는데 1자리 수면 0이 들어감
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`; // `` 안에는 동적 변수가 나오게 된다. 문자와 변수를 같이 쓸수 있다
};

console.log("포맷팅 결과:" + formatDate(now));
console.log("포맷팅 결과:" + formatDate(targetDay));
