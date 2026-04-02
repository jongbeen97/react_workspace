//1. null 병합 연산자
// 존재 하는 값을 추려내는 기능을 의미를 함.
// null , undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

// ?? : 두 값 중에 null 이나 undefined를 찾아내는 연산 기호 입니다.
let var4 = var1 ?? var2; // var1: undefined 이므로 var 2가 선택이 됨.
console.log(vat4);

let var5 = var1 ?? var3; // var1: undefined 이므로 var 3가 선택이 됨.
console.log(vat5);

let var6 = var2 ?? var3; // 두 값이 null이나 undefined가 아닌 경우 앞의 있는 값을 반환한다.
console.log(vat5);

// 현업 방식 : null 병합 연산자는 실무에서 요긴하게 사용됨.
// 회원 관리 시스템 예시
let userNickName = "lee";
let userID = "been";
// let userNickName; 인 경우 익명의 회원 혹은 아이디가 나와야 함
let displayName = userNickName ?? "익명";
let displayName2 = userNickName ?? userID;
console.log(displayName);
// DB업로드된 파일이 없다. 값을 가져왔더니 Null이 아니면 그 값을 출력하고
// 이 값을 출력해 이걸 물음표 2개로 선택할수 있는 것이다
// 삼항연산자 느낌이 있으면서 다르다.

//typeof 연산자
// 값의 타입을 문자열로 변환하는 기능을 가짐
// 변수를 선언할때 let이라고 한다.UserNickName 에 been을 넣을 수 있다.
// 자바스크립트의 변수에는 다양한 자료형의 값 저장이 가능하다. 지금의 이 변수의 자료형은
// 의미가 없다. 그러면 내가 쓸때 자료형이 의미가 잇다.
let var7 = 1;
var7 = " hello ";
var7 = true;

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자.
// -> 조건식을 이용해서 참 거짓일 때의 값을 다르게 반환.
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝수","홀수"-> 홀수
let res = var8 % 2 == 0 ? "짝수" : "홀수";
console.log(res);
