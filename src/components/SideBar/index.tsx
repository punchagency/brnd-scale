import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavItemIcon from "../svgs/NavItemIcon";
import {
  selectUser,
  login,
  logout,
  selectLoggedIn,
} from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeAuthToken } from "../../config/auth";
import Cookies from "js-cookie";

export const renderSideBarList = (userType:string) => {
  switch (userType) {
    case "Agency":
      return (
        <ul className="text-white">
          <li className="mb-3">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="mb-3">
            Manage
            <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
              <li className="mb-3">
                <Link to="/publishers" className="nav-link">
                  Publishers
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/manage-brand" className="nav-link">
                  Brands
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/offers" className="nav-link">
                  Offers
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-3">
            Analyze
            <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
              <li>
                <Link to="/product-reports" className="nav-link">
                  Reporting
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-3">
            <Link to="/market-place" className="nav-link">
              Market Place
            </Link>
          </li>
        </ul>
      );

    case "Brand":
      return (
        <ul className="text-white">
          <li className="mb-3">
            <Link to="/" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/offers" className="nav-link">
              Offers
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/publishers" className="nav-link">
              Publishers
            </Link>
          </li>
          <li className="mb-3">
            Analyze
            <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
              <li>
                <Link to="/reports" className="nav-link">
                  Reporting
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-3">
            <Link to="/market-place" className="nav-link">
              Market Place
            </Link>
          </li>
        </ul>
      );
      
    case "Publisher":
      return (
        <ul className="text-white">
          <li className="mb-3">
            <Link to="/publisher" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/publisher/join-brand" className="nav-link">
              Offers
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/publisher/active-brands" className="nav-link" state={{ index: 1 }}>
              My Offers
            </Link>
          </li>
          <li className="mb-3">
            Analyze
            <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
              <li>
                <Link to="/publisher/reports" className="nav-link">
                  Reporting
                </Link>
              </li>
            </ul>
          </li>
          <li className="mb-3">
            <Link to="/market-place" className="nav-link">
              Market Place
            </Link>
          </li>
        </ul>
      );
  }
};

function SideBar() {
  let tempUser = useAppSelector(selectUser);
  const userType = Cookies.get('userType') || tempUser;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  return (
    <div
      className={`d-flex flex-column bg-dark pt-5 justify-content-between ps-4`}
      style={{ height: "100%" }}
    >
      {renderSideBarList(userType)}

      <ul className="text-white">
        <a
          href="#"
          className="nav-link"
          onClick={() => {
            removeAuthToken()
            dispatch(logout());
            navigate("/auth/login");
          }}
        >
          Log Out
        </a>
      </ul>
    </div>
  );
}

export default SideBar;
