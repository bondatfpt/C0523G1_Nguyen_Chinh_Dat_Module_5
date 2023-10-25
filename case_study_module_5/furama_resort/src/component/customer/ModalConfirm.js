import React from "react";
import {
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "react-bootstrap";
import { remove } from "./service/CustomerService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function ModalConfirm({
  showModal,
  setShowModal,
  customer,
  setIsDeleted,
  isDeleted,
}) {
  // console.log(isDeleted);
  const navigate = useNavigate();
  const handleDelete = () => {
    remove(customer.id);
    // setIsDeleted(true);
    setShowModal(false);
    navigate("/customers");
    toast.success("Success Deleted");
  };

  return (
    <div>
      <Modal show={showModal} animation={false}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body> Are you sure to delete this customer ? </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
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