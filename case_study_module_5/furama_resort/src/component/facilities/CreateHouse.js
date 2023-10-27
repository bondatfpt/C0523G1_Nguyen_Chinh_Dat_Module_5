import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getRoomStandards } from "./service/VillaService";
import { create } from "./service/HouseService";
import * as Yup from "yup";

export default function CreateHouse() {
  const navigate = useNavigate();
  const [roomStandards, setRoomStandards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const roomStandards = await getRoomStandards();
      setRoomStandards(roomStandards);
    };
    fetchData();
  }, []);

  const handleSubmit = async (values) => {
    const response = await create(values);
    if (response == 201){
      toast.success("Success Created");
      navigate("/");
    }else{
      toast.error("Something wrong here!");
    }
  };

  if (!roomStandards) {
    return null;
  }

  const initialValue = {
    name: "",
    usableArea: "",
    rentalCost: "",
    numberPeople: "",
    rentalType: ["Day", "Week", "Month"],
    roomStandard:JSON.stringify( {
      id: 1,
      name: "Normal",
    }),
    poolArea: "",
    numberFloor: "",
    pathImg: "",
  };

  const validateHouse = {
    name: Yup.string()
      .required()
      .matches(/^[A-Za-z\s]{1,}$/),
    usableArea: Yup.number().required().positive("Must be a positive number"),
    rentalCost: Yup.number().required().positive("Must be positive number"),
    numberPeople: Yup.number()
      .required()
      .positive("Must be positive number")
      .integer("Must be a integer number"),
    poolArea: Yup.number().required().positive("Must be a positive number!"),
    numberFloor: Yup.number().required().positive("Must be a positive number!"),
  };

  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Create House</h2>
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
          initialValues={initialValue}
          validationSchema={Yup.object(validateHouse)}
          onSubmit={(values) => {
            console.log(values);
            const pathImg = values.pathImg.replace("C:\\fakepath\\","");
            const data = {
              name: values.name,
              usableArea: values.usableArea,
              rentalCost: values.rentalCost,
              numberPeople: values.numberPeople,
              rentalType: values.rentalType,
              roomStandard: JSON.parse(values.roomStandard),
              poolArea: values.poolArea,
              numberFloor: values.numberFloor,
              pathImg: "/images/" + pathImg,
            }
            console.log(data);
            handleSubmit(data);
          }}
        >
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
                                <label className="form-label">House Name</label>
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
                                    </div>
                                  </div>
                                </FieldArray>
                              </div>
                              <div className="form-outline ">
                                <label className="form-label">
                                  Room Standards
                                </label>
                                <Field
                                  name="roomStandard"
                                  as="select"
                                  className="form-control form-control-lg custom-input"
                                >
                                  {roomStandards.map((item) => (
                                    <option key={item.id} value={JSON.stringify(item)}>
                                      {item.name}
                                    </option>
                                  ))}
                                </Field>
                              </div>
                              <div className="form-outline">
                                <label className="form-label">
                                  Swimming Pool Area
                                </label>
                                <Field
                                  name="poolArea"
                                  className="form-control form-control-lg custom-input "
                                  type="number"
                                />
                                <ErrorMessage
                                  name="poolArea"
                                  component="span"
                                  style={{ color: "red" }}
                                ></ErrorMessage>
                              </div>
                              <div className="form-outline">
                                <label className="form-label">
                                  Number Of Floor
                                </label>
                                <Field
                                  name="numberFloor"
                                  className="form-control form-control-lg "
                                  type="number"
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
                          >
                            <label htmlFor="imageInput">Choose an image:</label>
                            <Field
                              style={{ border: "none" }}
                              type="file"
                              name="pathImg"
                              className="form-control form-control-lg "
                            />
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
