import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { update, findById } from "./service/RoomService";

export default function CreateRoom() {
  const [roomUpdate, setRoomUpdate] = useState();
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async () =>{
      const respone = await findById(id);
      setRoomUpdate(respone);
    }
    fetchData();
  },[])
  if(!roomUpdate){
    return null;
  }
  const initialValue = {
    id: roomUpdate.id,
    pathImg: "",
    name: roomUpdate.name,
    usableArea: roomUpdate.usableArea,
    rentalCost: roomUpdate.rentalCost,
    rentalType: roomUpdate.rentalType,
    freeService: roomUpdate.freeService,
  };

  const validateRoom = {
    name: Yup.string()
      .required()
      .matches(/^[A-Za-z\s]{1,}$/, "Not contain number!"),
    usableArea: Yup.number().required().positive("Must be a positive number!"),
    rentalCost: Yup.number().required().positive("Must be a positive number!"),
  };

  const handleSubmit = async (values,id) => {
    const respone = await update(values,id);
    navigate("/");
    toast.success("Success Updated");
  };

  return (
    <div>
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Update Room</h2>
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
          validationSchema={Yup.object(validateRoom)}
          onSubmit={(values) => {
            const pathImg = values.pathImg.replace("C:\\fakepath\\", "");
            values.pathImg = "/images/" + pathImg;
            console.log(values);
            handleSubmit(values,id);
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
                            <div className="form-outline">
                              <label className="form-label">Room Name</label>
                              <Field
                                name="name"
                                type="text"
                                className="form-control form-control-lg"
                              />
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
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">Rental Cost</label>
                              <Field
                                name="rentalCost"
                                type="number"
                                className="form-control form-control-lg "
                              />
                            </div>
                            <div className="form-outline ">
                              <FieldArray name="freeService">
                                <div>
                                  <label>Free Service:</label>
                                  <div
                                    className="rentalCheckbox"
                                    style={{ padding: "16px" }}
                                  >
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="freeService"
                                        value="Thai Massage"
                                      />
                                      Massage
                                    </label>
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="freeService"
                                        value="SeaFood"
                                      />
                                      SeaFood
                                    </label>
                                    <label>
                                      <Field
                                        type="checkbox"
                                        name="freeService"
                                        value="Car Loan"
                                      />
                                      Car Loan
                                    </label>
                                  </div>
                                </div>
                              </FieldArray>
                            </div>
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
                                        value="Hour"
                                      />
                                      Hour
                                    </label>
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
                                        value="Month"
                                      />
                                      Month
                                    </label>
                                  </div>
                                </div>
                              </FieldArray>
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
                            <label>Choose an image:</label>
                            <Field
                              style={{ border: "none" }}
                              type="file"
                              name="pathImg"
                              className="form-control form-control-lg "
                            />
                            <img src={roomUpdate.pathImg}></img>
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
