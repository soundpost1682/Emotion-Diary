import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"How was your today?"}
        leftChild={<Button text={"< back"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
