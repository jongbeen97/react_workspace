// 로그인 요청 - 서버 통신 필요
function login(userID, userPW) {
  return new Promise(() => {
    setTimeout(() => {
      console.log("로그인 진행 시작 !");
      if (userID === "user1" && userPW === "1234") {
        console.log("로그인 성공");
        resolve(userID, userPW);
      } else {
        reject("로그인 실패 아이디랑 비밀번호 일치하지 않습니다");
      }
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
//전체 로그인 비동기 작업 흐름 제어 함수
async function loginProcess(params) {
  try {
    const { userID, userPW } = await login("user1", "1234");
    const userInfo = await getUserInfo(userID, userPW);
    await showWelcomeMessage(userInfo);
    console.log("로그인 프로세스 완요.");
  } catch (error) {
    console.log("로그인 문제 발생 ", error);
  }
}

loginProcess();
