import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // 사용자가 입력한 도시 이름을 관리를 해주어야 함
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); // 날씨 데이터를 저장할 객체 관리 -> 아무것도 담기지 않은 객체 초기값은 null 이다 .
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async () => {
    if (!city.trim()) return;
    setIsLoading(true);
    // 날씨 정보 API url 주소 등록
    const WEATHER_API = import.meta.env.VITE_WEATHER_API;

    // units=metric&lang=kr : 섭씨 온도를 설정하는 것.
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}&units=metric&lang=kr`; // 문자열의 변수값이 여러개 대입이 되어 있다 보니 백틱을 사용을 한 것이다.

    // Axios (Ajax 상휘호환 ) : 날씨 요청
    // Axios 가 자동으로 JSON으로 반환을 해준다.
    // fetch보다 이걸 왜 사용 : 에러가 안나오거나 에러가 뜨는 경우가 많은데 ,
    // 패치 : 자동 에러 처리가 안됨 ( 캐치를 만들때 캐치로 404,501에러가 캐치문으로 이동하지 않는다. ) 그래서 자동으로 캐치로 이동을 안함
    // 액시오스 : 캐치로 이동함. 여러 기능 추가로 구현을 해야 한다면 액시오스 쓰는게 훨신 낫다.
    // 직관적으로 생각해보면 , 다양한 기능 추가 기능이 있다. ( 요청을 도중에 취소 하거나, 아니면 몇초 뒤에 나오도록 타임 아웃 지정을 해주는 등 )
    // 이런 추가 기능이 가능하다
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("날씨 정보 가져오기 실패", error);
      alert("도시 이름을 확인 후 다시 요청해주세요.");
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  //fetch 방식 : JSON으로 변동을 해주어야 한다.
  /*try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      setWeather(data);
    } catch (error) {
      console.error("날씨 정보 가져오기 실패", error);
      alert("도시 이름을 확인 후 다시 요청해주세요.");
      setWeather(null);
    }*/

  return (
    <div className="container">
      <header className="header">
        <h2>날씨 정보</h2>
        <p>도시 이름을 입력하면 해당 지역의 날씨 정보 알림</p>
      </header>
      <div className="input-section">
        <input
          className="prompt-area"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="도시 이름을 영문으로 입력해주세요(예 : Seoul,London,Tokyo) "
        />
        <button
          className="send-button"
          disabled={isLoading}
          onClick={getWeather}
        >
          {isLoading ? "날씨조회중..." : "날씨 조회하기"}
        </button>
      </div>
      {/* 날시 정보가 있을때만 보여주는 결과 창 */}
      {weather && (
        <div className="result-section">
          <h3>{weather.name} 의 날씨 정보</h3>
          <div className="weather_info">
            {/* 날씨 아이콘 불러오기 */}
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />
            <p>날씨 : {weather.weather[0].description}</p>
            <p>온도 : {weather.main.temp}°C</p>
          </div>

          <div className="details">
            <p>체감온도 : {weather.main.feels_like}°C</p>
            <p>습도 : {weather.main.humidity}%</p>
            <p>풍속 : {weather.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
