import React from "react";
import {Modal,Button} from "react-bootstrap";
import axios from "axios";
import { remove } from "../service/BookService";

export default function ModalConFirm ({handleShow, showModal,handleDelete}) {
  const handleDeleteItem = (id) => {
    handleDelete(id);
    handleShow();
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleShow} animation={false}>
        <Modal.Header closeButton>
          <input id="idDelete"></input>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDeleteItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
