// math 모듈 : 숫자 계산 기능을 모아둔 파일
// commonJS 보다 훨신 최신식으로 동작하는 ES Modules 시스템 방식

export function add(n1, n2) {
  return n1 + n2;
}

export function sub(n1, n2) {
  return n1 - n2;
}

// 하나의 모듈에서 단 하나의 기본값 설정 가능 ~!!
// 기본값으로 설정하면 함수의 이름을 변경이 가능하다
export default function mul(n1, n2) {
  return n1 * n2;
}
