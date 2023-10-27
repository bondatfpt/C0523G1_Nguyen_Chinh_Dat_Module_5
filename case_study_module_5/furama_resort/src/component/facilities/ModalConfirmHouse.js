import React from "react";
import { Modal, Button } from "react-bootstrap";
import { remove } from "./service/HouseService";
import { getAll } from "./service/HouseService";
import{toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ModalConfirmHouse({
  showModalHouse,
  handleHideModalHouse,
  houseDelete,
  setHouseList,
}) {
    const navigate = useNavigate();
    const handleDelete = async ()=> {
            const respone = await remove(houseDelete.id);
            handleHideModalHouse();
            toast.success("Success Deleted");
         const list =   await getAll();
         setHouseList(list)
            navigate("/");
            console.log(respone);
    }
    if(!houseDelete){
        return null;
    }
  return (
    <div>
      <Modal show={showModalHouse}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this house have name: {houseDelete.name}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModalHouse}>Close</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
