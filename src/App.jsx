import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/NotFound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

// 1. "/" : Home
// 2. "/new" : create a new page
// 3. "/diary" : view the diary page
function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"< Left"} />}
        rightChild={<Button text={"Right >"} />}
      />
      <Button
        text={"123"}
        onClick={() => {
          console.log("clicked 123");
        }}
      />
      <Button
        text={"123"}
        type={"positive"}
        onClick={() => {
          console.log("clicked 123");
        }}
      />
      <Button
        text={"123"}
        type={"negative"}
        onClick={() => {
          console.log("clicked 123");
        }}
      />
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>Move to New Page</button> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
