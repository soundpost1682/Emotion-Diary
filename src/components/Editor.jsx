import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

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
        <Button onClick={() => nav(-1)} text={"Cancel"} />
        <Button onClick={onClickSubmitButton} text={"Done"} type={"positive"} />
      </section>
    </div>
  );
};

export default Editor;
