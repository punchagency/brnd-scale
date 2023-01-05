import React, { FC } from "react";
import Avatar from "./Avatar";
import Search from "../svgs/Search";

const Navbar = ({ loggedIn }: any) => {
  return (
    <nav className="navbar navbar-dark position-relative fixed-top bg-body-tertiary bg-dark vh-10" style={{height: '50px'}}>
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          BRNDScale
        </a>
        <div className="d-flex flex-row">
          {loggedIn ? (
            <div className="navbar-nav me-5 mb-2 mb-lg-0 d-flex flex-row">
              <div className="flex-nowrap d-flex align-items-center my-auto">
                <input
                  type="text"
                  className="form-control rounded-pill text-white border border-dark"
                  placeholder=""
                  aria-label=""
                  style={{ backgroundColor: "#323436" }}
                />
                <span className="" style={{ marginLeft: "-14%" }}>
                  <Search />
                </span>
              </div>
              <div className="my-auto ms-5 ">
                <Avatar />
              </div>
            </div>
          ) : (
            <>
              <ul className="navbar-nav me-5 mb-2 mb-lg-0 d-flex flex-row">
                <li className="nav-item me-5">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="#"
                  >
                    About us
                  </a>
                </li>
                <li className="nav-item me-5">
                  <a className="nav-link text-white" href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </>
          )}
          <div>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
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
