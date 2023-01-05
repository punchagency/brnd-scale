import React from "react";

function PaymentCard({top, value, bottom}:any) {
  return (
    <div
      className="card text-center my-2 px-3 flex-column justify-content-between py-2"
      style={{ height: "90%" }}
    >
      <span>{top}</span>
      <h2>{value}</h2>
      <span>{bottom}</span>
    </div>
  );
}

export default PaymentCard;
