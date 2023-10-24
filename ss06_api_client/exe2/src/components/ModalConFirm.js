import React from "react";
import { remove } from "../service/BookService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ModalConFirm() {
  const [id, setId] = useState();

  const getId = (event) => {
    setId(idDelete);
    return idDelete;
  };

  return (
    <div>
      <div
        className="modal fade"
        id="deleteBook"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <form>
          <input type="hidden" id="idDelete"></input>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Delete
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                Are you sure to delete this book ?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  onClick={getId()}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
