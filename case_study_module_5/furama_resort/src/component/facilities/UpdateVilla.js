import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, FieldArray, ErrorMessage, Field } from "formik";
import { useEffect, useState } from "react";
import { getRoomStandards } from "./service/VillaService";
import { findById,update } from "./service/VillaService";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

export default function UpdateVilla() {
  const navigate = useNavigate();
  const [villaUpdate, setVillaUpdate] = useState();
  const [roomStandards,setRoomStandards] = useState();
  const [imgSrc, setImgSrc] = useState();
  const { id } = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await findById(id);
      const response1 = await getRoomStandards();
      setRoomStandards(response1);
      setVillaUpdate(response);
    };
    fetchData();
  }, []);
  const handleSubmit = async (values,id) => {
    const response = await update(values,id);
    if(response == 200) {
      navigate("/");
      toast.success("Success Updated");
    }else{
      toast.error("Something wrong here!");
    }
  }

  if (!villaUpdate || !roomStandards) {
    return null;
  }
  const initValue = {
    id: villaUpdate.id,
    name: villaUpdate.name,
    usableArea: villaUpdate.usableArea,
    rentalCost: villaUpdate.rentalCost,
    numberPeople: villaUpdate.numberPeople,
    rentalType: villaUpdate.rentalType,
    roomStandard: JSON.stringify(villaUpdate.roomStandard),
    poolArea: villaUpdate.poolArea,
    numberFloor: villaUpdate.numberFloor,
    pathImg: ""
  };

  const validateVilla = {
    name: Yup.string()
      .required()
      .matches(/[A-Za-z\s]{1,}/, "Not contain number !"),
    usableArea: Yup.number().positive("Must be a positive number!").required(),
    rentalCost: Yup.number().positive("Must be a positive number!").required(),
    numberPeople: Yup.number()
      .required()
      .positive("Must be a positive number!")
      .integer("Must be a integer!"),
    rentalType: Yup.array().required(),
    poolArea: Yup.number().required().positive("Must be a positive number!"),
    numberFloor: Yup.number()
      .required()
      .positive("Must be a positive number!")
      .integer("Must be an integer number!"),
  };

  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Create Villa</h2>
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
        <Formik
          initialValues={initValue}
          validationSchema={Yup.object(validateVilla)}
          onSubmit={(values) => {
            console.log(values);
            const pathImg = values.pathImg.replace("C:\\fakepath\\","");
            const data = {
              id: values.id,
              name: values.name,
              usableArea: values.usableArea,
              rentalCost: values.rentalCost,
              numberPeople: values.numberPeople,
              rentalType: values.rentalType,
              roomStandard: JSON.parse(values.roomStandard),
              poolArea: values.poolArea,
              numberFloor: values.numberFloor,
              pathImg: "/images/" + pathImg,
            };
            console.log(data);
            handleSubmit(data,id);
          }}
        >
          <section>
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center ">
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
                                <label className="form-label">Villa Name</label>
                                <Field
                                  name="name"
                                  required=""
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
                                  Usable Area
                                </label>
                                <Field
                                  name="usableArea"
                                  type="number"
                                  className="form-control form-control-lg "
                                />
                                <ErrorMessage
                                  name="usableArea"
                                  component="span"
                                  style={{ color: "red" }}
                                ></ErrorMessage>
                              </div>
                              <div className="form-outline ">
                                <label className="form-label">
                                  Rental Cost
                                </label>
                                <Field
                                  name="rentalCost"
                                  required=""
                                  type="number"
                                  className="form-control form-control-lg "
                                />
                                <ErrorMessage
                                  name="rentalCost"
                                  component="span"
                                  style={{ color: "red" }}
                                ></ErrorMessage>
                              </div>
                              <div className="form-outline ">
                                <label className="form-label">
                                  Maximum Number Of People
                                </label>
                                <Field
                                  name="numberPeople"
                                  type="number"
                                  className="form-control form-control-lg"
                                />
                                <ErrorMessage
                                  name="numberPeople"
                                  component="span"
                                  style={{ color: "red" }}
                                ></ErrorMessage>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-outline">
                                <FieldArray name="rentalType">
                                  <div>
                                    <label>Rental Type:</label>
                                    <div
                                      className="rentalCheckbox"
                                      style={{ padding: "16px" }}
                                    >
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="rentalType"
                                          value="Day"
                                        />
                                        Day
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="rentalType"
                                          value="Week"
                                        />
                                        Week
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="rentalType"
                                          value="Month"
                                        />
                                        Month
                                      </label>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="rentalType"
                                          value="Year"
                                        />
                                        Year
                                      </label>
                                    </div>
                                  </div>
                                </FieldArray>
                                <ErrorMessage
                                  name="rentalType"
                                  component="span"
                                  style={{ color: "red" }}
                                ></ErrorMessage>
                              </div>
                              <div className="form-outline ">
                                <label
                                  className="form-label"
                                  htmlFor="userName"
                                >
                                  Room Standards
                                </label>
                                <Field
                                  className="form-control form-control-lg custom-input"
                                  name="roomStandard"
                                  as="select"
                                >
                                  {roomStandards.map((item) => (
                                    <option
                                      key={item.id}
                                      value={JSON.stringify(item)}
                                    >
                                      {item.name}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="passwordConfirm"
                                >
                                  Swimming Pool Area
                                </label>
                                <Field
                                  className="form-control form-control-lg custom-input "
                                  type="number"
                                  name="poolArea"
                                />
                                <ErrorMessage
                                  name="poolArea"
                                  component="span"
                                  style={{ color: "red" }}
                                ></ErrorMessage>
                              </div>
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="passwordConfirm"
                                >
                                  Number Of Floor
                                </label>
                                <Field
                                  className="form-control form-control-lg "
                                  type="number"
                                  name="numberFloor"
                                />
                                <ErrorMessage
                                  name="numberFloor"
                                  component="span"
                                  style={{ color: "red" }}
                                ></ErrorMessage>
                              </div>
                            </div>
                          </div>
                          <div
                            className="row"
                            style={{
                              paddingLeft: 15,
                              paddingRight: 15,
                              marginBottom: 15,
                            }}
                          ></div>
                          <div
                            className="row"
                            style={{
                              paddingLeft: 15,
                              paddingRight: 15,
                              marginBottom: 15,
                            }}
                          >
                            <label htmlFor="file-upload">
                              Choose an image:
                            </label>
                            <Field
                              id="file-upload"
                              style={{ border: "none" }}
                              type="file"
                              name="pathImg"
                              className="form-control form-control-lg "
                            />
                            <img src={villaUpdate.pathImg}></img>
                          </div>
                          <div className="d-flex justify-content-end">
                            <Link
                              to="/"
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
    </div>
  );
}
