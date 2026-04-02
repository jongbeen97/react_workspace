const Controller = ({ onClickButton }) => {
  // + 100은 자동적으로 100으로 인식
  // 따라서 + 기호를 숫자 앞에 표시하고 싶은 경우 문자열 처리 필요
  const buttons = [-1, -10, -100, +100, +10, +1];
  return (
    <div>
      {buttons.map((value) => (
        <button key={value} onClick={() => onClickButton(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  );
};

export default Controller;
