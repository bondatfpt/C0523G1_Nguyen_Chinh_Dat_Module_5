import React from "react";
import { Modal, Button } from "react-bootstrap";
import { remove } from "../service/ProductService";
export default function ModalConfirm({
  productDelete,
  handleHideModal,
  showModal,
}) {
  const handleDelete = async () => {
    const respone = await remove(productDelete.id); 
    handleHideModal();
  };
  return (
    <div>
      <Modal show={showModal}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModal}>
            CLose
          </Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
