import "./Header.css";

const Header = () => {
  //날짜 형식을 지정하는 options 객체 생성
  const options = {
    year: "numeric", // 필요한 맞큼 숫자로 모두 표시 (ex.2026으로 다 나오는 것)
    month: "2-digit", // 2글자로 나오게 하는 것
    day: "2-digit",
    weekday: "long", // 요일 풀 네임 출력( 수요일 )
  };

  return (
    <div className="Header">
      <h3>오늘은 </h3>
      <h1>{new Date().toLocaleDateString("ko-KR", options)} </h1>
    </div>
  );
};
export default Header;
