import React from "react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { update, findById, getCustomerTypes } from "./service/CustomerService";

export default function UpdateCustomer() {
  const navigate = useNavigate();
  const [customerUpdate, setCustomerUpdate] = useState();
  const [customerTypes, setCustomerTypes] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetchDataCustomerUpdate();
  }, []);

  useEffect(() => {
    fetchDataCustomerTypes();
  }, []);

  const fetchDataCustomerUpdate = async () => {
    try {
      const response = await findById(id);
      setCustomerUpdate(response);
    } catch (error) {}
  };

  const fetchDataCustomerTypes = async () => {
    try {
      const response = await getCustomerTypes();
      setCustomerTypes(response);
    } catch (error) {}
  };

  const handleSubmit = async (values, id) => {
    const response = await update(values, id);
    if (response === 200) {
      toast.success("Success Updated");
      navigate("/customers");
    }else{
      toast.warning("Something wrong here!");
      navigate("/customers/update/" + id);
    }
  };

  if (!customerUpdate || !customerTypes) {
    return null;
  }

  const initValue = {
    id: customerUpdate.id,
    name: customerUpdate.name,
    birthday: customerUpdate.birthday,
    gender: customerUpdate.gender,
    identityNumber: customerUpdate.identityNumber,
    email: customerUpdate.email,
    customerType: customerUpdate.customerType.id,
    address: customerUpdate.address,
  };

  const validateCustomer = {
    name: Yup.string().required(),
    birthday: Yup.string().required(),
    identityNumber: Yup.string()
      .required()
      .matches(/^[0-9]{10,12}$/, "Invalid IdentityNumber!"),

    address: Yup.string().required(),
  };

  return (
    <>
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
                        <Formik
                          initialValues={initValue}
                          onSubmit={(values) => {
                            const data = {
                              id: values.id,
                              name: values.name,
                              birthday: values.birthday,
                              gender: values.gender,
                              identityNumber: values.identityNumber,
                              email: values.email,
                              customerType: {
                                id: +values.customerType,
                              },
                              address: values.address,
                            };
                            handleSubmit(data, id);
                          }}
                          validationSchema={Yup.object(validateCustomer)}
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
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline ">
                                  <label className="form-label">
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
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline">
                                  <label className="form-label">Email</label>
                                  <Field
                                    name="email"
                                    className="form-control form-control-lg "
                                    type="email"
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline">
                                  <label className="form-label">
                                    Customer Type
                                  </label>
                                  <Field
                                    className="form-control form-control-lg"
                                    name="customerType"
                                    component="select"
                                  >
                                    {customerTypes.map((type) => (
                                      <option key={type.id} value={type.id}>
                                        {type.name}
                                      </option>
                                    ))}
                                  </Field>
                                </div>
                              </div>
                            </div>
                            <div className="form-outline">
                              <label className="form-label" htmlFor="address">
                                Address
                              </label>
                              <Field
                                className="form-control form-control-lg "
                                type="text"
                                id="address"
                                name="address"
                              />
                              <ErrorMessage
                                name="address"
                                component="span"
                              ></ErrorMessage>
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
    </>
  );
}
