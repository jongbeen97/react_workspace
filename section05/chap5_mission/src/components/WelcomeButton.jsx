const WelcomeButton = ({ text }) => {
  const onClickButton = (text) => {
    console.log(`사용자 이름 : ${text}`);
    alert(`${text}님의 정보를 콘솔에 출력했습니다`);
  };
  return (
    <button onClick={onClickButton} style={{ backgroundColor: "gold" }}>
      {text} 정보출력
    </button>
  );
};

export default WelcomeButton;
