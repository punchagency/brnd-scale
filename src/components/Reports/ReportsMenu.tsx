import React from "react";
import { Link, useLocation } from "react-router-dom";

function ReportsMenu() {
  const location = useLocation();
  return (
    <>
      <Link to="/product-reports" className={`btn ${location.pathname == '/product-reports' ? 'btn-primary' : 'btn-dark'} btn-lg w-25 me-2`}>
        Product Report
      </Link>
      <Link to="/publisher-reports" className={`btn ${location.pathname == '/publisher-reports' ? 'btn-primary' : 'btn-dark'} btn-lg w-25 me-2`}>
        Publisher Report
      </Link>
      <Link to="/payment-reports" className={`btn ${location.pathname == '/payment-reports' ? 'btn-primary' : 'btn-dark'} btn-lg w-25 me-2`}>
        Payments
      </Link>
    </>
  );
}

export default ReportsMenu;
