import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./App.css";
import HOMEPAGE_INFO from "./utils/homepage_data.js";

function App() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  //.env에 저장된 키를 사용하여  gemini 서비스를 현재 프로젝트에 적용
  // vite에서는 환경 변수 의 이름이 반드시 VITE로 시작해야 합니다,. 그래야 VITE이 인식을 할수 있습니다.
  // 붙이지 않으면 인식을 못합니다 (undefined)
  const genKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(genKey);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);

    const newUserChat = { role: "user", content: prompt };
    console.log(genKey);
    setChatHistory([...chatHistory, newUserChat]);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash-lite",
      });
      // 사용자가 입력한 명령의 기본적으로 적용될 추가 설정 삽입
      const cutomizedPrompt = `너는 날씨를 알려주고 날씨에 어울리는 의상을 추천해주고 , 아이템을 추천해주는 라이프 코디네이터야 
      문장 끝은 반드시 "~입니다"로 붙여서 사용해야 하고  
      정보를 바탕으로 사용자 질문에 최대한 정확한 대답을 해주고 
      정보에 없는 내용은 "고객센터로 연락주세요 ." 라고 대답해줘 
      기본정보 : ${HOMEPAGE_INFO}
      
      질문 : ${prompt}
      `;

      const result = await model.generateContent(cutomizedPrompt);
      const response = await result.response;

      const newAIChat = { role: "AI", content: response.text() };
      setChatHistory([...chatHistory, newAIChat]);
      setPrompt(""); // 질문과 대답이 배열에 저장된 후 입력창 초기화
    } catch (error) {
      console.error("오류 발생:", error);
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

      {/* 배열에 있는 대화 내용을 모두 출력  */}
      <div className="chat-section">
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`chat-item ${chat.role === "user" ? "user" : "ai"}`}
          >
            {chat.content}
          </div>
        ))}
      </div>

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
    </div>
  );
}

export default App;
