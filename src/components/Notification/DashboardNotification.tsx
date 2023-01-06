import React from "react";
import WarningCircle from "../svgs/WarningCircle";
interface DashboardNotificationProps {
  conversions: number;
  brands: number;
  publishers: number;
}
const DashboardNotification = ({
  conversions,
  brands,
  publishers,
}: DashboardNotificationProps) => {
  return (
    <div
      className="d-none w-100 position-absolute d-lg-flex gx-3 ms-auto me-auto justifiy-content-center align-items-center"
      style={{ top: 30 }}
    >
      <div
        className="w-50 w-lg-75 m-auto d-flex align-items-center rounded p-1 ps-3 pe-3"
        style={{ background: "#F2F2F2", maxWidth: "824px", fontSize: "0.874rem" }}
      >
        <WarningCircle />
        <p className="ms-5 text-center mt-auto mb-auto fw-light">
          Hi, Lead/Ecom network, You have{" "}
          <a href="">({conversions}) Conversions,</a>{" "}
          <a href="">({brands}) Brands,</a>{" "}
          <a href="">({publishers}) Publishers,</a>{" "}
          Pending for approval
        </p>
      </div>
    </div>
  );
};

export default DashboardNotification;
