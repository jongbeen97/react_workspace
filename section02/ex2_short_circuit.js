// 단락평가 ( short_circuit)
// : 앞의 값만으로 전체 결과가 정해진다면 뒤의 연산 생략
// || 연산 : 앞의 값이 truthy한 값이면 그 값 자체를 반환합니다. 그렇지 않으면 뒤의 값을 반환
// && 연산 : 앞의 값이 falsy면 그 갑 자체를 반환하고 그렇지 않으면 뒤의 값을 반환

function returnFalse() {
  console.log("False 함수");
  return undefined; // falsy한 값
}

function returnTrue() {
  console.log("True함수");
  return 10; // truthy한 값
}

console.log(returnTrue() || returnFalse()); // 10이 나온다
console.log(returnFalse() || returnTrue()); // 10이 나온다.
console.log(returnFalse() && returnTrue()); // undefined
console.log(returnTrue() && returnFalse()); // undefined

// 3. 활용예제
// ex1에서 if 문으로 조건 작성 부분이 필요 없음.
function printName(person) {
  const name = person && person.name;
  console.log(name || "이름이 없습니다.");
}

printName();
printName({ name: "이종빈" });
