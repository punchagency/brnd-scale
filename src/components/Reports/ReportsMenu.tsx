import React from "react";
import { Link } from "react-router-dom";

function ReportsMenu() {
  return (
    <>
      <Link to="/product-reports" className="btn btn-primary btn-lg w-25 me-2">
        Product Report
      </Link>
      <Link to="/publisher-reports" className="btn btn-dark btn-lg w-25 me-2">
        Publisher Report
      </Link>
      <Link to="/payment-reports" className="btn btn-dark btn-lg w-25 me-2">
        Payments
      </Link>
    </>
  );
}

export default ReportsMenu;
