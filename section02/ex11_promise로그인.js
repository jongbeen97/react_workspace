// 로그인 요청 - 서버 통신 필요
function login(userID, userPW) {
  return new Promise(() => {
    setTimeout(() => {
      console.log("로그인 진행 시작 !");
      resolve(userID, userPW);
    }, 3000);
  });
}
// 사용자 정보 불러오기 - 서버 통신 필요하다
function getUserInfo(userID, userPW) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //DB에서 전달받은 회원 객체
      const userInfo = {
        userID: "user1",
        userPW: "1234",
      };
      console.log("사용자 정보 불러오기 성공 ");
      resolve(userInfo);
    }, 2000);
  });
}
// 웹 페이지 로그인 상태 출력
function showWelcomeMessage(userInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const msg = `${userInfo.userID}님 환영합니다!`;
      console.log(msg);
      resolve();
    }, 1500);
  });
}

login("user1", "1234")
  .then((userID, userPW) => {
    return getUserInfo(userID, userPW);
  })
  .then((userInfo) => {
    return showWelcomeMessage(userInfo);
  })
  .then(() => {
    console.log("로그인 프로세스 완료.");
  });
