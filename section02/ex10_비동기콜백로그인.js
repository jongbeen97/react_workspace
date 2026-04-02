// 로그인 요청 → 서버 응답 기다리는 동안 UI는 계속 반응
// 사용자 정보를 응답 받으면 그때 로그인 완료
//따라서 비동기 처리는 웹이나 앱에서 필수사항입니다

// 로그인 요청 - 서버 통신 필요
function login(userID, userPW, callback) {
  setTimeout(() => {
    console.log("로그인 진행시작!");
    callback(userID, userPW);
  }, 3000);
}

// 사용자 정보 불러오기 - 서버 통신 필요하다
function getUserInfo(userID, userPW) {
  setTimeout(() => {
    //DB에서 전달받은 회원 객체
    const user = {
      userID: "user1",
      userPW: "1234",
    };
    console.log("사용자 정보 불러오기 성공!", userInfo);
    callback(userInfo);
  }, 2000);
}

// 웹 페이지 로그인 상태 출력
function showWelcomeMessage(userInfo, callback) {
  setTimeout(() => {
    const msg = `${userInfo.userID} 님 환영합니다`;
    console.log(msg);
    callback();
  }, 1500);
}

login("user1", "1234", (userID, userPW) => {
  getUserInfo(userID, userPW, (userInfo) => {
    showWelcomeMessage(userInfo, () => {
      console.log("로그인 프로세스 완료");
    });
  });
});
