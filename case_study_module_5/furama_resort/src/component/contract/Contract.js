import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Contract.css";

export default function Contract() {
  const [contractList, setContractList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response4 = await axios.get(
          "http://localhost:8080/api/contracts"
        );
        setContractList(response4.data);
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
                <h2>Contract</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              Add a new contract
            </a>
          </h3>
          <div className="container-fluid">
            <div className="row">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Contract Code</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Deposit</th>
                    <th scope="col">Total Payment</th>
                    <th scope="col" colSpan={2}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {contractList.map((contract, index) => {
                    return (
                      <tr key={contract.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{contract.contractCode}</td>
                        <td>
                          <input
                            type="date"
                            value={contract.startDate}
                            readOnly
                            style={{
                              border: "none",
                              backgroundColor: "#212529",
                              color: "white",
                            }}
                          ></input>
                        </td>
                        <td>
                          <input
                            value={contract.endDate}
                            type="date"
                            readOnly
                            style={{
                              border: "none",
                              backgroundColor: "#212529",
                              color: "white",
                            }}
                          ></input>
                        </td>
                        <td>{contract.deposit}$</td>
                        <td>{contract.totalPayment}$</td>
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
    </div>
  );
}
