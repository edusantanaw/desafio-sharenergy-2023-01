import { client } from "../../../types/client";
import { ClientContainer, ClientList } from "./client.style";
import { AiOutlineEye } from "react-icons/ai";

interface props {
  handleClient: (client: client) => void;
  data: client[] | null;
}

const Clients = ({ handleClient, data }: props) => {
  return (
    <ClientContainer>
      <ClientList>
        {data ? (
          data.map((client, i) => (
            <li
              onClick={() => handleClient(client)}
              className="clients"
              key={i}
            >
              <span>{client.name}</span>
              <span>{client.phone}</span>
              <span>{client.address.city}</span>
              <span id="eye">
                <AiOutlineEye /> infos
              </span>
            </li>
          ))
        ) : (
          <span>Nenhum cliente encontrado!</span>
        )}
      </ClientList>
    </ClientContainer>
  );
};

export default Clients;
