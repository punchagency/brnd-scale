import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormErrorMessage from "../../components/auth/FormErrorMessage";
import InputCode from "../../components/VerifyInput";
import AuthLayout from "../../containers/Layouts/AuthLayout";
import 'react-toastify/dist/ReactToastify.css';

const VerifyAccount = () => {
    const [loading, setLoading] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [formError, setFormError] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      if(verificationCode) {
        handleSubmit()
      }
    }, [verificationCode])
    const handleSubmit = () => {
      var url = new URL(process.env.REACT_APP_BASE_URL + "users/email-verify");
          fetch(url, {
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email_verification_token: verificationCode
            }),
          }).then(async (response) => {
            let res = await response.json();
            if (res.success) {
              toast('Email verified! please login with your credentials', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              navigate("/auth/login");
            } else {
              setFormError(true);

            }
          });

    }
  return (
      <div className="border rounded p-5 text-center">
        <p className="h5 mb-5 mt-5 fw-500">Verify your Account</p>
        <form className="w-100">
        {formError && <FormErrorMessage/>}
          <div className="mb-3">
            <label htmlFor="code" className="form-label h5 mb-3">
              Enter the code we sent to you
            </label>
            <InputCode
              length={6}
              label="Code Label"
              loading={loading}
              onComplete={(code) => {
                setVerificationCode(code)
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
  );
};

export default VerifyAccount;
