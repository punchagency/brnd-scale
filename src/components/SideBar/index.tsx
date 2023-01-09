import React from "react";
import { Link } from "react-router-dom";
import NavItemIcon from "../svgs/NavItemIcon";
import {
  selectUser,
  login,
  logout,
  selectLoggedIn,
} from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

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
                  <Link to="/manage-publishers" className="nav-link">
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
                  <Link to="/product-reports" className="nav-link">
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
    }
  };
  return (
    <div
      className={`d-flex flex-column bg-${sidebarBackground()} pt-5 justify-content-between ps-4`}
      style={{ height: "100%" }}
    >
      {renderSideBarList()}
      {/* <ul className="nav flex-column flex-grow-1">
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
            <a className="nav-link active text-white ps-2" href="/">
            Dashboard
            </a>
        </li>
        <li className="nav-item d-flex ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <a className="nav-link text-white ps-2" href="#">
            Manage
          </a>
          <ul className="nav flex-column">
            <li className="nav-item d-flex align-items-center ms-2">
              <span className="pb-1">
                <NavItemIcon />
              </span>
              <a className="nav-link text-white ps-2" href="#">
                Brands
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <a className="nav-link text-white ps-2" href="#">
            Products
          </a>
        </li>
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <a className="nav-link text-white ps-2" href="#">
            Orders
          </a>
        </li>
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <a className="nav-link text-white ps-2" href="#">
            Products
          </a>
        </li>
      </ul> */}

      {/* <ul className="nav flex-column mt-5 mb-3">
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <a className="nav-link text-white ps-2" href="#">
            Settings
          </a>
        </li>
      </ul> */}

      <ul className="text-white">
        <a
          href="#"
          className="nav-link"
          onClick={() => {
            dispatch(logout());
            navigate("/login");
          }}
        >
          Log Out
        </a>
      </ul>
    </div>
  );
}

export default SideBar;
