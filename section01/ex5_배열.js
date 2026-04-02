// 1. 배열 생성
let arrA = new Array();
let arrB = []; // 배열 리터럴 ( 대부분 사용 : 문법 간결 )

// 2. 배열 프로퍼티
// 어떤 타입이든 저장이 가능하고 길이의 한계도 존재하지 않음.
let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 배열 요소 접근 : 인덱스 사용(인덱싱)
// 인덱스 사용한다 라고 해서 인덱싱

let item1 = arrC[0]; // 1
let item2 = arrC[1]; // 2
let itml3 = arrC[-1]; // []->undefiend ( 사실상 나오지 않는다. )

console.log(item1, item2, item3);

// 4. 배열 특정 요소 수정
arrC[0] = "hi";
console.log(arrC);
