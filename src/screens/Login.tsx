import React, { FC, useEffect, useState } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import AuthLayout from "../containers/Layouts/AuthLayout";
import { userType } from "../types";
import AmazonLogo from '../assets/images/amazon.png';
import { selectUser, login, selectLoggedIn } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

interface Props {}

const Login: FC = ({}: Props) => {
  const userType = useAppSelector(selectUser);
  const loggedIn = useAppSelector(selectLoggedIn)
  const dispatch = useAppDispatch();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: ""
  })

  const onSubmit = () => {
    dispatch(login())
  }
  useEffect(() => {
    if(loggedIn) {

    }
  })

  const handleChange = (e: any) => {
    setFormInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    const postInput = {
      ...formInputs,
    };
    var url = new URL(process.env.REACT_APP_BASE_URL + "auth/login");
    fetch(url, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postInput),
    }).then(async (response) => {
      let res = await response.json();
      console.log(res, postInput);
      if (res.success) {
        dispatch(login())
      } else {
      }
    });
  };

  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";

  return (
    
      <div className="border rounded p-5">
        <p className="h5 mb-4">Login to your {userType} Account</p>
        <form className="w-100" >
          {loggedIn && <Navigate to="/" replace={true} />}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="email" className="form-control" id="username" value={formInputs.email} onChange={} />
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
            <Link to={"/auth/signup"} className="text-black-50 text-decoration-none">
              Sign up here
            </Link>
            <Link
              to={"forgot-password"}
              className="text-black-50 text-decoration-none"
            >
              Forgot Details?
            </Link>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <button type="submit" className="btn btn-secondary ms-auto me-auto" onClick={onSubmit}>
              Login
            </button>
          </div>
        </form>
        <div className="w-100 d-flex align-items-center justify-content-evenly mt-5">
          <p className="mt-auto mb-auto">Or sign in with</p>
          <a href="#"><img className="w-100 h-100" src={AmazonLogo} alt="amazon signup" /></a>
        </div>
      </div>

  );
};

export default Login;
