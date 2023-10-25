import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { remove } from "./service/ContractService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getAll } from "./service/ContractService";

export default function ModalConfirm({
  showModal,
  handleHideModal,
  contractDelete,
  setContractList
}) {
  const navigate = useNavigate();
  const getAllContract = async () =>{
     const contracts = await getAll();
     setContractList(contracts);
  }


  const handleRemove = async () => {
    const response = await remove(contractDelete.id);
    if (response === 200) {
      console.log("ContractDelete sau khi delete !" + contractDelete);
      navigate("/contracts");
      getAllContract();
      toast.success("Success Deleted");
      handleHideModal();
    } else {
      navigate("/contracts");
      toast.warning("Some thing wrong here!");
    }
  };
  if (!contractDelete ) {
    return null;
  }
  return (
    <div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title >Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"red"}}>
          Are you sure to delete this contract have contract code:{" "}
          {contractDelete.contractCode} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
