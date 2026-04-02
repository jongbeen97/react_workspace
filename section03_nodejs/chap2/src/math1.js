// math 모듈 : 숫자 계산 기능을 모아둔 파일
function add(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

//commonJS 방식
//exports라는 프로퍼티의 값으로 객체 저장
//이 객체 안에 외부로 내보내고 싶은 프로퍼티 설정
module.exports = {
  add,
  sub,
};
