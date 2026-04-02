// 객체 생성 방법
let obj1 = new Object(); // 객체 생성자 이용하여 객체 생성
let obj2 = {}; // 객체 리터럴 이용(주로 이용)

//객체 프로퍼티(속성)
let person = {
  name: "dlwhdqls",
  age: 30,
  hobby: ["잠", "소설감상"], // 다시 한번 JSON을 속성값으로 쓸 수 있음.
  job: "Developer",
  10: 20,
  "like cat": true, // 공백을 사용할시 문자열을 사용하기
  family: { mom: "박", dad: "이" },
};

// 3. 객체 프로퍼티 사용법
// 3-1 특정 프로퍼티 접근 방식 ( 점 표기법을 사용)
// 점 표기법과 대괄호 표기법
let name = person.name;
console.log(name); // 타입 스크립트와 관련된 경고 사항 ( 네임 이미 있으니 너가 쓰지 마 라는 것이다. )
age = person["age"];
console.log(age);
age = person["age2"]; // 자바 스크립트 객체에 존재하지 않는 key 사용시 에러 X ->undefined 반환
console.log(age);

// 3-2 새로운 프로퍼티 추가하는 방법
// 점 표기법과 괄호 표기법 둘다 사용방법
person.favoriteFood = "떡볶이";
person["favorite food"] = "족발";

console.log(person);

// 3-3 프로퍼티 수정
person.job = "Educator";
person[age] = 20;

// 3-4 프로퍼티 삭제
delete person[10]; // 문자열 , 숫자 같은 라벨링이 아닌 경우 점 표기법 사용이 불가능하다.
delete person.family;

console.log(person);

// 3-5 프로퍼티 존재 유무 확인 (in 연산자 )
let result1 = name in person;
console.log(result1);
result1 = "name" in person;
console.log(result1);

let result2 = "like cat" in person;
console.log(result2);
let result3 = "like" in person;
console.log(result3);
