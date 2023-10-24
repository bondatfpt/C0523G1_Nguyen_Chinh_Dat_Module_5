import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function MedicalDeclarationForm() {
  const initValue = {
    name: "",
    identityNumber: "",
    birthday: "",
    gender: "Nam",
    country: "",
    company: "",
    position: "",
    province: "",
    district: "",
    ward: "",
    numberAddress: "",
    phone: "",
    email: "",
    bhyt: false,
    cross: "",
    signal: false,
    contact: false,
  };
  const handleFormSubmit = (values) => {
    toast.success("Add contact successfully!!!");
  };
  const validateObject = {
    name: Yup.string().required("Không được để trống!"),
    identityNumber: Yup.string().required("Không được để trống!"),
    birthday: Yup.date().min("1900-01-01", "Năm sinh phải lớn 1900"),
    country: Yup.string().required("Không được để trống!"),
    province: Yup.string().required("Không được để trống !"),
    district: Yup.string().required("Không được để trống !"),
    ward: Yup.string().required("Không được để trống !"),
    numberAddress: Yup.string().required("Không được để trống !"),
    phone: Yup.string().required("Không được để trống !"),
    email: Yup.string()
      .required("Không được để trống !")
      .email("Email sai định dạng"),
  };

  return (
    <div>
      <Formik
        initialValues={initValue}
        onSubmit={handleFormSubmit}
        validationSchema={Yup.object(validateObject)}
      >
        <section
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
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
                              <label className="form-label">Họ và tên</label>
                              <Field
                                className="form-control form-control-lg"
                                name="name"
                              />
                              <ErrorMessage
                                name="name"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">Số CMND</label>
                              <Field
                                type="number"
                                name="identityNumber"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="identityNumber"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">Năm sinh</label>
                              <Field
                                type="date"
                                name="birthday"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="birthday"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">Giới tính</label>
                              <select
                                className="form-control form-control-lg"
                                name="gender"
                              >
                                <option>Nam</option>
                                <option>Nữ</option>
                              </select>
                            </div>
                            <div className="form-outline">
                              <label className="form-label">Quốc tịch</label>
                              <Field
                                type="text"
                                name="country"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="country"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">
                                Công ty làm việc
                              </label>
                              <Field
                                type="text"
                                name="company"
                                className="form-control form-control-lg "
                              />
                            </div>
                            <div className="form-outline">
                              <label className="form-label">
                                Bộ phận làm việc
                              </label>
                              <Field
                                name="position"
                                className="form-control form-control-lg "
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-2">
                            <div className="form-outline">
                              <label className="form-label">Tỉnh thành</label>
                              <Field
                                className="form-control form-control-lg"
                                name="province"
                              />
                              <ErrorMessage
                                name="province"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">Quận huyện</label>
                              <Field
                                type="text"
                                name="district"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="district"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">Phường xã</label>
                              <Field
                                type="text"
                                name="ward"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="ward"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline">
                              <label className="form-label">
                                Số nhà, phố, tổ dân phố/thôn/đội
                              </label>
                              <Field
                                type="text"
                                name="numberAddress"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="numberAddress"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>

                            <div className="form-outline">
                              <label className="form-label">Điện thoại</label>
                              <Field
                                type="text"
                                name="phone"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="phone"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline ">
                              <label className="form-label">Email</label>
                              <Field
                                type="text"
                                name="email"
                                className="form-control form-control-lg "
                              />
                              <ErrorMessage
                                name="email"
                                component="span"
                                style={{ color: "red" }}
                              ></ErrorMessage>
                            </div>
                            <div className="form-outline">
                              <label className="form-label">
                                Có thẻ bảo hiểm y tế
                              </label>
                              <Field name="bhyt" type="checkbox" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-outline ">
                            <label className="form-label">
                              Trong vòng 14 ngày qua, anh/chị có đến quốc
                              gia/vùng lãnh thổ nào(Có thể đi qua nhiều quốc
                              nha)?
                            </label>
                            <Field
                              type="text"
                              name="cross"
                              className="form-control form-control-lg "
                            />
                          </div>
                          <div className="form-outline ">
                            <label className="form-label">
                              Trong vòng 14 ngày qua, anh/chị có thấy xuất hiện
                              dấu hiệu nào sau đây không?
                            </label>{" "}
                            <br />
                            <Field type="checkbox" name="signal1" /> Sốt <br />
                            <Field type="checkbox" name="signal2" /> Ho <br />
                            <Field type="checkbox" name="signal3" /> Khó thở{" "}
                            <br />
                            <Field type="checkbox" name="signal4" /> Viêm phổi{" "}
                            <br />
                            <Field type="checkbox" name="signal5" /> Đau họng{" "}
                            <br />
                            <Field type="checkbox" name="signal6" /> Mệt mỏi{" "}
                            <br />
                          </div>
                          <div className="form-outline ">
                            <label className="form-label">
                              Trong vòng 14 ngày qua, anh/chị có tiếp xúc với?
                            </label>{" "}
                            <br />
                            <Field type="checkbox" name="contact1" /> Người bệnh
                            hoặc nghi ngờ mắc bệnh Covid-19 <br />
                            <Field type="checkbox" name="contact2" /> Người từ
                            nước có bệnh Covid-19 <br />
                            <Field type="checkbox" name="contact3" /> Người có
                            biểu hiện (Sốt, ho, khó thở,viêm phổi) <br />
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
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
                            Hoàn thành
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
  );
}
