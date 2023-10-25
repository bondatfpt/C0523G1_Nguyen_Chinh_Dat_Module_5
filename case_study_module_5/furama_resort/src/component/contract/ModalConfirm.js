import React from "react";
import { Modal, Button } from "react-bootstrap";
import { remove } from "./service/ContractService";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ModalConfirm({
  showModal,
  handleHideModal,
  contractDelete,
}) {
    const navigate = useNavigate();
  const handleRemove = async () => {
    const response = await remove(contractDelete.id);
    if(response === 200){
        navigate("/contracts");
        toast.success("Success Deleted");
        handleHideModal();
    }else{
        navigate("/contracts");
        toast.warning("Some thing wrong here!");
    }
  };
  if (!contractDelete){
    return null;
  }
  return (
    <div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this contract have contract code:{" "}
          {contractDelete.contractCode}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemove}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
