import { useApi } from "../../hooks/useApi";
import { loadAllClient } from "../../services/client.service";

const Crud = () => {
  const { data, isError, isLoading } = useApi({
    key: "clients",
    fetching: loadAllClient,
  });
  console.log(data);

  return <div>Crud</div>;
};

export default Crud;
