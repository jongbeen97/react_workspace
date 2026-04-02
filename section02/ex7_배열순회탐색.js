//5가지 요소 순회 및 탐색 메서드
//1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행 시키는 메서드
let arr1 = [1, 2, 3];

// 콜백 함수 호출 반복 (배열의 요소 갯수 만큼)
// 매개변수 - 요소, 인덱스 , 원본 배열 -> 필요한 변수만 사용 가능하다.
arr1.forEach(function (item, idx, arr) {
  console.log(item, idx, arr);
});

arr1.forEach((item) => {
  console.log(item);
});

// 내가 인덱스 , 원본배열이 필요 없다면 idx,arr 지우면 됨.

let doubledArr = [];

arr1.forEach(function (item) {
  doubledArr.push(item * 1.1);
});
console.log(doubledArr);
// 증권에서는 자바 스크립트로 정수 계산으로 만 해야 한다.

//includes
//배열의 특정요소가 있는지 확인하는 메서드
let isIncluded = arr1.includes(10);
console.log(isIncluded); // 2면 true 10이면 false

// indexOf
// 특정 요소의 인덱스 위치를 찾아서 반환하는 메서드
let arr2 = [2, 2, 2];
let index1 = arr1.indexOf(2);
console.log(index1); // 0 -> 배열의 순서대로 가장 먼저 찾은 인덱스를 반환

let index2 = arr2.indexOf(200);
console.log(index2); // -1 이 나옴 : 존재 하지 않는 값을 의미합니다 .

// indexOf의 경우 객체 타입들이 저장되어 있는 경우 요소를 찾지 못함 .
// 따라서 객체를 찾는 경우 findIndex를 사용해야 합니다
let objectArr = [{ name: "김00" }, { name: "이00" }, { name: "오00" }];
console.log(objectArr.indexOf({ name: "오00" })); // -1
// 안되는 이유는 무엇일까? 참조 값을 기준으로 비교를 하기 때문에 찐으로 같은 것이 아니고 , 다른 객체이다 보니 인덱스 오브가 찾지 못한다.
// 객체는 참조 값을 기준으로 비교 하기 때문에 값을 기준으로 비교할 수 없다.
console.log(objectArr.findIndex((item) => item.name === "오00")); // 2

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스 반환하는 메서드 입니다.
let arr3 = [10, 20, 30];
const findedIndex = arr3.findIndex((item) => item === -999); // -1 존재하지 않는 값
console.log(findedIndex); // -1 존재하지 않는 값

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소를 그대로 반환하는 메서드 입니다.
console.log(objectArr.find((item) => item.name === "오00")); //{name:'오00'}

// ★ 주의사항(람다식)
// 람다식에서  {} => 명시적 반환 , return
// 중괄호가 없으면 자동적으로 리턴이 붙는다. : 암시적 반환
