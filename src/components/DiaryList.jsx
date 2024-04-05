import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  return (
    <div className='DiaryList'>
      <div className='menu_bar'>
        <select>
          <option value={"latest"}>Recent</option>
          <option value={"oldest"}>Old</option>
        </select>
        <Button text={"Write a new diary"} type={"positive"} />
      </div>
      <div className='list_wrapper'>
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
