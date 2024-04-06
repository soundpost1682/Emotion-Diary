import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("lateset");
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };
  const sortedData = getSortedData();
  return (
    <div className='DiaryList'>
      <div className='menu_bar'>
        <select onChange={onChangeSortType}>
          <option value={"latest"}>Recent</option>
          <option value={"oldest"}>Old</option>
        </select>
        <Button
          onClick={() => nav(`/new/`)}
          text={"Write a new diary"}
          type={"positive"}
        />
      </div>
      <div className='list_wrapper'>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
