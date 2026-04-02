// 6가지 요소 조작 메서드

// 1.push
// 배열의 맨 뒤에 새로운 요소 추가
let arr = [1, 2, 3];
let newLength = arr.push(5); // push() :  배열의 길이를 반환을 해준다.
console.log(newLength); // 4
console.log(arr); // 1,2,3,5가 출력
const newLength2 = arr.push(4, 5, 6, 7, 8, 9);
console.log(arr); // 1,2,3,4가 출력

//2. pop
// 배열의 맨 뒤에 있는 요소를 제거 하면서 동시에 반환 까지 함.
const poped = arr.pop();
console.log(poped); // 3
console.log(arr); // 1,2,3,5,4,5,6,7,8

//3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환,
const shifted = arr.shift();
console.log(shifted); // 1
console.log(arr); // [1,2,3,5,4,5,6,7,8]

// 4. unshift
//  배열의 맨 앞에 새로운 요소 추가
const unshifted = arr.unshift(1);
console.log(arr); //  1,2

// 참고 사항 ) shift 와 unshift 는 pop과 push보다 느리게 동작을 한다 ( 별로 안쓴다. )

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환 ( 값이 한개여도 )
// 위에 있는 것은 다 원본을 훼손시킴 . 슬라이스를 쓰면 원본의 배열 값 훼손을 막을 수 있다.
let arr2 = [5, 4, 3, 2, 1];
let sliced = arr2.slice(1, 3); // 시작 인덱스 부터 끝 인덱스 전까지
console.log(sliced); // 4,3
let sliced2 = arr2.slice(2); // 끝 값을 생략하면 시작 인덱스 부터 배열의 끝까지
console.log(sliced2); //3,2,1
let sliced3 = arr2.slice(-3); // 배열의 끝부터 3개 자르기
console.log(sliced3); // 3,2,1

//6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr3 = ["a", "b", "c"];
let arr4 = ["가", "나", "다"];

let concatedArr = arr3.concat(arr4);
console.log(concatedArr); // abc가나다 로 나올 것
