import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "../containers/Layouts/AuthLayout";
import { userType } from "../types";
import AmazonLogo from '../assets/images/amazon.png';

interface Props {}

const AuthPage: FC = ({}: Props) => {
  const [userType, setUserType] = useState<userType>("Publisher");
  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";

  const [showLogin, setShowLogin] = useState(true);

  return (
      <div className="border rounded p-5">
        <p className="h5 mb-4">Register your Account</p>
        <form className="w-100">
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input type="text" className="form-control" id="Country" />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="city" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label fs-6" htmlFor="remember">
              <small>By creating the form you agree to the terms and conditions</small>
            </label>
          </div>
          
          <div className="w-100 d-flex justify-content-center">
            <button type="submit" className="btn btn-dark bg-dark ms-auto me-auto">
              Login
            </button>
          </div>
          <div className="d-flex justify-content-between mt-3 mb-4">
            <a href="/login" className="text-black-50 text-decoration-none">
              <strong>Go to Login page</strong>
            </a>
            <a
              href="forgot-password"
              className="text-black-50 text-decoration-none"
            >
              Forgot Details?
            </a>
          </div>
        </form>
      </div>

  );
};

export default AuthPage;
