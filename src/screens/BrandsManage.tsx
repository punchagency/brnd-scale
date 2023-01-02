import React from "react";
import ListIcon from "../components/svgs/ListIcon";
import Table from "../components/Table";
import TempTable from "../components/Table/TempTable";

const headers = [
  "Brand Name",
  "Campaign Name",
  "Tag/Key Link",
  "Country",
  "Category",
  "Store",
  "Status",
  "Growth",
  "Commissions Officer",
  "Conversions Rate",
  "Total Products",
  "Permissions",
];

const tableData = [
  {
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
  },
];

function BrandsManage() {
  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>See your partners</h4>
        <button className="btn btn-primary btn-sm">Connect</button>
      </div>
      <div className="col-12 mt-4 d-flex">
        <button className="btn btn-primary btn-lg w-25 me-2">Brands</button>
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
      <div className="col-12">
        <TempTable />
      </div>
    </div>
  );
}

export default BrandsManage;
