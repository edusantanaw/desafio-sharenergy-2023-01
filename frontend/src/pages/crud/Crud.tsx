
import {useState} from 'react'
import { useApi } from '../../hooks/useApi';
import { loadAllClient } from '../../services/client.service';
import { client } from '../../types/client';
import Clients from './components/Clients';
import Details from './components/Details';
import { NewUserModal } from "./components/NewUserModal";
import Update from './components/UpdateClient';
import { Button, CrudContainer } from './crud.styles';

const Crud = () => {
  const [newUser, setNewUse] = useState(false)
  const [updateClient, setUpdateClient] = useState(false)
  const [currentClient, setCurrentClient] = useState<client | null>(null)

  const { data, isError, isLoading } = useApi({
    key: "clients",
    fetching: loadAllClient,
  });


  function handleNewUser(){
    newUser ? setNewUse(false) : setNewUse(true)
  }

  function handleCurrentClient(client: client){
    console.log(client)
    setCurrentClient(client)
  }

  function handleUpdateClientModal(){
    updateClient ? setUpdateClient(false): setUpdateClient(true)
  }

  return (
    <CrudContainer>
      { newUser && <NewUserModal handleModal={handleNewUser} />}
      {updateClient && <Update currentClient={currentClient}  handleModal={handleUpdateClientModal} />}
     <div className='header'>
        <h2>Listagem de clientes</h2>
        <Button onClick={handleNewUser}>novo usuario</Button>
     </div>
      <div className="content">
      <Clients data={data as client[] | null} handleClient = {handleCurrentClient} />
      {currentClient && <Details handleModal={handleUpdateClientModal}  client={currentClient } />}
      </div>
    </CrudContainer>
  );
};

export default Crud;
