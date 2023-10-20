import React from "react";

export default function CreateCustomer() {
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
      <div className="our_room">
        <div>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-45px",
            }}
          >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-6">
                    <div className="col-md-12">
                      <div
                        className="card-body text-black"
                        style={{ padding: "20px 50px" }}
                      >
                        <form>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <label className="form-label">Full Name</label>
                                <input
                                  required=""
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
                            <button
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
                            </button>
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
