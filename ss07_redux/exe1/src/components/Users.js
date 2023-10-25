import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, remove } from "../reduxs/middlewares/UserMiddleware";
import ModalConfirm from "./ModalConfirm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Users() {
  const users = useSelector((store) => store.users);
  const [showModal, setShowModal] = useState (false);
  const [idDelete, setIdDelete] = useState ();
  const dispatch = useDispatch();


  const handleShowModal = (id) => {
    setShowModal(true);
    setIdDelete(id);
  }

  const handleHideModal = () => {
    setShowModal(false);
  }

  useEffect(() => {
    dispatch(getAll());
  }, []);


  if (!users) {
    return null;
  }

  return (
    <div>
      <section className="bg-image">
        <div className="mask d-flex align-items-center gradient-custom-3">
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <div
                      style={{ textAlign: "center" }}
                      className="form-outline mb-4"
                    >
                      {" "}
                      <h2>User List</h2>{" "}
                    </div>
                    <ul>
                      {users.map((user) => {
                        return (
                          <li key={user.id} style={{marginBottom:"20px"}}>
                            {user.name}
                            <button style={{marginLeft:"20px", padding:"5px"}} className="btn btn-danger" onClick={()=>{handleShowModal(user.id)}}>Delete</button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalConfirm showModal = {showModal} handleHideModal = {handleHideModal} idDelete = {idDelete}/>
    </div>
  );
}
