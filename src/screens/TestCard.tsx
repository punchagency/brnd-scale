import React, { useState } from "react";
import CalendarWrapper from "../components/Calendar";
import ArrowDown from "../components/svgs/ArrowDown";
import CalendarIcon from "../components/svgs/CalendarIcon";
import DropdownIcon from "../components/svgs/DropdownIcon";

function TestCard() {
  const [componentDate, setComponentDate] = useState("");
  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-2">
          <div className="col-5 p-0  ">
            <p className="mb-0">Total Sales</p>
          </div>
          <div className="col-7 d-flex justify-content-between ps-0 ">
            <span className="mt-1" style={{ fontSize: "11px" }}>
              From 20 - 30 Nov
            </span>
            <div className="card p-1 px-auto" style={{height: "30px"}}>
                <CalendarIcon />
              </div>
            {/* <CalendarWrapper setComponentDate={setComponentDate} /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-6 flex-column">
            <h4>$259.99</h4>
            <div className="w-100 d-flex justify-content-between align-items-end">
              <div className="d-flex align-items-center">
                <ArrowDown />
                <span className="fw-light ms-2" style={{ fontSize: "0.75rem" }}>
                  25k
                </span>
              </div>
              <span
                className="rounded bg-success" style={{height: '9px', width: '9px'}}
              ></span>
            </div>
          </div>
          <div className="col-6 ps-0 ">
            <div className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between" style={{fontSize: '11px', marginBottom: "0.5px"}}><span>Yesterday</span><span>1.3k</span></div>
            <div className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between" style={{fontSize: '11px', marginBottom: "0.5px"}}><span>Yesterday</span><span>1.3k</span></div>
            <div className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between" style={{fontSize: '11px', marginBottom: "0.5px"}}><span>Yesterday</span><span>1.3k</span></div>
            <div className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between" style={{fontSize: '11px', marginBottom: "0.5px"}}><span>Yesterday</span><span>1.3k</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
