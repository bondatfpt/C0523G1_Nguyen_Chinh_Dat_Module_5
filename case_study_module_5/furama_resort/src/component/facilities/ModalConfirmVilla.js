import React from "react";
import { Modal, Button } from "react-bootstrap";
import { remove, getAll } from "./service/VillaService";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ModalConfirmVilla({
  villaDelete,
  handleHideModalVilla,
  showModalVilla,
  setVillaList,
}) {
  const fetchData = async () => {
    const respone = await getAll();
    setVillaList(respone);
  };

  const handleDelete = async () => {
    const respone = await remove(villaDelete.id);
    toast.success("Success Deleted");
    handleHideModalVilla();
    fetchData();
  };
  console.log(villaDelete);
  if (!villaDelete) {
    return null;
  }
  return (
    <div>
      <Modal show={showModalVilla}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this villa have name: {villaDelete.name}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModalVilla}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
