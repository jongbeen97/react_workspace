//1. 배열 순회
let arr = [1, 2, 3];

//1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("------------------------------------");

//1.2 for of 반복문 사용 : 값 꺼내기
for (let value of arr) {
  console.log(value);
}
console.log("------------------------------------");

//1.3 for in 반복문 : 인덱스 꺼내기
for (let index in arr) {
  console.log(arr[index]);
}

//2. 객체 순회
let person = {
  name: "비니",
  age: 20,
  hobby: "애니감상",
};
console.log("------------------------------------");

//2.1 for of 반복문 : 값 꺼내기
// Object.keys : 객체에서 key 값들만 뽑아서 새로운 배열로 반환
// Object.values : 객체에서 value값들만 뽑아서 새로운 배열로 반환
let keys = Object.key(person); // ["name","age","hobby"]
let values = Object.values(person); // ["비니" , "20" , "애니감상"]

for (let value of values) {
  console.log(value);
}
console.log("------------------------------------");

//2.2 for in 반복문 : 키 꺼내기
for (let key in person) {
  console.log(key, person[key]); // 키 , 벨류
}

//주의 ) for of 는 배열에만 사용 가능
