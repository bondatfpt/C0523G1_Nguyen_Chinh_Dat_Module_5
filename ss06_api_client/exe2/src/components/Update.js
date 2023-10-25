import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findById, update } from "../service/BookService";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
export default function Update() {
  const navigate = useNavigate();
  const [bookUpdate, setBookUpdate] = useState();
  const { id } = useParams();
  useEffect(() => {
    findById(id).then((bookUpdate) => {
      setBookUpdate(bookUpdate);
      console.log(bookUpdate);
    });
  }, [id]);

  const handleSubmit = (values,id) => {
    update(values,id);
    toast.success("Success Updated");
    navigate("/");
  }
  if (!bookUpdate) {
    return null;
  }
  const initValue = {
    id: bookUpdate.id,
    title: bookUpdate.title,
    quantity: bookUpdate.quantity,
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/books">
            Back
          </Link>
        </div>
      </nav>
      <Formik
        initialValues={initValue}
        onSubmit={(values) => {
         handleSubmit(values,id);
        }}
      >
        <section className="bg-image">
          <div className="mask d-flex align-items-center gradient-custom-3">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: 15 }}>
                    <div className="card-body p-5">
                      <div
                        style={{ textAlign: "center" }}
                        className="form-outline mb-4"
                      >
                        <h2>Update Book</h2>
                      </div>
                      <Form>
                        <div className="form-outline mb-4">
                          <label className="form-label">Tittle</label>
                          <Field
                            type="text"
                            name="title"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Quantity</label>
                          <Field
                            type="number"
                            name="quantity"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <button
                            style={{
                              marginLeft: 110,
                              padding: 15,
                              border: "none",
                              borderRadius: 35,
                              width: "50%",
                            }}
                            id="submitButton"
                            type="submit"
                          >
                            Done
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Formik>
    </div>
  );
}
