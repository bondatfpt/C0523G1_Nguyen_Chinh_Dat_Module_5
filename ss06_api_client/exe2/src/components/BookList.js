import React from "react";
import { useState, useEffect } from "react";
import { getAll } from "../service/BookService";
import { Link } from "react-router-dom";
import ModalConFirm from "./ModalConFirm";

export default function BookList() {
  const [books, setBooks] = useState();
  useEffect(() => {
    getAll().then((books) => {
      setBooks(books);
    });
  }, []);
  console.log(books);
  const sendInfoToModal = (id)=> {
        document.getElementById("idDelete").value = id;
  }

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
            return(
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td><Link to={`/update/${item.id}`} className="btn btn-primary">Edit</Link></td>
              <td><button onClick={sendInfoToModal(item.id)} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteBook">Delete</button></td>
            </tr>)
          })}
          </tbody>
      </table>
    </div>
  );
}
