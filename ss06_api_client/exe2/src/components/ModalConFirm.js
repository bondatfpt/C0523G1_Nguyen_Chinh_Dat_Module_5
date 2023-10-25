import React from "react";
import {Modal,Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { remove } from "../service/BookService";

export default function ModalConFirm ({ showModal, handleClose, id}) {
  const navigate = useNavigate ();
  const handleDelete = () => {
  const response =  remove(id);
    console.log(response);
    handleClose();
    navigate("/");
    toast.success("Success Deleted")
}
  return (
    <div>
      <Modal show={showModal} animation={false}>
        <Modal.Header >
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this book?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
