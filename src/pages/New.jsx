import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={"How was your today?"}
        leftChild={<Button onClick={() => nav(-1)} text={"< back"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
