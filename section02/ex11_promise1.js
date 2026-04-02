// Promise 객체 생성
// 비동기 작업을 감싸기 위해서 생성을 함 ! 비동기 작업을 인수로 넘겨주어야 함.
// 이때 생성자의 인수로는 비동기 작업을 실제로 진행할 콜백 함수 전달 .
// 이 콜백 함수 내부에서 실행될 비동기 작업 코드 작성을 하게 되면
// Promise 객체가 생성됨과 동시에 자동으로 콜백 함수 호출 하여 비동기 작업 실행 처리

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업
//   setTimeout(() => {
//     console.log("Hi");
//   }, 2000);
// });

// console.log(promise);

const promise = new Promise((resolve, reject) => {
  // 비동기 작업
  setTimeout(() => {
    console.log("Hi");
    // resolve("성공");
    reject("실패한 이유...");
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);
