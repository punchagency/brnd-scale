import React, { FC } from "react";
import Avatar from "./Avatar";
import Search from "../svgs/Search";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, selectUser, setUserType } from "../../features/user/userSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userType } from "../../types";
import Cookies from "js-cookie";

const Navbar = ({ loggedIn }: any) => {
  let tempUser = useAppSelector(selectUser);
  const userType = Cookies.get('userType') || tempUser;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onClick = (value: userType) => {
    dispatch(setUserType(value));
  };

  const renderSideBarList = (userType: string) => {
    switch (userType) {
      case "Agency":
        return (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-lg-none">
            <li className="mb-3 nav-item me-5">
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="mb-3 text-white">
              Manage
              <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
                <li className="mb-3 nav-item me-5">
                  <Link to="/publishers" className="nav-link">
                    Publishers
                  </Link>
                </li>
                <li className="mb-3 nav-item me-5">
                  <Link to="/manage-brand" className="nav-link">
                    Brands
                  </Link>
                </li>
                <li className="mb-3 nav-item me-5">
                  <Link to="/offers" className="nav-link">
                    Offers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mb-3 nav-item me-5 text-white">
              Analyze
              <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
                <li className="mb-3 nav-item me-5">
                  <Link to="/product-reports" className="nav-link">
                    Reporting
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="mb-3 nav-item me-5 mt-2"
              onClick={() => {
                dispatch(logout());
                navigate("/auth/login");
              }}
            >
              <Link to="#" className="nav-link">
                Log Out
              </Link>
            </li>
          </ul>
        );

      case "Brand":
        return (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-lg-none">
            <li className="mb-3 nav-item me-5">
              <Link to="/" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="mb-3 nav-item me-5">
              <Link to="/offers" className="nav-link">
                Offers
              </Link>
            </li>
            <li className="mb-3 nav-item me-5">
              <Link to="/publishers" className="nav-link">
                Publishers
              </Link>
            </li>
            <li className="text-white">
              Analyze
              <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
                <li className="mb-3 nav-item me-5">
                  <Link to="/reports" className="nav-link">
                    Reporting
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="mb-3 nav-item me-5 mt-2"
              onClick={() => {
                dispatch(logout());
                navigate("/auth/login");
              }}
            >
              <Link to="#" className="nav-link">
                Log Out
              </Link>
            </li>
          </ul>
        );

      case "Publisher":
        return (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-lg-none">
            <li className="mb-3 nav-item me-5">
              <Link to="/publisher" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="mb-3 nav-item me-5">
              <Link to="/publisher/offers" className="nav-link">
                Offers
              </Link>
            </li>
            <li className="mb-3 nav-item me-5">
              <Link to="/publishers" className="nav-link">
                My Offers
              </Link>
            </li>
            <li className="text-white">
              Analyze
              <ul className="mt-3" style={{ borderLeft: "1px solid #C2BDBD" }}>
                <li className="nav-item me-5">
                  <Link to="/publisher/reports" className="nav-link">
                    Reporting
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="mb-3 nav-item me-5 mt-2"
              onClick={() => {
                dispatch(logout());
                navigate("/auth/login");
              }}
            >
              <Link to="#" className="nav-link">
                Log Out
              </Link>
            </li>
          </ul>
        );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          BRNDCommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {location.pathname.includes("auth") ? (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <button
                  className="nav-link text-white bg-dark border-0"
                  aria-current="page"
                  onClick={() => onClick("Agency")}
                  type="button"
                >
                  Agency
                </button>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link text-white" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          ) : (
            renderSideBarList(userType)
          )}
          {location.pathname.includes("auth") ? null : (
            <>
              {/* <form className="d-flex align-items-center my-auto ms-lg-auto">
                <input
                  type="text"
                  className="form-control rounded-pill text-white border border-dark"
                  placeholder=""
                  aria-label=""
                  style={{ backgroundColor: "#323436" }}
                  id="navbarSearch"
                />
                <span
                  className=""
                  id="navbarSearchIcon"
                  style={{ marginLeft: "-14%" }}
                >
                  <Search />
                </span>
              </form>
              <div className="my-auto ms-lg-5 mt-3">
                <Avatar />
              </div> */}
            </>
          )}
          <div className="bg-dark ms-5 ms-auto d-block">
            <button
              className="navbar-toggler d-none d-lg-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
