import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./App.css";
import HOMEPAGE_INFO from "./utils/homepage_data.js";

function App() {
  // const Basic_Info = createContext();
  // 사용자가 입력창에 쓰는 글자 관리 하는 상태 하나 만들어야 함
  // prompt : 명령
  const [prompt, setPrompt] = useState("");
  // 사용자의 답을 관리하는 상태를 하나 만들어야 함 .
  // answer : AI 가 도출한 결과 글자를 관리하는 상태
  const [answer, setAnswer] = useState("");
  // AI 가 대답을 생성중인지 상태 관리
  const [isLoading, setIsLoading] = useState(false);

  // 미션 : 이전 대화 내용도 볼 수 있도록 만들어보기 ( 리액트 )
  const [chatHistory, setChatHistory] = useState([
    {
      role: "user",
      parts: [{ text: "너의 이름은 '날씨 추천 봇'이야. " + HOMEPAGE_INFO }],
    },
    {
      role: "model",
      parts: [
        {
          text: "알겠습니다! 날씨에 대해 무엇이든 물어보세요! 성실히 답변드리겟습니다",
        },
      ],
    },
  ]);

  // API 키 설정(배포시에는 반드시 비공개 -> .env 권장 )
  // 재미나이 서비스를 현재 프로젝트에 적용
  //  1. 재미나이 AI 사용을 위해 key 값을 통해 AI 객체 만들기 생성
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAavYo-PfGDglkScBvbgwQvkkpUCaSa96E",
  );

  // Ai 에게 질문하기 기능 구현을 하기 위해
  const handleSend = async () => {
    // 입력 프롬프트 값이 비어 있으면 이벤트를 실행하지 않는다.
    if (!prompt.trim()) return;
    setIsLoading(true);
    //2. 모델 설정( 빠른 응답을 위해 )
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash-lite",
      });

      // 사용자가 입력한 명령의 기본적으로 적용될 추가 설정 삽입
      const cutomizedPrompt = `너는 날씨를 알려주고 추천을 해주는 날씨 라이프 코디네이터야 
      문장 끝은 반드시 "~입니다"로 붙여서 사용해야 한다. 
      정보를 바탕으로 사용자 질문에 최대한 정확한 대답을 해주고 
      정보에 없는 내용은 고객센터로 연락주세요 . 라고 대답해줘 
      질문에 요점을 정확히 파악하고 답변을 성실히 생성해
      기본정보 : ${HOMEPAGE_INFO}
      
      질문 : ${prompt}
      `;

      // 구글 재미나이에게 프롬프트를 전달하고 그에 해당하는  대답을 할때까지 기다리도록 설정
      const result = await model.generateContent(cutomizedPrompt);
      const response = await result.response;

      // 대화 이력 업데이트
      setChatHistory((prev) => [
        ...prev,
        { role: "user", parts: [{ text: prompt }] },
        { role: "model", parts: [{ text: response.text() }] },
      ]);

      // response 갑을 화면에 보여주기 위해 상태값 변경
      setAnswer(response.text());
    } catch (error) {
      // 답변 형성에 에러 발생시 콘솔과 사용자에게 에러 출력
      console.error("오류 발생:", error);
      setAnswer("죄송합니다 구글 서버와 연결이 원활하지 않습니다");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h2>AI 챗봇 </h2>
      </header>
      {/* 사용자가 질문을 입력하는 section */}
      <div className="input-section">
        <textarea
          className="prompt-area"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder=":::무엇이든 물어보세요:::"
        ></textarea>
        <button
          className="send-button"
          onClick={handleSend}
          disabled={isLoading} //AI 가 답변 생성중인 경우 버튼 클릭 비활성화
        >
          {isLoading ? "답변 생성중..." : "질문하기"}
        </button>
      </div>

      {/* 사용자의 질문의 답변을 표시하는 결과 section */}
      <div className="result-section">
        <h4>AI 답변</h4>
        <div className="result-text">{answer}</div>
      </div>
      <div className="chat-window">
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.role}>
            <strong>{chat.role === "user" ? "나" : "AI"}:</strong>{" "}
            {chat.parts[0].text}
          </div>
        ))}
        ;
        <br />
      </div>
    </div>
  );
}

export default App;
