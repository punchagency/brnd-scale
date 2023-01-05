import React from "react";
import { Link } from "react-router-dom";
import NavItemIcon from "../svgs/NavItemIcon";

function SideBar() {
  return (
    <div
      className="d-flex flex-column bg-primary mt-5 justify-content-between" 
      style={{ height: "80%" }}
    >
      <ul className="text-white">
        <li className="mb-3"><Link to="/" className="nav-link">Dashboard</Link></li>
        <li className="mb-3">
          Manage
          <ul>
            <li><Link to="/manage-publishers" className="nav-link">Publishers</Link></li>
            <li><Link to="/manage-brand" className="nav-link">Brands</Link></li>
            <li><Link to="/offers" className="nav-link">Offers</Link></li>
          </ul>
        </li>
        <li>
          Analyze
          <ul>
            <li><Link to="/product-reports" className="nav-link">Reporting</Link></li>
          </ul>
        </li>
      </ul>
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
      <Link to="/login" className="nav-link">Log Out</Link>
      </ul>
    </div>
  );
}

export default SideBar;
