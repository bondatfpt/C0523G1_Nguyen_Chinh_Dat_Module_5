import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Customer.css";

export default function () {
  return (
    <div>
      <div className="our_room">
        <div style={{ marginTop: "-45px" }}>
          <h3>
            <a
              className="highlight-link"
              style={{
                color: "black",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
              href="create-customer.html"
            >
              Add a new customer
            </a>
          </h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date Of Birth</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Identity Number</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Type</th>
                  <th scope="col">Address</th>
                  <th scope="col" colSpan={2}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>22-06-1999</td>
                  <td>Male</td>
                  <td>036099638500</td>
                  <td>0123456789</td>
                  <td>bondat@gmail.com</td>
                  <td>Diamond</td>
                  <td>Florida, America</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#update"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>22-06-1999</td>
                  <td>Male</td>
                  <td>036099638500</td>
                  <td>0123456789</td>
                  <td>bondat@gmail.com</td>
                  <td>Diamond</td>
                  <td>Florida, America</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#update"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target="#delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
