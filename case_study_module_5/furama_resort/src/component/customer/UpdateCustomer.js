import React from "react";
import { Formik,Form,Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function UpdateCustomer() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Enter name")
  })
  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Update Customer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our_room"  style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
        <div>
          <section
         
          >
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                  <div className="card card-registration my-6">
                    <div className="col-md-12">
                      <div
                        className="card-body text-black"
                        style={{ padding: "20px 50px" }}
                      >
                        <Formik>
                        <form>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label">Full Name</label>
                                <input
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
                                  required=""
                                  type="date"
                                  className="form-control form-control-lg "
                                />
                              </div>
                              <div className="form-outline ">
                                <label className="form-label">Gender</label>
                                <select className="form-control form-control-lg ">
                                  <option value="">Male</option>
                                  <option value="">Female</option>
                                </select>
                              </div>
                              <div className="form-outline ">
                                <label className="form-label">
                                  Identity Number
                                </label>
                                <input
                                  required=""
                                  type="number"
                                  className="form-control form-control-lg"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="passwordConfirm"
                                >
                                  Phone Number
                                </label>
                                <input
                                  className="form-control form-control-lg custom-input "
                                  type="number"
                                />
                              </div>
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="passwordConfirm"
                                >
                                  Email
                                </label>
                                <input
                                  className="form-control form-control-lg "
                                  type="email"
                                />
                              </div>
                              <div className="form-outline">
                                <label className="form-label">
                                  Customer Type
                                </label>
                                <select className="form-control form-control-lg ">
                                  <option value="">Bronze</option>
                                  <option value="">Sliver</option>
                                  <option value="">Gold</option>
                                </select>
                              </div>
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="passwordConfirm"
                                >
                                  Address
                                </label>
                                <input
                                  className="form-control form-control-lg "
                                  type="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <Link to = "/customers"
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
                              className="btn  btn-lg"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                        </Formik>
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
