import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "../containers/Layouts/AuthLayout";
import { userType } from "../types";
import AmazonLogo from '../assets/images/amazon.png';

interface Props {}

const Login: FC = ({}: Props) => {
  const [userType, setUserType] = useState<userType>("Publisher");
  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";

  return (
    <AuthLayout setUserType={setUserType} userType={userType}>
      <div className="border rounded p-5">
        <p className="h5 mb-4">Login to your {userType} Account</p>
        <form className="w-100">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="email" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label fs-6" htmlFor="remember">
              Remember me
            </label>
          </div>
          <div className="d-flex justify-content-between mt-3 mb-4">
            <a href="/signup" className="text-black-50 text-decoration-none">
              Sign up here
            </a>
            <a
              href="forgot-password"
              className="text-black-50 text-decoration-none"
            >
              Forgot Details?
            </a>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button type="submit" className="btn btn-secondary ms-auto me-auto">
              Login
            </button>
          </div>
        </form>
        <div className="w-100 d-flex align-items-center justify-content-evenly mt-5">
          <p className="mt-auto mb-auto">Or sign in with</p>
          <a href="#"><img className="w-100 h-100" src={AmazonLogo} alt="amazon signup" /></a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
