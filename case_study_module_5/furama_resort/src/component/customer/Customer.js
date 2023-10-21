import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Customer.css";

export default function Customer() {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/customers");
        setCustomerList(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Customer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_room">
        <div style={{ marginTop: "-45px" }}>
          <h3>
            <Link
              className="highlight-link"
              style={{
                color: "black",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
              to="/customers/new"
            >
              Add a new customer
            </Link>
          </h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <table className="table  table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Date Of Birth</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Identity Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Type</th>
                  <th scope="col">Address</th>
                  <th scope="col" colSpan={2} style={{textAlign:"center"}}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {customerList.map((customer, index) => {
                  return (
                    <tr key={customer.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{customer.name}</td>
                      <td>
                        <input
                          type="date"
                          value={customer.birthday}
                          readOnly
                          style={{
                            border: "none",
                            backgroundColor: "#212529",
                            color: "white",
                          }}
                        ></input>
                      </td>
                      <td>{customer.gender ? "Female" : "Male"}</td>
                      <td>{customer.identityNumber}</td>
                      <td>{customer.email}</td>
                      <td>{customer.customerType.name}</td>
                      <td>{customer.address}</td>
                      <td>
                        <div className="row">
                          <div className="col-md 6">
                            <div className="row">
                              <div className="col-md-6 btn-edit-delete">
                                <button
                                  className="Btn-edit"
                                  style={{ textAlign: "center" }}
                                >
                                  Edit
                                  <svg className="svg" viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                                  </svg>
                                </button>
                              </div>
                              <div className="col-md-6 btn-edit-delete">
                                <button
                                  className="Btn-delete"
                                  style={{ textAlign: "center" }}
                                >
                                  Delete
                                  <svg
                                    className="svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="100"
                                    height="100"
                                    viewBox="0 0 64 64"
                                  >
                                    <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
