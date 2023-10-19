import React from 'react'
import "./Contract.css";

export default function Contract() {
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
          display: "flex"
        }}
        href="create-customer.html"
      >
        Add a new contract
      </a>
    </h3>
    <div className="container-fluid">
      <div className="row">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Contract Code</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Deposit</th>
              <th scope="col">Total Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CT-0001</td>
              <td>14-10-2023</td>
              <td>14-11-2023</td>
              <td>5.000.000</td>
              <td>15.000.000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>CT-0002</td>
              <td>14-10-2023</td>
              <td>14-11-2023</td>
              <td>5.000.000</td>
              <td>15.000.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
