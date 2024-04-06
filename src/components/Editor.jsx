import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

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

const Editor = () => {
  const emotionId = 3;

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h4>Today is </h4>
        <input type='date' />
      </section>
      <section className='emotion_section'>
        <h4>My emotion today is </h4>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
        <h4>What happened today </h4>
        <textarea placeholder='How was today?' />
      </section>
      <section className='button_section'>
        <Button text={"Cancel"} />
        <Button text={"Done"} type={"positive"} />
      </section>
    </div>
  );
};

export default Editor;
