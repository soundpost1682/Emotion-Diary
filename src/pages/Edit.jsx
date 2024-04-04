import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  return <div>no {params.id}'s diary</div>;
};

export default Edit;
