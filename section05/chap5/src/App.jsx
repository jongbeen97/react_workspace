import "./App.css";
import Button from "./components/Button.jsx";

function App() {
  const buttonProps = {
    Text: "메일",
    color: "skyblue",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      {/* props는 글자 전달
     children 아이콘,이미지,다른 컴포넌트,html태그 및 다른 컴포넌트 같은 것들도 넣을 수 있기 때문에 
 */}
      <Button>
        <span>♣♣♣</span>
        <span>뭐야</span>
        <span>나?</span>
      </Button>
      <Button text={"카페"} />
      <Button text={"블로그"} color={"pink"} />
      <Button {...buttonProps} />
    </>
  );
}

export default App;
