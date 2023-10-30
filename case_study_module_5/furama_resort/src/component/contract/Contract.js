import React from "react";
import { useState, useEffect } from "react";
import "./Contract.css";
import { Link } from "react-router-dom";
import { getAll, findContractByStartDate } from "./service/ContractService";
import ModalConfirm from "./ModalConfirm";
import { toast } from "react-toastify";
import Pagination from "./Pagination";

export default function Contract() {
  const [contractList, setContractList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [contractDelete, setContractDelete] = useState();
  const [startDate, setStartDate] = useState();
  const [pagination,setPagination] = useState({
    _page:1,
    _limit:2,
    _totalRows:1,
  })
  console.log("Page init:" + pagination._page);
  const handleShowModal = (contract) => {
    setShowModal(true);
    setContractDelete(contract);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  useEffect(() => {

    const fetchDataStartDate = async () => {
      const response = await findContractByStartDate(startDate,pagination);
      console.log(response);
      setContractList(response);
    };
    fetchDataStartDate();
  }, [startDate]);
  const fetchData = async () => {
    const respone = await getAll(pagination);
    setPagination({
      ...pagination,
      _totalRows: respone.headers['x-total-count']
    })
    setContractList(respone.data);
  };
  
  useEffect(() => {
 
    
    fetchData();
    console.log("Page after call API:" + pagination._page);
  }, [pagination._page]);
  
  const handleChangePage =  (newPage) =>{
     setPagination({
      ... pagination,
      _page: newPage
    })
    console.log("New Page:" + newPage);
    // console.log("Page seted:" + pagination._page);
  }

  if (!contractList) {
    return null;
  }
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
            <Link
              className="highlight-link"
              style={{
                color: "black",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
              to="/contracts/new"
            >
              Add a new contract
            </Link>
          </h3>
          <div className="s003">
            <form>
              <div className="inner-form">
                {/* <div className="input-field first-wrap">
                  <div className="input-select">
                   <button>All</button>
                  </div>
                </div> */}
                <div className="input-field second-wrap">
                  <input
                    id="search"
                    type="date"
                    placeholder="Enter a start date?"
                    onChange={(event) => {
                      setStartDate(event.target.value);
                    }}
                  />
                </div>
                <div className="input-field third-wrap">
                  <button
                    className="btn-search"
                    type="button"
                    onClick={() => {
                      fetchData();
                    }}
                  >
                    {/* <svg
                      className="svg-inline--fa fa-search fa-w-16"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="search"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg> */}All
                  </button>
                </div>
              </div>
            </form>
          </div>
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
                    <th scope="col" colSpan={2} style={{ textAlign: "center" }}>
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
                          <div className="row">
                            <div className="col-md 6">
                              <div className="row">
                                <div className="col-md-6 btn-edit-delete">
                                  <Link
                                    className="Btn-edit"
                                    to={`/contracts/update/${contract.id}`}
                                  >
                                    Edit
                                    <svg className="svg" viewBox="0 0 512 512">
                                      <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                                    </svg>
                                  </Link>
                                </div>
                                <div className="col-md-6 btn-edit-delete">
                                  <button
                                    className="Btn-delete"
                                    onClick={() => {
                                      handleShowModal(contract);
                                    }}
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
              <Pagination pagination = {pagination} onChangePage = {handleChangePage}/>
            </div>
          </div>
        </div>
        <ModalConfirm
          showModal={showModal}
          handleHideModal={handleHideModal}
          contractDelete={contractDelete}
          setContractList={setContractList}
        />
      </div>
    </div>
  );
}
