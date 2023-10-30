import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { create } from "./service/ContractService";
import { useNavigate } from "react-router-dom";
import { getAll } from "./service/ContractService";

export default function ContractCreate() {
  const navigate = useNavigate();
  const handleCheckContractCode = async (contractCode) => {
    const contractList = await getAll();
    const contract = contractList.find(
      (contract) => contract.contractCode == contractCode
    );
    if (!contract) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async (values) => {
      const response = await create(values);
      if (response == 201) {
        toast.success("Success Created");
        navigate("/contracts");
      } else {
        navigate("/contracts/new");
        toast.warn("Something wrong here !");
      }
   
  };

  const initValue = {
    contractCode: "",
    deposit: 0,
    totalPayment: "",
    startDate: "",
    endDate: "",
  };

  const validateContract = {
    contractCode: Yup.string()
      .required()
      .matches(/^CT-[0-9]{4}$/, "Contract code must be CT-XXXX"),
    deposit: Yup.number().required().lessThan(
      Yup.ref("totalPayment"),
      "Deposit must be less than total payment!"
    ),
    totalPayment: Yup.number()
      .required()
      .moreThan(Yup.ref("deposit"), "Total payment must be greater than deposit!")
      .positive("Total payment must be a positive number !"),
    startDate: Yup.string().required(),
    endDate: Yup.string()
      .required()
      .test(
        "check-date",
        "End Date must be greater than start date!",
        function (value) {
          const { startDate } = this.parent;
          return new Date(startDate) < new Date(value);
        }
      ),
  };

  return (
    <div>
      <div>
        <div className="back_re">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">
                  <h2>Create Contract</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Formik
          initialValues={initValue}
          validationSchema={Yup.object(validateContract)}
          onSubmit={(values) => {
            handleSubmit(values);
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
                                      Contract Code
                                    </label>
                                    <Field
                                      name="contractCode"
                                      type="text"
                                      className="form-control form-control-lg"
                                    />
                                    <ErrorMessage
                                      name="contractCode"
                                      component="span"
                                      style={{ color: "red" }}
                                    ></ErrorMessage>
                                  </div>
                                  <div className="form-outline ">
                                    <label className="form-label">
                                      Deposit
                                    </label>
                                    <Field
                                      name="deposit"
                                      type="number"
                                      className="form-control form-control-lg "
                                    />
                                    <ErrorMessage
                                      name="deposit"
                                      component="span"
                                      style={{ color: "red" }}
                                    ></ErrorMessage>
                                  </div>
                                  <div className="form-outline">
                                    <label className="form-label">
                                      Total Payment
                                    </label>
                                    <Field
                                      className="form-control form-control-lg "
                                      type="number"
                                      name="totalPayment"
                                    />
                                    <ErrorMessage
                                      name="totalPayment"
                                      component="span"
                                      style={{ color: "red" }}
                                    ></ErrorMessage>
                                  </div>
                                </div>
                                <div className="col-md-6 mb-2">
                                  <div className="form-outline ">
                                    <label className="form-label">
                                      Start Date
                                    </label>
                                    <Field
                                      type="date"
                                      name="startDate"
                                      className="form-control form-control-lg"
                                    />
                                    <ErrorMessage
                                      name="startDate"
                                      component="span"
                                      style={{ color: "red" }}
                                    ></ErrorMessage>
                                  </div>
                                  <div className="form-outline">
                                    <label className="form-label">
                                      End Date
                                    </label>
                                    <Field
                                      name="endDate"
                                      className="form-control form-control-lg "
                                      type="date"
                                    />
                                    <ErrorMessage
                                      name="endDate"
                                      component="span"
                                      style={{ color: "red" }}
                                    ></ErrorMessage>
                                  </div>
                                  <div
                                    className="d-flex justify-content-end"
                                    style={{ marginTop: "20px" }}
                                  >
                                    <Link
                                      to="/contracts"
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
                                </div>
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
    </div>
  );
}
