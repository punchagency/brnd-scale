import React, { useState } from "react";
import InputCode from "../components/VerifyInput";
import AuthLayout from "../containers/Layouts/AuthLayout";

const VerifyAccount = () => {
    const [loading, setLoading] = useState(false);
  return (
    <AuthLayout message={"Verify your Accout to start your program"}>
      <div className="border rounded p-5 text-center">
        <p className="h5 mb-5 mt-5 fw-500">Verify your Account</p>
        <form className="w-100">
          <div className="mb-3">
            <label htmlFor="code" className="form-label h5 mb-3">
              Enter the code we sent to you
            </label>
            <InputCode
              length={5}
              label="Code Label"
              loading={loading}
              onComplete={(code) => {
                setLoading(true);
                setTimeout(() => setLoading(false), 10000);
              }}
            />
          </div>
          <div className="d-flex justify-content-between mt-3 mb-4">
            <a href="/login" className="text-black-50 text-decoration-none">
              Go to Login page
            </a>
            <a
              href="forgot-password"
              className="text-black-50 text-decoration-none"
            >
              Forgot Details?
            </a>
          </div>
          <div className="w-100 d-flex justify-content-center mb-5">
            <button type="submit" className="btn btn-primary ms-auto me-auto">
              Register
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default VerifyAccount;
