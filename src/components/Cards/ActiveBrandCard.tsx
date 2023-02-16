import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import ActiveIcon from "../svgs/ActiveIcon";

function ActiveBrandCard({ image, earning, commission, title }: any) {
  const navigate = useNavigate();

  const changePage = () => {
    navigate("/publisher/brand-details");
  };
  return (
    <div className="card" style={{ height: "317px" }}>
      <div className="card-body">
        <div className="row flex-column">
          <div className="col">
            <p style={{ fontSize: "14px", color: "#605454", height: "20px" }}>{title.substring(0, 30)}</p>
          </div>
          <div
            className="col border"
            style={{ maxHeight: "115px", overflow: "hidden" }}
            onClick={changePage}
          >
            <Link to={"/publisher/brand-details"} className="">
            <img src={image} className="img img-fluid" style={{height: '100%'}}  /></Link>
          </div>
          <div
            className="col d-flex justify-content-between mt-3"
            style={{ fontSize: "10px", color: "#6C6262" }}
          >
            <span className="">
              Earned : {earning} <ActiveIcon />
            </span>
            <span className="">
              Commission : {commission} <ActiveIcon />
            </span>
          </div>
          <div className="col flex-column mt-3">
            <button
              className="btn btn-outline-light border border-dark text-dark d-block w-100"
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              onClick={()=>{navigate("/publisher/brand-details")}}
            >
              Dashboard
            </button>
            <button onClick={()=>navigate("/publisher/brand-products")} className="btn btn-outline-light border border-dark text-dark mt-2 d-block w-100">
              Promote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveBrandCard;
