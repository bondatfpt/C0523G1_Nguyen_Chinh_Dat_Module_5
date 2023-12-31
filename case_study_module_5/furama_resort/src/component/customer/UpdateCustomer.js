import React from "react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useParams } from "react-router-dom";
import { update, findById, getCustomerTypes } from "./service/CustomerService";
import { handleCheckEmail,handleCheckIdentityNumber,handleCheckPhoneNumber } from "./service/CustomerService";

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
   const checkPhoneNumber = await handleCheckPhoneNumber(values.phoneNumber, id);
   const checkIdentityNumber = await handleCheckIdentityNumber(values.identityNumber,id);
   const checkEmail = await handleCheckEmail(values.email,id);
   if (checkPhoneNumber && checkEmail && checkIdentityNumber){
    const response = await update (values,id);
    console.log(response);
    if (response == 200){
      navigate("/customers");
      toast.success("Success updated customer have name: " + values.name);
    }else{
      toast.warning("Something erorr here");
    }
   }else if (!checkPhoneNumber) {
    toast.warning("Duplicate phone number");
   }
   else if (!checkIdentityNumber) {
    toast.warning("Duplicate identity number");
   }else if (!checkEmail) {
    toast.warning("Duplicate email");
   }
  };

  if (!customerUpdate || !customerTypes) {
    return null;
  }

  const initValue = {
    id: customerUpdate.id,
    name: customerUpdate.name,
    birthday: customerUpdate.birthday,
    phoneNumber:customerUpdate.phoneNumber,
    gender: customerUpdate.gender,
    identityNumber: customerUpdate.identityNumber,
    email: customerUpdate.email,
    customerType: customerUpdate.customerType.id,
    address: customerUpdate.address,
  };

  const validateCustomer = {
    name: Yup.string().required(),
    birthday: Yup.string().required().test("age-check","18<= age <= 100!", function(value){
      const today = new Date();
      const birthday = new Date(value);
      const age = today.getFullYear() - birthday.getFullYear();
      if (age >= 18 && age <= 100 ){
        return true;
      }else{
        return false;
      }
    }),
    identityNumber: Yup.string()
      .required()
      .matches(/^[0-9]{10,12}$/, "Invalid IdentityNumber!"),
    phoneNumber: Yup.string().required().matches(/^[84|0][0-9]{9,}$/,"Invalid phone number!"),
    address: Yup.string().required(),
    email: Yup.string().required().email("Invalid email !")
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
                              phoneNumber: values.phoneNumber,
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
                                    style={{color:"red"}}
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
                                    style={{color:"red"}}
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
                                style={{color:"red"}}
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
                                    style={{color:"red"}}
                                  ></ErrorMessage>
                                </div>
                                <div className="form-outline">
                                  <label className="form-label">Email</label>
                                  <Field
                                    name="email"
                                    className="form-control form-control-lg "
                                    type="text"
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component="span"
                                    style={{color:"red"}}
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
                                        {type.name.substring(1)}
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
                                id="phoneNumber"
                                name="phoneNumber"
                              />
                              <ErrorMessage
                                name="phoneNumber"
                                component="span"
                                style={{color:"red"}}
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
