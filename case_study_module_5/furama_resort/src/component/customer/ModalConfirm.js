import React from "react";
import { Modal, Button } from "react-bootstrap";
import { remove } from "./service/CustomerService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAll } from "./service/CustomerService";
export default function ModalConfirm({ showModal, customer, handleHideModal ,setCustomerList}) {
  const navigate = useNavigate();
  const getAllCustomer = async () => {
    const customerList = await getAll();
    setCustomerList(customerList);
  }
  const handleDelete = async () => {
    const response = await remove(customer.id);
    if (response === 200) {
      handleHideModal();
      navigate("/customers");
      getAllCustomer();
      toast.success("Success Deleted");
    }else{
      navigate("/customers")
      toast.warning("Something wrong here!");
    }
  };

  if (!customer) {
    return null;
  }

  return (
    <div>
      <Modal show={showModal} animation={false}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"red"}}>
          {" "}
          Are you sure to delete this customer have name: {customer.name} ?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModal}>
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
