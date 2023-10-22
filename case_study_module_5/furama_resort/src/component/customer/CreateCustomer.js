import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CreateCustomer() {
  const [customerTypes, setCustomerTypes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/customer-types/"
        );
        setCustomerTypes(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:8080/api/customers", values)
      .then((response) => {
        // Xử lý phản hồi thành công từ API
        console.log(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi từ API
        console.error(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      birthday: "",
      gender: true,
      identityNumber: "",
      email: "",
      customerType: {
        id: 5,
        name: "member",
      },
      address: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log(values.customerType);
      const selectedTypeId = parseInt(formik.values.customerType.id);
      const selectedType = customerTypes.find(
        (type) => type.id === selectedTypeId
      );
      const data = {
        name: values.name,
        birthday: values.birthday,
        gender: values.gender,
        identityNumber: values.identityNumber,
        email: values.email,
        customerType: selectedType,
        address: values.address,
      };
      console.log(data);
      handleSubmit(data);
    },
  });

  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Create Customer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="our_room"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <section>
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                  <div className="card card-registration my-6">
                    <div className="col-md-12">
                      <div
                        className="card-body text-black"
                        style={{ padding: "20px 50px" }}
                      >
                        <form onSubmit={formik.handleSubmit}>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label">Full Name</label>
                                <input
                                  onChange={formik.handleChange}
                                  value={formik.values.name}
                                  id="name"
                                  name="name"
                                  type="text"
                                  className="form-control form-control-lg"
                                />
                              </div>
                              <div className="form-outline ">
                                <label className="form-label" htmlFor="email">
                                  Date Of Birth
                                </label>
                                <input
                                  value={formik.values.birthday}
                                  onChange={formik.handleChange}
                                  id="birthday"
                                  name="birthday"
                                  type="date"
                                  className="form-control form-control-lg "
                                />
                              </div>
                              <div className="form-outline ">
                                <label className="form-label">Gender</label>
                                <select
                                  required
                                  onChange={formik.handleChange}
                                  value={formik.values.gender}
                                  className="form-control form-control-lg"
                                  name="gender"
                                >
                                  <option value={false}>Male</option>
                                  <option value={true}>Female</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-outline ">
                                <label className="form-label">
                                  Identity Number
                                </label>
                                <input
                                  value={formik.values.identityNumber}
                                  onChange={formik.handleChange}
                                  type="number"
                                  name="identityNumber"
                                  id="identityNumber"
                                  className="form-control form-control-lg"
                                />
                              </div>
                              <div className="form-outline">
                                <label className="form-label" htmlFor="email">
                                  Email
                                </label>
                                <input
                                  value={formik.values.email}
                                  onChange={formik.handleChange}
                                  name="email"
                                  id="email"
                                  className="form-control form-control-lg "
                                  type="email"
                                />
                              </div>
                              <div className="form-outline">
                                <label className="form-label">
                                  Customer Type
                                </label>
                                <select
                                  className="form-control form-control-lg"
                                  id="customerType"
                                  value={formik.values.customerType}
                                  onChange={formik.handleChange}
                                  name="customerType"
                                  required
                                >
                                  <option value={undefined}>Select Type</option>
                                  {customerTypes.map((type) => (
                                    <option key={type.id} value={type.id}>
                                      {type.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-outline">
                            <label className="form-label" htmlFor="address">
                              Address
                            </label>
                            <input
                              value={formik.values.address}
                              onChange={formik.handleChange}
                              className="form-control form-control-lg "
                              type="text"
                              id="address"
                              name="address"
                            />
                          </div>
                          <div
                            className="d-flex justify-content-end"
                            style={{ marginTop: "20px" }}
                          >
                            <Link
                              to="/customers"
                              style={{
                                marginRight: 20,
                                backgroundColor: "green",
                                fontWeight: 400,
                                color: "white",
                              }}
                              id="btn-login"
                              type="submit"
                              className="btn btn-lg "
                            >
                              Close
                            </Link>
                            <button
                              style={{
                                backgroundColor: "green",
                                fontWeight: 400,
                                color: "white",
                              }}
                              id="submitButton"
                              type="submit"
                              className="btn btn-lg"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
