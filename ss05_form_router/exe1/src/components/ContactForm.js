import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function ContactForm() {
  const initValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const validateObject = {
    name: Yup.string().required("Name can't be blank!"),
    email: Yup.string()
      .required("Email can't be blank!")
      .email("Email invalid!"),
    phone: Yup.string()
      .required("Phone can't be blank!")
      .matches(/^[0|84][0-9]{9,}$/, "Phone invalid!"),
  };

  return (
    <>
      <Formik
        initialValues={initValue}
        onSubmit={(values) => {
          toast.success("Add contact successfully!!!");
        }}
        validationSchema={Yup.object(validateObject)}
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
                        <h2>Contact Form</h2>
                      </div>
                      <Form>
                        <div className="form-outline mb-4">
                          <label className="form-label">Name</label>
                          <Field
                            name="name"
                            className="form-control form-control-lg"
                          />
                          <ErrorMessage
                            name="name"
                            component="span"
                            style={{ color: "red" }}
                          ></ErrorMessage>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label">Email</label>
                          <Field
                            name="email"
                            className="form-control form-control-lg"
                          />
                          <ErrorMessage
                            name="email"
                            component="span"
                            style={{ color: "red" }}
                          ></ErrorMessage>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Phone</label>
                          <Field
                            name="phone"
                            className="form-control form-control-lg"
                          />
                          <ErrorMessage
                            name="phone"
                            component="span"
                            style={{ color: "red" }}
                          ></ErrorMessage>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Message</label>
                          <Field
                            name="message"
                            className="form-control form-control-lg"
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
    </>
  );
}
