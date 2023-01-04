import React from "react";
import { client } from "../../../types/client";
import FormClient from "./Form";
import { Modal } from "./ModalClient";

interface props {
  handleModal: () => void;
  currentClient: client | null;
}

const Update = ({ handleModal, currentClient }: props) => {
  return (
    <Modal>
      <div className="close" onClick={handleModal}></div>
      <FormClient client={currentClient} />
    </Modal>
  );
};

export default Update;
