import React from 'react'

export default function UpdateVilla() {
  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Update Villa</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="our_room">
  <section
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-45px"
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
                        <label className="form-label">Villa Name</label>
                        <input
                          required=""
                          type="text"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="form-outline ">
                        <label className="form-label" htmlFor="email">
                          Usable Area
                        </label>
                        <input
                          required=""
                          type="number"
                          className="form-control form-control-lg "
                        />
                      </div>
                      <div className="form-outline ">
                        <label className="form-label">Rental Cost</label>
                        <input
                          required=""
                          type="number"
                          className="form-control form-control-lg "
                        />
                      </div>
                      <div className="form-outline ">
                        <label className="form-label">
                          Maximum Number Of People
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
                        <label className="form-label">Rental Type</label>
                        <select className="form-control form-control-lg ">
                          <option value="">Hours</option>
                          <option value="">Day</option>
                          <option value="">Month</option>
                        </select>
                      </div>
                      <div className="form-outline ">
                        <label className="form-label" htmlFor="userName">
                          Room Standards
                        </label>
                        <select className="form-control form-control-lg custom-input">
                          <option value="">Normal</option>
                          <option value="">Medium</option>
                          <option value="">Vip</option>
                        </select>
                      </div>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="passwordConfirm">
                          Swimming Pool Area
                        </label>
                        <input
                          className="form-control form-control-lg custom-input "
                          type="number"
                        />
                      </div>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="passwordConfirm">
                          Number Of Floor
                        </label>
                        <input
                          className="form-control form-control-lg "
                          type="number"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{
                      paddingLeft: 15,
                      paddingRight: 15,
                      marginBottom: 15
                    }}
                  >
                    <label className="form-label" htmlFor="password">
                      Other Amenities Described
                    </label>
                    <textarea
                      style={{ width: "100%" }}
                      name=""
                      id=""
                      className="form-control form-control-lg "
                      defaultValue={""}
                    />
                  </div>
                  <div
                    className="row"
                    style={{
                      paddingLeft: 15,
                      paddingRight: 15,
                      marginBottom: 15
                    }}
                  >
                    <label htmlFor="imageInput">Choose an image:</label>
                    <input
                      style={{ border: "none" }}
                      type="file"
                      id="imageInput"
                      name="imageInput"
                      className="form-control form-control-lg "
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      style={{
                        marginRight: 20,
                        backgroundColor: "green",
                        fontWeight: 400,
                        color: "white"
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
                        color: "white"
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
  )
}
