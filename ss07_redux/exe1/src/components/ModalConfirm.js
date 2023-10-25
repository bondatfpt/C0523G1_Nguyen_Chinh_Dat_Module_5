import React from "react";
import { Modal, Button } from "react-bootstrap";
import { getAll, remove } from "../reduxs/middlewares/UserMiddleware";
import { useDispatch, useSelector } from "react-redux";

export default function ModalConfirm({ showModal, handleHideModal, idDelete }) {
  console.log(idDelete);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(remove(idDelete));
    handleHideModal();
  };
  return (
    <div>
      <Modal show={showModal} animation={false}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this user ?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="danger"onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>

      {/* <Modal show={showModal} animation={false}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure to delete this customer ? </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"onClick={handleHideModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}
