// 변수 원시 타입 ( 기초 타입 )

// 1. number type
// 존재할 수 있는 모든 숫자 값을 포함한다.
// 기본적으로 사칙 연산 등을 지원
// var vs let ( var는 호이스팅이 일어난다 , 아래 변수를 선언을 해도 위에서 변수를 a:100 이런 것을 100번째 줄에 씀 , 첫번째 줄에서 printa 라면 a라는 변수 인식 )
// 일반적으로 var는 옛날 , let는 최신 : let를 쓰는 것이 좋다.
let num1 = 27;
let num2 = 3.14;
let num3 = -27;

let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대
let nan = NaN; // Not a Number : 수치 연산 실패시 반환되는 값

//2. String
//무조건  "" 로 감싸야 함. ( 더블 쿼테이션 ) '' (싱글 쿼테이션)으로 감싸야 한다.
let myName = "이종빈";
let myLocation = "구로구";
// 사실 JS는 엔터가 문장의 종료이기에 안 써주어도 문제는 안되지만, 모든 코드에는 세미콜론 쓰는게 관례

//3. backtick ( ` ) : 함수이다. `` 는 함수를 의미한다. 변수 값을 동적으로 넣을 수 있는 따음표
// 템플릿 리터럴(기호) 문법
console.log(`${myName}의 집은 ${myLocation}에 있다.`);

// Boolean Type : 상태값을 저장할 때
let isHuman = true;
let isCat = false;

// 4. Null Type ( 값이 존재하지 않는다. )
// 무조건 개발자가 직접 초기화 해야 함 .
let empty = null;

// undefined Type
// 변수를 초기화 하지 않고 선언만 할 경우 자동 부여
let none;
