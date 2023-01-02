import React from "react";
import NavItemIcon from "../svgs/NavItemIcon";

function SideBar() {
  return (
    <div className="d-flex flex-column bg-primary mt-5" style={{height: '90%'}}>
      <ul className="nav flex-column flex-grow-1">
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <div
            className="nav-link active text-white d-flex ps-2"
            aria-current="page"
          >
            Dashboard
          </div>
        </li>
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <a className="nav-link text-white ps-2" href="#">
            Brands
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
      </ul>
      
      <ul className="nav flex-column mt-5 mb-3">
        <li className="nav-item d-flex align-items-center ms-2">
          <span className="pb-1">
            <NavItemIcon />
          </span>
          <a className="nav-link text-white ps-2" href="#">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
