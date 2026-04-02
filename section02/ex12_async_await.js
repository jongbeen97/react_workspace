// async : 이를 비동기 함수로 만들어주는 거요
// 어떤 작업을 실행할 때 그 작업이 완료되지 않더라도 다음 코드를 실행하는 방식
// 원하는 함수를 비동기 함수로 만들어주는 키워드

// 사용 방법
async function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userID: "user1",
        userPW: "1234",
      });
    }, 1500);
  });
}

console.log(getDate()); // promise 객체 반환

// await : 기다리는 거
// 비동기 함수 작업이 모두 처리 되는 것을 기다리는 키워드
// async 내부에서만 사용가능하며
// promise가 안 좋아 보였던 이유는 콜백 지옥만 해결하는 수준이었다면 ,
// await을 사용하면 then 메서드를 복잡하게 붙일 필요 없음 ( 프로미스 체이닝을 안해도 됨)

async function printDate() {
  const date = await getDate();
  console.log(date);
}

printDate();
