import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { userType } from "../../types";
import { selectUser, setUserType } from "../../features/user/userSlice";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
interface AuthLayoutProps {
  children?: React.ReactNode;
  userType?: userType;
  setUserType?: (value: userType) => void;
  message?: string;
}

const AuthLayout = ({ children, message }: AuthLayoutProps) => {
  const dispatch = useAppDispatch();
  const userType = useAppSelector<userType>(selectUser);
  const location = useLocation();
  const onClick = (value: userType) => {
    dispatch(setUserType(value));
  };
  return (
    <div className="container-lg d-flex flex-row align-items-center justify-content-between mt-5">
      <div className="d-none d-md-block col-6 col-lg-7 pe-2">
        <p className="fw-light mb-4">Welcome , Get Affliated with</p>
        <p className="h1 mb-4">BRNDScale</p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        {userType === "Agency" ? (
          <div className="d-flex align-items-center">
            <div className="d-flex justify-content-between">
              <span
                className="rounded me-3"
                style={{ width: "88px", height: "15px", background: "#0064F6" }}
              ></span>
              <span
                className="rounded me-3"
                style={{ width: "88px", height: "15px", background: "#0064F6" }}
              ></span>
              <span
                className="rounded"
                style={{ width: "88px", height: "15px", background: "#0064F6" }}
              ></span>
            </div>
            <button
              type="button"
              onClick={() => onClick("Publisher")}
              className={`btn btn-dark me-3 p-2 ps-3 pe-3 ms-5`}
            >
              Brand & publishers
            </button>
          </div>
        ) : location?.pathname?.includes("auth/verify-account") ? (
          <p className="fw-light">Verify your Accout to start your program</p>
        ) : (
          <div className="d-flex w-100 justify-content-between">
            <p className="fw-light mt-auto mb-auto">Choose your role</p>

            <div className="d-flex w-75">
              <button
                type="button"
                onClick={() => onClick("Publisher")}
                className={`btn btn-${
                  userType?.includes("Publisher") ? "primary" : "secondary"
                } me-3 w-50 p-2`}
              >
                Publisher
              </button>
              <button
                type="button"
                onClick={() => onClick("Brand")}
                className={`btn btn-${
                  userType?.includes("Brand") ? "primary" : "secondary"
                } w-50 p-2`}
              >
                Brand/Seller
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="col-12 col-md-5 col-lg-5 d-flex justify-content-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
