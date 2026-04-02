import { Children, createContext, useContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const genKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(genKey);

  // DB 에 저장된 의상 내용 불러와서 제공
  const BASIC_INFO = ``;

  const askAi = async (prompt) => {
    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash-lite",
      });
      // 사용자가 입력한 명령의 기본적으로 적용될 추가 설정 삽입
      const cutomizedPrompt = `너는 친절한 상담원이고 정보를 바탕으로 답하고 
      정보에 존재하지 않는 내용은 가장 적절한 대답을 알려줘
      의상은 상체와 하체 알려주고 , 의상추천을 해준 후 , 
      곁들일 아이템들도 추천을 같이 해줘 
      정보 : ${BASIC_INFO}
      질문 : ${prompt}
      `;
      const result = await model.generateContent(cutomizedPrompt);
      const response = await result.response;
      setAnswer(response.text());
    } catch (error) {
      setAnswer("에러가 발생했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  // 자식 컴포넌트에게 전달할 데이터 와 함수들
  const value = { answer, isLoading, askAi, setAnswer };

  return <AiContext.Provider value={value}>{children}</AiContext.Provider>;
};

export const useAi = () => useContext(AiContext);
