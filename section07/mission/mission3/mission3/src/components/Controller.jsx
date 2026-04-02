// App.js에서 함수 두 개를 내려준다고 가정했을 때의 수정안
const Controller = ({ onStart, onStop }) => {
  return (
    <div>
      <button
        onClick={() => {
          onStart(); // 타이머 시작 요청
        }}
      >
        시작
      </button>
      <button
        onClick={() => {
          onStop(); // 타이머 정지 요청
        }}
      >
        정지
      </button>
    </div>
  );
};

export default Controller;
