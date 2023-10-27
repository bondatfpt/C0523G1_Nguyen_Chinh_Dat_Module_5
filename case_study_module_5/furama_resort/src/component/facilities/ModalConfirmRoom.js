import React from "react";
import { Modal, Button } from "react-bootstrap";
import { remove } from "./service/RoomService";
import { getAll } from "./service/RoomService";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
export default function ModalConfirmRoom({
  showModalRoom,
  handleHideModalRoom,
  roomDelete,
  setRoomList,
}) {
    const navigate = useNavigate();
    const handleDelete = async () => {
        const respone = await remove(roomDelete.id);
        handleHideModalRoom();
        toast.success("Success Deleted")
        const list = await getAll();
        setRoomList(list);
    }

  if (!roomDelete) {
    return null;
  }
  return (
    <div>
      <Modal show={showModalRoom}>
        <Modal.Header>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this room have name: {roomDelete.name}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleHideModalRoom}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
