import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Customer.css";

export default function () {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/customers");
        setCustomerList(response.data);
      } catch (error) {
        console.error(error);
      }
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
                  <th scope="col" colSpan={2}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {customerList.map((customer,index) => {
                  return (
                    <tr key={customer.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{customer.name}</td>
                      <td><input type="date" value={customer.birthday} readOnly style={{border:"none",backgroundColor:"#212529", color:"white"}} ></input></td>
                      <td>{customer.gender ? "Femail" : "Male"}</td>
                      <td>{customer.identityNumber}</td>
                      <td>{customer.email}</td>
                      <td>{customer.customerType.name}</td>
                      <td>{customer.address}</td>
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
