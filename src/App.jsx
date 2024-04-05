import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/NotFound";

const mocData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1st detail",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2nd detail",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}
const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mocData);
  const idRef = useRef(3);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "Hello");
        }}
      >
        test 1
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, "Edited diary");
        }}
      >
        test 02
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        test 03
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={(onCreate, onUpdate, onDelete)}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
