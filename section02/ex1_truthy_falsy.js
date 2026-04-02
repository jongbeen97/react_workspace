// 1. Falsy한 값( 총7개 )
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = "";
let f6 = NaN;
let f7 = 0n; //BigInteger 자료형 : 그래야 계산의 오차범위가 줄어든다.

//2.Truthy 한 값
// -> 7가지 falsy한 값 들을 제외한 나머지 모든 값
let t1 = " ";
let t2 = 123;
let t3 = []; // 비어있는 문자열
let t4 = {};
let t5 = () => {};

//3. 활용 예제
// 매개변수로 객체를 받는 함수 선언 -> 실제 매개변수가 객체가 아닌 경우 발생
// 따라서 조건문을 통해 매개 변수 값이 null 이거나 , undefined가 아님을 확인해야 함.
function printName(person) {
  //   if(!person===undefined&&!person===null){
  //   console.log(person.name);
  // }else{
  //   console.log("이름 없음")
  // }
  if (person.name) {
    console.log("이름없음");
    return;
  }
  console.log(person.name);
}

printName("hi");
printName({ name: "이종빈" });
