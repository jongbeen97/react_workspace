// 사칙 연산자 버튼 가진 컴포넌트
const OperatorButtons = ({ OnCalculate }) => {
  const ops = ["+", "-", "*", "/"];
  return (
    <div>
      {/**사칙 연산 버튼 생성 및 이벤트 연결  */}
      {ops.map((op) => (
        <button key={op} onClick={() => OnCalculate(op)}>
          {op}
        </button>
      ))}
    </div>
  );
};
export default OperatorButtons;
