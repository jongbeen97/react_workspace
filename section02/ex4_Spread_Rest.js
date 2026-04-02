// 1. Spread 연산자
// -> Spread : 흩뿌리다. 펼치다 라는 뜻을 가짐
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
// [4,1,2,3,5,6] 과 같이 arr1을 포함하는 배열 선언
// 스프레드 연산자를 사용하면 됨.
// 스프레드 연산자 ( ... ) : 배열의 요소들을 개별로 풀어 해치는 기능
let arr2 = [4, 1, 2, 3, 5, 6]; // 이런 배열을 만들고 싶음 .
let arr3 = [4, ...arr1, 5, 6];

console.log(arr3);

let obj1 = { name: "이종빈", age: 26 };

let obj2 = {
  ...obj1,
  hobby: "영화감상",
};

console.log(obj2);

// 2. Rest 매개변수
// Rest : "나머지" or "나머지 매개변수"를 의미합니다.
// 전달한 모든 인수들이 "배열 형태"로 저장이 됩니다.
// ...이 매개변수를 정의하는 공간인 소괄호 안에 사용되면 Rest 매개변수라고 부른다.
// ★ Spread 연산자가 아닌 Rest 매개변수 라는 점을 주의 해야 합니다 !! (엄연히 다름)
// ★ Rest매개변수 특징 : 나머지 싹다 저장할게 , 뒤의 매개변수가 올수 없다.
// ★ Rest 매개변수 뒤에는 추가적인 매개변수 선언이 불가하다 !!
// function funcA(one, two, ...args, ㅁㅁㅁㅁ) -> 뒤에 매개변수 안됨 !!

function funcA(one, two, ...args) {
  console.log("one", one);
  console.log("two", two);
  console.log("Rest", args);
}

funcA(1, 2, 3, 4, 5);

funcA(...arr2); // Spread 연산자 사용
