import { createContext, useContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiContext = createContext();

export const AiProvider = ({ children }) => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const genKEY = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(genKEY);

  // DB에 저장된 의상 내용 불러와서 제공
  const BASIC_INFO = ``;

  const askAi = async (prompt) => {
    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const customizedPrompt = `너는 친절한 상담원이고, 정보를 바탕으로 답하고 
      정보에 존재하지 않는 내용은 질문에 대한 가장 적절한 대답을  알려줘.
      정보 : ${BASIC_INFO}
      질문 : ${prompt}
      `;
      const result = await model.generateContent(customizedPrompt);
      const response = await result.response;
      setAnswer(response.text());
    } catch (error) {
      setAnswer("에러가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const recommendClothes = async (weatherData) => {
    const prompt = `현재 온도는 ${weatherData.main.temp}도이고 
    날씨는 ${weatherData.weather[0].description}이야. 현재 온도와 날씨에 적절한 옷차림 추천해줘`;
    await askAi(prompt);
  };

  // 자식 컴포넌트에게 전달할 데이터와 함수들
  const value = { answer, isLoading, askAi, setAnswer, recommendClothes };

  return <AiContext.Provider value={value}>{children}</AiContext.Provider>;
};

export const useAi = () => useContext(AiContext);
