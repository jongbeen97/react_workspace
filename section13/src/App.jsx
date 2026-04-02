import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import { useReducer, createContext, useEffect, useState } from "react";
import { useRef } from "react";

// 임시로 reducer함수 선언
// state에는 data가 저장, action에는 dispatch로 전달한 매개변수(객체)가 저장
function reducer(state, action) {
  // 새로운 스테이트의 값을 저장할 변수 선언
  let nextState;
  switch (action.type) {
    case "INIT":
      return action.data; // 로컬 스토리지에 저장된 값을 그대로 리턴
    case "CREATE":
      nextState = [action.data, ...state];
      break;
    case "UPDATE":
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    case "DELETE":
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    default:
      return state;
  }
  // 웹 스토리지에 nextState값 저장
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

// Context 사용이유 : App컴포넌트 하위에 있는 모든 페이지 컴퍼넌트에서 접근 가능하도록 공급
// 일기 데이터
export const DiaryStateContext = createContext();
// onCreate, onUpdate, onDelete와 같은 함수
export const DiaryDispatchContext = createContext();

function App() {
  // 실제 일기 데이터를 관리하기 위한 상태 처리
  // 일기 항목이 많고, 추가/수정/삭제 등 다양한 기능을 구현해야 할때 useReducer 사용
  // 일기 항목이 적고, 조작이 단순한 경우 useState 사용
  // State는 React 변수에 내부적으로 저장 -> 일회성
  const [data, dispatch] = useReducer(reducer, []);
  // 일기를 웹스토리지에서 가지고 왔는지 여부
  const [isLoading, setIsLoading] = useState(true);

  // 일기의 id를 자동 부여 하기 위한 변수
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    // 웹 스토리지에서 가지고온 데이터가 배열이 아니면 예외처리
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return; // 강제 종료
    }
    // 저장되어 있는 일기 id값중에 가장 높은 값 찾기 -> idRef값을 정해야 되므로(다음 일기 id 정해야함)
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > Number(maxId)) {
        maxId = item.id;
      }
    });
    idRef.current = maxId + 1; // 새일기의 id 지정
    dispatch({ type: "INIT", data: parsedData });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id, // id:id
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
