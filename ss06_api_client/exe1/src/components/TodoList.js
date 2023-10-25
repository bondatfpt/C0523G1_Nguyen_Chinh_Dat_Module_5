import React from "react";
import { useEffect, useState } from "react";
import { getAll, add } from "../../src/service/TodoListService";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify";

export default function TodoList() {
  const [todoList, setTodoList] = useState();

  const fetchData = async () => {
    try {
      const todoList = await getAll();
      setTodoList(todoList);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleFormSubmit = (values) => {
    add(values);
    toast.success("Succes added");
  };
  if (!todoList) {
    return null;
  }
  const initValue = {
    title: "",
  };

  return (
    <div>
      <Formik
        initialValues={initValue}
        onSubmit={(values) => {
          handleFormSubmit(values);
          fetchData();
        }}
      >
        <section className="bg-image">
          <div className="mask d-flex align-items-center gradient-custom-3">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: 15 }}>
                    <div className="card-body p-5">
                      <div
                        style={{ textAlign: "center" }}
                        className="form-outline mb-4"
                      >
                        <h2>To Do List</h2>
                      </div>
                      <Form>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="tittle">
                            Tittle
                          </label>
                          <Field
                            type="text"
                            name="title"
                            className="form-control form-control-lg"
                            required
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <button
                            style={{
                              marginLeft: 110,
                              padding: 15,
                              border: "none",
                              borderRadius: 35,
                              width: "50%",
                            }}
                            id="submitButton"
                            type="submit"
                          >
                            Done
                          </button>
                        </div>
                      </Form>
                      <ul>
                        {todoList.map((item) => {
                          return <li key={item.id}>{item.title}</li>;
                        })}
                      </ul>
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
