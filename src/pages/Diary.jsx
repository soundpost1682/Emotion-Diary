import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>number {params.id}'s diary</div>;
};

export default Diary;
