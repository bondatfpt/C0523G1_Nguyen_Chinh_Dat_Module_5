import React, { useEffect, useState } from "react";
import {
  getTypes,
  getAll,
  searchByHarvestDate,
  searchByType,
  searchAll
} from "../service/ProductService";
import Pagination from "./Pagination";
import ModalConfirm from "./ModalConfirm";
import { Link } from "react-router-dom";

export default function List() {
  const [products, setProducts] = useState();
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 3,
    _totalRows: 1,
  });
  const [productDelete, setProductDelete] = useState();
  const [showModal, setShowModal] = useState(false);
  const [harvestDate, setHarvestDate] = useState("");
  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState("");

  const handleShowModal = (product) => {
    setShowModal(true);
    setProductDelete(product);
  };

  const handleHideModal = (value) => {
    console.log("Giá trị đã về: " + value);
    setShowModal(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const respone = await getAll(pagination);
      console.log(respone.data);
      setProducts(respone.data);
      setPagination({
        ...pagination,
        _totalRows: respone.headers["x-total-count"],
      });
    };
    fetchData();
    fetchDataTypes();
  }, [pagination._page, showModal]);

  const handleChangePage = (newPage) => {
    console.log("Giá trị page đã về:" + newPage);
    setPagination({
      ...pagination,
      _page: newPage,
    });
  };

  const fetchDataHarvestDate = async (harvestDate) => {
    const list = await searchByHarvestDate(harvestDate);
    setProducts(list);
  };

  const fetchDataSearchAll = async (harvestDate,typeId) => {
    const list = await searchAll(harvestDate,typeId);
    setProducts(list);
  }

  const fetchDataTypes = async () => {
    const types = await getTypes();
    setTypes(types);
  };

  const fetchDataSearchByType = async (typeId) => {
    const list = await searchByType(typeId);
    setProducts(list);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (typeId == "" && harvestDate != "") {
      fetchDataHarvestDate(harvestDate);
    }else if (typeId != "" && harvestDate == ""){
      fetchDataSearchByType(typeId);
    }else if (typeId != "" && harvestDate != ""){
      fetchDataSearchAll(harvestDate,typeId);
    }
  };



  if (!products || !pagination || !types) {
    return null;
  }
  if  (products.length == 0){
    return (
      <>
        <div className="body container shadow pb-1">
        <div style={{ display: "flex" }}>
          <div>
            <Link
              to="/new"
              style={{ padding: 10, fontSize: 17 }}
              className="btn btn-sm btn-primary mt-3 mb-3 rounded-0"
            >
              Create
            </Link>
          </div>
          <div className="s003">
            <form onSubmit={handleSearch}>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <div className="input-select">
                    <select
                      style={{
                        textAlign: "center",
                        width: "100%",
                        border: "none",
                        height: 50,
                      }}
                      onChange={(event) => setTypeId(event.target.value)}
                      data-trigger
                      name="choices-single-defaul"
                    >
                      {types.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="input-field second-wrap">
                  <input
                    id="search"
                    type="date"
                    placeholder="Enter harvest date?"
                    onChange={(event) => {
                      setHarvestDate(event.target.value);
                    }}
                  />
                </div>
                <div style={{display:"flex"}} className="input-field third-wrap">
                  <button className="btn-search" type="submit">
                    <svg
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
                    </svg>
                  </button>
                  <button className="btn-search" type="button" >
                   Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <table className="table table-hover border">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Mã hàng hóa</th>
                <th>Tên hàng hóa</th>
                <th>Đơn vị tính</th>
                <th>Giá</th>
                <th>Loại hàng hóa</th>
                <th>Ngày thu hoạch</th>
                <th scope="col" className="text-center col-2">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
             <td colSpan={9} style={{textAlign:"center"}}>Not found!</td>
             </tr>
            </tbody>
          </table>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div className="body container shadow pb-1">
        <div style={{ display: "flex" }}>
          <div>
            <Link
              to="/new"
              style={{ padding: 10, fontSize: 17 }}
              className="btn btn-sm btn-primary mt-3 mb-3 rounded-0"
            >
              Create
            </Link>
          </div>
          <div className="s003">
            <form onSubmit={handleSearch}>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <div className="input-select">
                    <select
                      style={{
                        textAlign: "center",
                        width: "100%",
                        border: "none",
                        height: 50,
                      }}
                      onChange={(event) => setTypeId(event.target.value)}
                      data-trigger
                      name="choices-single-defaul"
                    >
                      {types.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="input-field second-wrap">
                  <input
                    id="search"
                    type="date"
                    placeholder="Enter harvest date?"
                    onChange={(event) => {
                      setHarvestDate(event.target.value);
                    }}
                  />
                </div>
                <div style={{display:"flex"}} className="input-field third-wrap">
                  <button className="btn-search" type="submit">
                    <svg
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
                    </svg>
                  </button>
                  <button className="btn-search" type="button" >
                   Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <table className="table table-hover border">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Mã hàng hóa</th>
                <th>Tên hàng hóa</th>
                <th>Đơn vị tính</th>
                <th>Giá</th>
                <th>Loại hàng hóa</th>
                <th>Ngày thu hoạch</th>
                <th scope="col" className="text-center col-2">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.productCode}</td>
                  <td>{item.name}</td>
                  <td>{item.unit}</td>
                  <td>{item.price}</td>
                  <td>{item.type.name}</td>
                  <td>{item.harvestDate}</td>
                  <td className="text-center">
                    <button className="btn btn-sm btn-outline-primary me-4 rounded-0">
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger rounded-0"
                      type="button"
                      onClick={() => handleShowModal(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination pagination={pagination} onChangePage={handleChangePage} />
          <ModalConfirm
            productDelete={productDelete}
            showModal={showModal}
            handleHideModal={handleHideModal}
          />
        </div>
      </div>
    </>
  );
}
