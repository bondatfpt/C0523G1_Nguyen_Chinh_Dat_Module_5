import React from "react";
import {Modal,Button} from "react-bootstrap";
import axios from "axios";
import { remove } from "../service/BookService";

export default function ModalConFirm ({handleShow, showModal, handleClose}) {
  return (
    <div>
      <Modal show={showModal} onHide={handleShow} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
