import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { create, getCustomerTypes } from "./service/CustomerService";

export default function CreateCustomer() {
  const navigate = useNavigate();
  const [customerTypes, setCustomerTypes] = useState([]);
  const fetchData = async () => {
    console.log("useEffect customer type run");
    try {
      const response = await getCustomerTypes();
      setCustomerTypes(response);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const response = await create(values);
    if (response === 201) {
      toast.success("Success Added");
      navigate("/customers");
    }else{
      navigate("/customers/new");
      toast.warning("Something wrong here!");
    }
  };

  if (!customerTypes) {
    return null;
  }

  const initValue = {
    name: "",
    birthday: "",
    phoneNumber:"",
    gender: false,
    identityNumber: "",
    email: "",
    customerType: 5,
    address: "",
  };
  const validateCustomer = {
    name: Yup.string().required(),
    birthday: Yup.string().required(),
    identityNumber: Yup.string()
      .required()
      .matches(/^[0-9]{10,12}$/, "Invalid IdentityNumber!"),
    email: Yup.string().required().email("Invalid email!"),
    address: Yup.string().required(),
  };

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
      <Formik
        initialValues={initValue}
        validationSchema={Yup.object(validateCustomer)}
        onSubmit={(values) => {
          const data = {
            id: values.id,
            name: values.name,
            phoneNumber: values.phoneNumber,
            birthday: values.birthday,
            gender: values.gender,
            identityNumber: values.identityNumber,
            email: values.email,
            customerType: {
              id: +values.customerType,
            },
            address: values.address,
          };
          handleSubmit(data);
        }}
      >
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
                          <Form>
                            <div className="row">
                              <div className="col-md-6 mb-2">
                                <div className="form-outline">
                                  <label className="form-label">
                                    Full Name
                                  </label>
                                  <Field
                                    name="name"
                                    type="text"
                                    className="form-control form-control-lg"
                                  />
                                  <ErrorMessage
                                    name="name"
                                    component="span"
                                    style={{ color: "red" }}
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline ">
                                  <label className="form-label" htmlFor="email">
                                    Date Of Birth
                                  </label>
                                  <Field
                                    name="birthday"
                                    type="date"
                                    className="form-control form-control-lg "
                                  />
                                  <ErrorMessage
                                    name="birthday"
                                    component="span"
                                    style={{ color: "red" }}
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline ">
                                  <label className="form-label">Gender</label>
                                  <Field
                                    className="form-control form-control-lg"
                                    name="gender"
                                    as="select"
                                  >
                                    <option value={false}>Male</option>
                                    <option value={true}>Female</option>
                                  </Field>
                                </div>
                                 <div className="form-outline">
                              <label className="form-label">
                                Address
                              </label>
                              <Field
                                className="form-control form-control-lg "
                                type="text"
                                name="address"
                              />
                              <ErrorMessage
                                name="address"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                              </div>
                              <div className="col-md-6 mb-2">
                                <div className="form-outline ">
                                  <label className="form-label">
                                    Identity Number
                                  </label>
                                  <Field
                                    type="number"
                                    name="identityNumber"
                                    className="form-control form-control-lg"
                                  />
                                  <ErrorMessage
                                    name="identityNumber"
                                    component="span"
                                    style={{ color: "red" }}
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline">
                                  <label className="form-label" htmlFor="email">
                                    Email
                                  </label>
                                  <Field
                                    name="email"
                                    className="form-control form-control-lg "
                                    type="email"
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    style={{ color: "red" }}
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline">
                                  <label className="form-label">
                                    Customer Type
                                  </label>
                                  <Field
                                    className="form-control form-control-lg"
                                    name="customerType"
                                    as="select"
                                  >
                                    {customerTypes.map((type) => (
                                      <option key={type.id} value={type.id}>
                                        {type.name}
                                      </option>
                                    ))}
                                  </Field>
                                </div>
                                <div className="form-outline">
                              <label className="form-label" >
                                Phone Number
                              </label>
                              <Field
                                className="form-control form-control-lg "
                                type="text"
                                name="phoneNumber"
                              />
                              <ErrorMessage
                                name="phoneNumber"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                              </div>
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
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Formik>
    </div>
  );
}
