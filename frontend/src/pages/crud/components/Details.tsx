import { useState } from "react";
import { deleteClient } from "../../../services/client.service";
import { client } from "../../../types/client";
import { DetailsContainer } from "./details.styles";

interface props {
  client: client;
  handleModal: () => void;
}

const Details = ({ client, handleModal }: props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  async function handleDeleteClient() {
    if (client._id) deleteClient(client._id);
  }

  return (
    <DetailsContainer>
      {showDeleteModal && (
        <div className="delete_modal">
          <p>Realmente deseja remover esse cliente?</p>
          <div className="choose_buttons">
            <button onClick={handleDeleteClient}>Sim</button>
            <button onClick={()=> setShowDeleteModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
      <div className="client_details">
        <h3>Nome: {client.name}</h3>
        <span>id: {client._id}</span>
        <span>email: {client.email}</span>
      </div>
      <div className="buttons">
        <button onClick={handleModal}>Atualizar</button>
        <button onClick={()=> setShowDeleteModal(true)}>Remover</button>
      </div>
    </DetailsContainer>
  );
};

export default Details;
