import React, { useState } from "react";
import AuthLayout from "../containers/Layouts/AuthLayout";
import { userType } from "../types";
import MyIcon from "./MyIcon";


function RegisterStart() {
  const [userType, setUserType] = useState<userType>("Publisher");
  return (
    <AuthLayout setUserType={setUserType} userType={userType}>
      <div className="border rounded p-5">
        <p className="h5 mb-4">Register your Account</p>
        <form className="w-100">
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="address" />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input type="text" className="form-control" id="country" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>

          <div className="w-100 mt-1 d-flex justify-content-center">
            <button type="submit" className="border-0 bg-white ms-auto me-auto">
              <MyIcon />
            </button>
          </div>
          <div className="d-flex justify-content-between mt-3 mb-4">
            <a href="/signup" className="text-black text-decoration-none">
              <strong>Go to Login page</strong>
            </a>
            <a
              href="forgot-password"
              className="text-black text-decoration-none"
            >
              <strong>Forgot Details?</strong>
            </a>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default RegisterStart;
