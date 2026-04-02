import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { createContext, useReducer } from "react";

// 임시 일기 데이터 생성
const mockData = [
  {
    id: 1, // 각 일기를 구분할 수 있는PK 가 필요한 것입니다. 그래서 쓴 것
    createDate: new Date("2026-03-03").getTime(),
    emotionId: 1, // 저장된 감정 이미지의 번호
    content: "1번 일기 내용",
  },
  {
    id: 2, // 각 일기를 구분할 수 있는PK 가 필요한 것입니다. 그래서 쓴 것
    createDate: new Date("2026-03-27").getTime(),
    emotionId: 2, // 저장된 감정 이미지의 번호
    content: "2번 일기 내용",
  },
  {
    id: 3, // 각 일기를 구분할 수 있는PK 가 필요한 것입니다. 그래서 쓴 것
    createDate: new Date("2026-02-03").getTime(), // 날짜는 숫자로 저장하는 것이 정렬/비교가 쉬움
    // 최신 일기순으로 정렬시 createDate를 기준으로 sort()사용
    emotionId: 3, // 저장된 감정 이미지의 번호
    content: "3번 일기 내용",
  },
  {
    id: 4, // 각 일기를 구분할 수 있는PK 가 필요한 것입니다. 그래서 쓴 것
    createDate: new Date("2026-04-03").getTime(), // 날짜는 숫자로 저장하는 것이 정렬/비교가 쉬움
    // 최신 일기순으로 정렬시 createDate를 기준으로 sort()사용
    emotionId: 4, // 저장된 감정 이미지의 번호
    content: "4번 일기 내용",
  },
];

// 임시로 reducer함수 선언
function reducer(state, action) {
  return state;
}

// Context 사용 이유 : App컴포넌트 하위에 있는 모든 페이지 컴포넌트에서 접근 가능하도록 공급 (provider)
// 일기 데이터 저장
export const DiaryStateContext = createContext();
// onCreate, onUpdate , onDelete와 같은 함수를 저장
export const DiaryDispatchContext = createContext();

function App() {
  // 실제 일기를 관리하기 위한 상태 처리
  // 일기 항목이 많고, 추가 수정 삭제 등 다양한 기능을 구현해야 할 때 , useReducer 사용
  // 일기 항목이 적고 , 조작이 단순한 경우 useState를 사용하면 된다.
  const [data, dispatch] = useReducer(reducer, mockData);

  const onCreate = (createDate, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        createDate,
        content,
        emotionId,
      },
    });
  };

  const onDelete = () => {};

  const onUpdate = () => {};

  const nav = useNavigate();

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <div className="App">
            <Routes>
              {/* Path 속성에 접근 URL 작성해주시고 , element 라는 속성에는 실제로 보여야 할 페이지 컴포넌트 작성해주시면 됩니다.  */}
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
