import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-body-tertiary bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          BRNDScale
        </a>
        <div className="d-flex flex-row">
          <ul className="navbar-nav me-5 mb-2 mb-lg-0 d-flex flex-row">
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
          <button
            className="navbar-toggler"
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
    </nav>
  );
};
export default Navbar;
