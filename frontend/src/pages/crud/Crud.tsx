import { useApi } from "../../hooks/useApi";
import { loadAllClient } from "../../services/client.service";
import {useState} from 'react'
import { NewUserModal } from "./components/NewUserModal";

const Crud = () => {

  const [newUser, setNewUse] = useState(false)

  const { data, isError, isLoading } = useApi({
    key: "clients",
    fetching: loadAllClient,
  });
  console.log(data);

  function handleNewUser(){
    newUser ? setNewUse(false) : setNewUse(true)
  }

  return (
    <div>
      { newUser && <NewUserModal handleModal={handleNewUser} />}
      <button onClick={handleNewUser}>novo usuario</button>
    </div>
  );
};

export default Crud;
