import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentDiaryItem) {
      window.alert("There's no diary");
      nav("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  const onClickDelete = () => {
    if (window.confirm("Delete this diary? There's no way to restoration.")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };
  const onSubmit = (input) => {
    if (window.confirm("Modify this diary?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"Edit the diary"}
        leftChild={<Button onClick={() => nav(-1)} text={"< Back"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"Delete"} type={"negative"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
