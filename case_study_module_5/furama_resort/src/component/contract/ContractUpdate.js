import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { update, findById } from "./service/ContractService";
import { useNavigate } from "react-router-dom";
import { getAll } from "./service/ContractService";

export default function ContractUpdate() {
  const [contractUpdate, setContractUpdate] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchData = async () => {
    const contractUpdate = await findById(id);
    setContractUpdate(contractUpdate);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleCheckContractCode = async (contractCode, id) => {
    const contractList = await getAll();
    const contract = contractList.find(
      (contract) => contract.contractCode === contractCode && contract.id != id
    );
    if (!contract) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async (values, id) => {
  
    
      const response = await update(values, id);
      if (response == 200) {
        toast.success("Success Updated");
        navigate("/contracts");
      } else {
        toast.warn("Something wrong here !");
      }
    
  };

  if (!contractUpdate) {
    return null;
  }

  const initValue = {
    id: contractUpdate.id,
    contractCode: contractUpdate.contractCode,
    deposit: contractUpdate.deposit,
    totalPayment: contractUpdate.totalPayment,
    startDate: contractUpdate.startDate,
    endDate: contractUpdate.endDate,
  };

  const validateContract = {
    contractCode: Yup.string()
      .required()
      .matches(/^CT-[0-9]{4}$/, "Contract code must be CT-XXXX"),
    deposit: Yup.number().max(
      Yup.ref("totalPayment"),
      "Deposit must be less than total payment!"
    ),
    totalPayment: Yup.number()
      .required()
      .min(Yup.ref("deposit"), "Total payment must be greater than deposit!")
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
                  <h2>Update Contract</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Formik
          initialValues={initValue}
          validationSchema={Yup.object(validateContract)}
          onSubmit={(values) => {
            handleSubmit(values, id);
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
