function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}
console.log(add10(10));
console.log(add10("hi"));
add10(10);

add10(10)
  //then : 메서드 : 그 후에 Promise 반환 상태에 따라 then과 catch 연결이 가능합니다.
  // 이렇게 연결해서 사용하는 코드를 promise chaining 이라고 표현된다.
  .then((result) => {
    console.log(result); // 20
    return add10(result);
  })
  .then((result) => {
    console.log(result); //30
    // return add10(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  // 마지막으로 비동기 작업 실패 상황을 고려하여 Error를 출력하도록 처리
  .catch((error) => {
    console.log(error);
  });

// promise 는 어디에 사용하는가?
// 자바스크립트에서 가장 중요한 개념 중 하나
// 예를 들어 API 호출 ( 줄수도 있고 안 줄 수 있다. 성공 할수 있고 실패할 수 있다. ) 혹은 다른 서버와 통신 에서 활용
