import "./Main.css";

const Main = () => {
  const user = {
    name: "이종빈",
    isLogin: true,
  };
  // 원래 HTML 에서 클래스는 logout 사용
  // JSX에서는 Javascript와 HTML 을 함께 쓰고 있으므로 자바스크립트 예약어인 class 사용이 불가능하다
  // 그래서 className이렇게 쓰이는 것이다.
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return (
      <div
        style={{
          backgroundColor: "green",
          borderBottom: "5px solid black",
        }}
      >
        로그인
      </div>
    );
  }
};

export default Main;
