//1 . 배열의 구조분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
console.log(arr);
console.log(one, two, three);
console.log(four); // 값이 할당이 되지 않을때 ,
// 추가 변수 선언시 값 초기화 가능합니다

//2. 객체의 구조분해 할당
let person = {
  name: "비니",
  age: 20,
  hobby: "애니감상",
};

let {
  age: fakeAge, // 변수 이름을 객체의 key값과 다르게 설정하고 싶을때 : (콜론) 뒤에 원하는 변수명 작성
  hobby,
  name,
  extra = "hello", // 추가 변수 선언시 값 초기화 가능합니다
} = person;

console.log(fakeAge, hobby, name);
console.log(extra);
// 배열을 담을 때는 대괄호를 쓰고 , 하고 배열을 쓰고
// 자바 스크립트 객체는 중괄호 열고 닫고 하면 됨.

//3. 객체 구조분해 할당을 이용하여 함수의 매개변수 전달 방법
// 매개변수로 '객체'를 받으면 구조 분해 할당이 자동발생함 .
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

// func(person.name,person.hobby,person.age,person.extra); 원래는 이렇게 전달해야 하는데 , 밑에 처럼 해도 된다 !!
func(person); // 함수의 매개변수로 구조분해가 성공적으로 된다.
func(arr); // 함수의 매개변수로 구조 분해 불가능 하다
