import React, { FC } from "react";
import Avatar from "./Avatar";
import Search from "../svgs/Search";
import { renderSideBarList } from "../SideBar";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";

const Navbar = ({ loggedIn }: any) => {
  const userType = useAppSelector(selectUser);
  return (
    <nav
      className="navbar navbar-dark position-relative fixed-top bg-body-tertiary bg-dark vh-10"
      style={{ height: "50px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white " href="/">
          BRNDScale
        </a>
        <div className="d-flex flex-column flex-lg-row">
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
          <div className="bg-dark">
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

            <div
              className="collapse navbar-collapse bg-dark"
              id="navbarSupportedContent"
            >
              {renderSideBarList(userType)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
