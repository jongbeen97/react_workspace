function add(a, b, callback) {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 2000);
}

add(1, 2, (res) => {
  console.log("add함수의 결과 : " + res);
});

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// JS에는 비동기적으로 작동하는 특수한 함수들이 내장되어있다
// setTimeout(callback,ms)
// ms만큼 대기한 후 callback 함수 호출 후 바로 다음 라인으로 코드를 넘어감(기다리지 않는다)

//setTimeout()에서 기다리는 동작과 for문이 동시에 진행되는 것 처럼 보인다.
//타이머가 도는 동안 console.log(i) 반복이 진행이 되기 때문이다.
//자바스크립트 엔진은 싱글 쓰레드
//어떻게 동시에 일을 처리할 수 있을까?
