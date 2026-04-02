// 결과
const ResultBox = ({ result }) => {
  return (
    <div>
      <h2>결과 : {result !== null ? result : "아직 계산 결과가 없습니다."}</h2>
    </div>
  );
};
export default ResultBox;
