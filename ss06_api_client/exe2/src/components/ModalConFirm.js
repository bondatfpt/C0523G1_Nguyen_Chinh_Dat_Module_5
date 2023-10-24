import React from "react";
import {Modal,Button} from "react-bootstrap";
import axios from "axios";
import { remove } from "../service/BookService";
import { useNavigate } from "react-router-dom";

export default function ModalConFirm ({ showModal, handleClose, id}) {
  const navigate = useNavigate ();
  const handleDelete = () => {
  const response =  remove(id);
    navigate("/books")
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
