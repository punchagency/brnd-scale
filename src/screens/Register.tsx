import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "../containers/Layouts/AuthLayout";
import { userType } from "../types";
import AmazonLogo from "../assets/images/amazon.png";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/user/userSlice";
import MyIcon from "../components/svgs/MyIcon";

interface Props {}

const AuthPage: FC = ({}: Props) => {
  const userType = useAppSelector(selectUser);
  const [tabIndex, setTabIndex] = useState(0);
  const changeTabIndex = (e: React.MouseEvent) => {
    e.preventDefault();
    setTabIndex(1)

  }
  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";
  const formContent = () => {
    switch (userType) {
      case "Agency":
        if (tabIndex === 0) {
          return (
            <>
              <div className="mb-3">
                <label htmlFor="fName" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="fName" />
              </div>
              <div className="mb-3">
                <label htmlFor="lName" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="lName" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input type="email" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>

              <div className="w-100 mt-1 d-flex justify-content-center">
                <button
                  type="submit"
                  className="border-0 bg-white ms-auto me-auto"
                  onClick={changeTabIndex}
                >
                  <MyIcon />
                </button>
              </div>
            </>
          );
        }
        return (
          <>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Company Name
              </label>
              <input type="text" className="form-control" id="Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="url" className="form-label">
                Website URL
              </label>
              <input type="text" className="form-control" id="url" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label className="form-check-label fs-6" htmlFor="remember">
                <small>
                  By creating the form you agree to the terms and conditions
                </small>
              </label>
            </div>
            <div className="w-100 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-dark bg-dark ms-auto me-auto"
                >
                  Sign up
                </button>
              </div>
          </>
        );
      default:
        if (tabIndex === 1) {
          return (
            <>
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
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label fs-6" htmlFor="remember">
                  <small>
                    By creating the form you agree to the terms and conditions
                  </small>
                </label>
              </div>

              <div className="w-100 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-dark bg-dark ms-auto me-auto"
                >
                  Login
                </button>
              </div>
            </>
          );
        }
        return (
          <>
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
              <button
                type="submit"
                className="border-0 bg-white ms-auto me-auto"
                onClick={changeTabIndex}
              >
                <MyIcon />
              </button>
            </div>
          </>
        );
    }
  };

  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="border rounded p-5">
      <p className="h5 mb-4">Register your {userType} Account</p>
      <form className="w-100">
        {formContent()}
      </form>
    </div>
  );
};

export default AuthPage;
