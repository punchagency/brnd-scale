import React from "react";
import ListIcon from "../components/svgs/ListIcon";

function BrandsManage() {
  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>See your partners</h4>
        <button className="btn btn-primary btn-sm">Connect</button>
      </div>
      <div className="col-12 mt-4 d-flex">
        <button className="btn btn-primary btn-lg w-25 me-2">Brands</button>
        <button className="btn btn-dark btn-lg w-25 me-2">Publishers</button>
        <button className="btn btn-dark btn-lg w-25 me-2">Products</button>
        <button className="btn btn-dark btn-lg w-25">Orders</button>
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <span className="col d-inline d-flex align-items-center ">
              <ListIcon /> <span className="fs-5 ms-2">List of brands</span>
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandsManage;
