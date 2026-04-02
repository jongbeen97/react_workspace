// 초기 설정이 유지가 되는 경우가 많음
// 1. 상수 객체 : 상수에 저장한 객체를 의미함.
const cat = {
  type: "munchkin",
  name: "치킨",
  color: "brown",
};

// cat = { a: 1 }; // 에러가 난다. : 변하지 않기 때문이다. ( 상수는 ) RunTimeError
// 객체 자체가 아니라 객체의 프로퍼티를 수정하는 것은 문제 없음
// 즉 , 아예 새로운 값을 할당하는 것이 아닌 프로퍼티 추가 , 수정, 삭제와 같은 조작은 얼마든지 가능
cat.age = 3; // 값 추가
cat.color = "beige"; // 값 수정
delete cat.type;

console.log(cat);

//2. 메서드
// 함수와 메서드의 차이 : 혼자 스스로 defined되어서 있는 거 , 메서드는 클래스 안에 선언된 함수
// 값이 함수인 프로퍼티
const dog = {
  name: "초코",
  say() {
    // 메서드 선언 ( 객체 동작 정의시 사용)
    console.log("멍멍");
  },
  type: "치와와",
};

// 메서드 호출 방법
dog.say();
dog["say"]();
