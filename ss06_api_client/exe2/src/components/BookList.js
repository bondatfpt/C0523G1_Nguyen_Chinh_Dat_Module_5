import React from "react";
import { useState, useEffect } from "react";
import { getAll } from "../service/BookService";
import { Link } from "react-router-dom";
import ModalConFirm from "./ModalConFirm";
import { Modal, Button } from "react-bootstrap";
import { remove } from "../service/BookService";


export default function BookList() {
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState();
  const [id, setId] = useState ();

  const handleShow = async (id) => {
    setShowModal(true);
    setId(id)
  };
  
   const handleClose = () =>{
    setShowModal(false);
   }


  useEffect(() => {
    getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  if (!books) {
    return null;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/new">
            Add a new book
          </Link>
        </div>
      </nav>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tittle</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan={2}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>
                  <Link to={`/update/${item.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                </td>
                <td>
                  {" "}
                  <Button variant="danger" onClick={() => handleShow(item.id)}  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalConFirm showModal={showModal}  handleClose = {handleClose} id = {id} />
    </div>
  );
}
