import React, { useState } from "react";
import CalendarWrapper from "../components/Calendar";
import ArrowDown from "../components/svgs/ArrowDown";
import CalendarIcon from "../components/svgs/CalendarIcon";

function TestCard() {
  const [componentDate, setComponentDate] = useState("");
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-5 border">
            <p>Total Sales</p>
          </div>
          <div className="col-7 d-flex justify-content-between ps-0 border">
            <span className="" style={{ fontSize: "11px" }}>
              From 20 - 30 Nov
            </span>
            <div className="border"><CalendarIcon /></div>
            {/* <CalendarWrapper setComponentDate={setComponentDate} /> */}
          </div>
        </div>
        <div className="row">
          <div className="col-6 flex-column">
            <h4>$259.99</h4>
            <div className="w-100 d-flex justify-content-between">
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
          <div className="col-6">
            <div className="d-flex justify-content-between" style={{fontSize: '11px'}}><span>Yesterday</span><span>1.3k</span></div>
            <div className="d-flex justify-content-between" style={{fontSize: '11px'}}><span>Yesterday</span><span>1.3k</span></div>
            <div className="d-flex justify-content-between" style={{fontSize: '11px'}}><span>Yesterday</span><span>1.3k</span></div>
            <div className="d-flex justify-content-between" style={{fontSize: '11px'}}><span>Yesterday</span><span>1.3k</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
