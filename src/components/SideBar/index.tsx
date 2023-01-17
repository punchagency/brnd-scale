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

function SideBar() {
  const userType = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const renderSideBarList = () => {
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
            <li>
              Analyze
              <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
                <li>
                  <Link to="/reports" className="nav-link">
                    Reporting
                  </Link>
                </li>
              </ul>
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
              <Link to="/publisher/offers" className="nav-link">
                Offers
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/publishers" className="nav-link">
                My Offers
              </Link>
            </li>
            <li>
              Analyze
              <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
                <li>
                  <Link to="/publisher/reports" className="nav-link">
                    Reporting
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        );
    }
  };
  const sidebarBackground = () => {
    switch (userType) {
      case "Agency":
        return "primary";
      case "Brand":
        return "dark";
      case "Publisher":
        return "";
    }
  };
  return (
    <div
      className={`d-flex flex-column bg-dark pt-5 justify-content-between ps-4`}
      style={{ height: "100%" }}
    >
      {renderSideBarList()}

      <ul className="text-white">
        <a
          href="#"
          className="nav-link"
          onClick={() => {
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
