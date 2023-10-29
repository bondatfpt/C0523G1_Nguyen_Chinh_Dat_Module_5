import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, NavLink } from "react-router-dom";

export default function Create() {
  return (
    <div>
     <div className="body">
  <div className="row pt-2 m-0">
    <div className="col-md-3" />
    <div className="col-md-6 shadow p-0">
      <div className="form-control p-5 rounded-0">
        <div className="mb-5">
          <h2 className="text-primary">Create Customer</h2>
        </div>
        <form>
          <div className="row mb-3">
            <label className="form-label col-sm-3">
              Name
            </label>
            <div className="col-sm-9">
              <input type="text" id="name" name="name" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlfor="dateOfBirth" className="form-label col-sm-3">
              Date of birth
            </label>
            <div className="col-sm-9">
              <input type="date" id="dateOfBirth" name="dateOfBirth" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label className="form-label col-sm-3">Gender</label>
            <div className="col-sm-9">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" defaultValue={1} />
                <label className="form-check-label" htmlfor="inlineRadio1">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" defaultValue={0} />
                <label className="form-check-label" htmlfor="inlineRadio2">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlfor="idCard" className="form-label col-sm-3">
              Id card
            </label>
            <div className="col-sm-9">
              <input type="text" id="idCard" name="idCard" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlfor="phoneNumber" className="form-label col-sm-3">
              Phone number
            </label>
            <div className="col-sm-9">
              <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" required />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlfor="email" className="form-label col-sm-3">
              Email
            </label>
            <div className="col-sm-9">
              <input name="email" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlfor="address" className="form-label col-sm-3">
              Address
            </label>
            <div className="col-sm-9">
              <input name="address" className="form-control" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlfor="address" className="form-label col-sm-3">
            </label>
            <div className="col-sm-9">
              <Link to="/" className="btn btn-sm btn-secondary me-4 rounded-0">
                Back
              </Link>
              <button type="submit" className="btn btn-sm btn-primary rounded-0">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-3">
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
