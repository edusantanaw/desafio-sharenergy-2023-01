import FormClient from "./Form";
import { Modal } from "./ModalClient";

interface props {
  handleModal: () => void;
}

export const NewUserModal = ({ handleModal }: props) => {
     
  return (
    <Modal>
      <div className="close" onClick={handleModal}></div>
      <FormClient />
    </Modal>
  );
};
