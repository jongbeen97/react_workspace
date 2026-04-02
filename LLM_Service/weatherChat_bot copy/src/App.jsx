import { useAi } from "./AiContext";
import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const { answer, isLoading, recommendClothes } = useAi();

  // API를 이용하여 날씨 정보 가져오기
  const getWeather = async () => {
    if (!city.trim()) return;
    const WEATHER_API = import.meta.env.VITE_WEATHER_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}&units=metric&lang=kr`;

    try {
      const response = await axios.get(url); // JSON 형태로 반환
      setWeather(response.data);
    } catch (error) {
      console.error("날씨 정보 가져오기 실패", error);
      alert("도시 이름 확인 후 다시 요청해주세요.");
      setWeather(null);
    }
  };

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

      {weather && (
        <div className="result-section wether-card">
          {/* 날씨 정보를 LLM에 넘겨서 옷 추천 받는 이벤트 처리 */}
          <button
            className="recommend-btn"
            onClick={() => {
              recommendClothes(weather);
            }}
            disabled={isLoading}
          >
            {isLoading ? "옷 추천 중..." : "옷 추천 받기"}
          </button>
        </div>
      )}
      {/* 추천 의상 출력 영역 */}
      {answer && (
        <div className="result-section ai-result">
          <h4>코디 제안</h4>
          <p className="result-text">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
