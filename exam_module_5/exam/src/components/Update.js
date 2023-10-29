import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link,useNavigate } from "react-router-dom";
import { getTypes,create } from "../service/ProductService";
import {toast} from "react-toastify";

export default function Create() {
  const navigate = useNavigate();
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchDataTypes();
  }, []);

  const fetchDataTypes = async () => {
    const types = await getTypes();
    setTypes(types);
  };
  if (!types) {
    return null;
  }

  const handleSubmit = async (values) => {
    const respone = await create(values);
    toast.success("Success Created");
    navigate("/")
  }

  const initValue = {
    productCode: "",
    name: "",
    unit: "kg",
    price: "",
    type: JSON.stringify({
      id: 1,
      name: "Quả",
    }),
    harvestDate: "",
  };

  const validateProduct = {
    productCode: Yup.string()
      .required()
      .matches(/^MHH-[0-9]{4}$/, "Must be follow MHH-XXXX(X is number)"),
    name: Yup.string().required(),
    price: Yup.number().required().positive("Must be a positive number"),
    harvestDate: Yup.date().test(
      "check-date",
      "Must be greater than now",
      function (value) {
        return value > new Date();
      }
    ),
  };

  return (
    <div>
      <div className="body">
        <div className="row pt-2 m-0">
          <div className="col-md-3" />
          <div className="col-md-6 shadow p-0">
            <div className="form-control p-5 rounded-0">
              <div className="mb-5">
                <h2 className="text-primary">Create Product</h2>
              </div>
              <Formik
                initialValues={initValue}
                validationSchema={Yup.object(validateProduct)}
                onSubmit={(values)=>{
                  handleSubmit(values);
                }}
              >
                <Form>
                  <div className="row mb-3">
                    <label className="form-label col-sm-3">Product Code</label>
                    <div className="col-sm-9">
                      <Field
                        type="text"
                        name="productCode"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="productCode"
                        component="span"
                        style={{ color: "red" }}
                      ></ErrorMessage>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="form-label col-sm-3">Name</label>
                    <div className="col-sm-9">
                      <Field type="text" name="name" className="form-control" />
                      <ErrorMessage
                        name="name"
                        component="span"
                        style={{ color: "red" }}
                      ></ErrorMessage>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="form-label col-sm-3">Unit</label>
                    <div className="col-sm-9">
                      <Field as="select" name="unit" className="form-control">
                        <option value="kg">Kg</option>
                        <option value="quả">Quả</option>
                        <option value="củ">Củ</option>
                      </Field>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="form-label col-sm-3">Price</label>
                    <div className="col-sm-9">
                      <Field
                        type="number"
                        name="price"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="price"
                        component="span"
                        style={{ color: "red" }}
                      ></ErrorMessage>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="form-label col-sm-3">Type</label>
                    <div className="col-sm-9">
                      <Field as="select" name="type" className="form-control">
                        {types.map((item) => (
                          <option key={item.id} value={item}>
                            {item.name}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="form-label col-sm-3">Harvest Date</label>
                    <div className="col-sm-9">
                      <Field
                        name="harvestDate"
                        type="date"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="harvestDate"
                        component="span"
                        style={{ color: "red" }}
                      ></ErrorMessage>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="form-label col-sm-3"
                    ></label>
                    <div className="col-sm-9">
                      <Link
                        to="/"
                        className="btn btn-sm btn-secondary me-4 rounded-0"
                      >
                        Back
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary rounded-0"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
