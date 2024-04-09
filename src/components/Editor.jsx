import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "Very Good",
  },
  {
    emotionId: 2,
    emotionName: "Good",
  },
  {
    emotionId: 3,
    emotionName: "Not Bad",
  },
  {
    emotionId: 4,
    emotionName: "Bad",
  },
  {
    emotionId: 5,
    emotionName: "Terrible",
  },
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(`${value} 00:00:00`);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>Today is </h4>
        <input
          name='createdDate'
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type='date'
        />
      </section>
      <section className='emotion_section'>
        <h4>My emotion today is </h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>What happened today </h4>
        <textarea
          name='content'
          value={input.content}
          onChange={onChangeInput}
          placeholder='How was today?'
        />
      </section>
      <section className='button_section'>
        <Button text={"Cancel"} />
        <Button onClick={onClickSubmitButton} text={"Done"} type={"positive"} />
      </section>
    </div>
  );
};

export default Editor;
