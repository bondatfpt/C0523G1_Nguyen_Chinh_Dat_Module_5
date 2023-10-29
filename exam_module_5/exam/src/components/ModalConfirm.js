import React, { useEffect } from 'react'
import {Modal, Button} from "react-bootstrap";
import { remove,getAll} from '../service/ProductService';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function ModalConfirm({showModal, handleHideModal, productDelete}) {
    const navigate = useNavigate();
    const handleDelete = () => {
        const respone = remove(productDelete.id);
        handleModal (false);
         toast.success("Success Deleted");
    }
 
    const handleModal = (value) => {
        if (handleHideModal){
            handleHideModal(value);
            console.log("Giá trị truyền về: " +value);
        }
    }
  return (
    <div>
        <Modal show={showModal}>
        <Modal.Header>
            <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this product have name: </Modal.Body>
        <Modal.Footer>
            <Button variant='primary'onClick={()=>handleModal(false)} >Close</Button>
            <Button variant='danger' onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
        </Modal>

    </div>
  )
}
