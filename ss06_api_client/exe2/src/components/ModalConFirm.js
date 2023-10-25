import React from "react";
import {Modal,Button} from "react-bootstrap";
import { getAll, remove } from "../service/BookService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {toast} from "react-toastify";
export default function ModalConFirm ({ showModal, handleClose, id,getAll}) {
  const [books, setBooks] = useState();
  const navigate = useNavigate ();
  const handleDelete = () => {
  const response =  remove(id);
    console.log(response);
    handleClose();
    getAll();
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
