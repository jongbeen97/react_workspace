// 1. 콜백함수 : 자신이 아닌 다른 함수에 파라미터로 전달되는 함수
// 저라는 사람이 있는데 첫인상, 수업, 마지막인사 이렇게 있다고 해보자
// 제가 언제 여러분에게 마지막 이사를 해야 할까? 수업이 끝나면 , 끝나지 않으면 마지막인사를 할수 없다 .
// 수업의 기능이 끝나야 마지막 인사를 하는 것이다.
// 당장 실행되는 것이 아니라 나중에는 무조건 실행 되어야 하는 함수 ( 이것을 콜백 함수라고 한다. 나중에 실행되어야 하는 함수를 의미 )
// 원하는 타이밍에 실행 시킬 수 있다. 수업이 끝난 이후에
// 특정한 함수를 반복적으로 호출할 때 사용

function main() {
  console.log("음식 냠냠 ");
} // 이렇게 하는 것이 일반적이다.

// main(()=>{
//   console.log("음식 냠냠")
// })

function photographing(value) {
  console.log("사진 찍기");
  value();
}

photographing(main);

//2. 콜백 함수 활용 (★ 자주 사용!! )
function repeat(cnt, callback) {
  for (let idx = 0; idx < cnt; idx++) {
    callback(idx); // 콜백 함수 호출
  }
}

repeat(5, (idx) => {
  console.log(idx);
});
repeat(10, (idx) => {
  console.log(idx * 2);
});
repeat(20, (idx) => {
  console.log(idx * 3);
});
