import { useState } from "react";
import { useAi } from "./AiContext.jsx";
import "./App.css";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const { answer, isLoading, askAi, setAnswer } = useAi();

  const getWeather = async () => {
    if (!city.trim()) return;
    const WEATHER_API = import.meta.env.VITE_WEATHER_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}&units=metric&lang=kr`; // 문자열의 변수값이 여러개 대입이 되어 있다 보니 백틱을 사용을 한 것이다.

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("날씨 정보 가져오기 실패", error);
      alert("도시 이름을 확인 후 다시 요청해주세요.");
      setWeather(null);
    }
  };

  const recommendCloths = async (weatherData) => {
    const prompt = `현재 온도는 ${weatherData.main.temp}이고 날씨는 ${weatherData.weather[0].description}입니다. 현재 날씨의 적절한 옷 차림 추천 해줘 `;
    await askAi(prompt);
  };
  const value = { answer, isLoading, askAi, setAnswer, recommendCloths };

  return (
    <div className="container">
      {/* 날씨 조회 */}
      <div className="input-section">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="도시명 입력"
        />
        <button onClick={getWeather}>날씨 조회</button>
      </div>
      {/* 날씨정보를 LLM에 넘겨서 옷 추천을 받는 이벤트 처리 */}
      {weather && (
        <div className="result-section weather-card">
          <button
            className="recommend-btn"
            onClick={() => {
              recommendCloths(weather);
            }}
            disabled={isLoading}
          >
            {isLoading ? "추천중" : "추천 받기"}
          </button>
        </div>
      )}
      ;{/* 추천의상 출력 영역 */}
      {answer && (
        <div className="result-section-ai-result">
          <h4>코디제안</h4>
          <p className="result-text">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
