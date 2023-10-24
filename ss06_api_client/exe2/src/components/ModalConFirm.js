import React from "react";
import {Modal,Button} from "react-bootstrap";
import axios from "axios";
import { remove } from "../service/BookService";

export default function ModalConFirm ({ showModal, handleClose, id}) {
  const handleDelete = () => {
    remove(id);
  }

  console.log(id);
  return (
    <div>
      <Modal show={showModal} animation={false}>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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
