// 두개의 숫자 입력 창을 보여주는 역할
const InputBox = ({ num1, setNum1, num2, setNum2, ref1, ref2 }) => {
  return (
    <div>
      <input
        type="number"
        ref={ref1} // ref값을 주어서 나중에 입력을 안할시 여기로 들어올 수 있도록 챙겨줌 .
        value={num1} // num1 상태를 사용자의 입력(input) 값으로 제어
        onChange={(e) => setNum1(e.target.value)}
        placeholder="첫번째 숫자"
      />
      <input
        type="number"
        ref={ref2}
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="두번째 숫자"
      />
    </div>
  );
};

export default InputBox;
