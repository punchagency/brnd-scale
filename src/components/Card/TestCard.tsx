import React, { useEffect, useState } from "react";
import CalendarWrapper from "../Calendar";
import ActiveIcon from "../svgs/ActiveIcon";
import ArrowDown from "../svgs/ArrowDown";
import CalendarIcon from "../svgs/CalendarIcon";
import DropdownIcon from "../svgs/DropdownIcon";
import './Card.css'

interface CardProps {
  title: string;
  value: string;
  date: string | { from: string; to: string }
  main: boolean;
  reduce: boolean;
  extra: string;
  yesterday: string;
  currentMonth: string;
  lastMonth: string;
  onClick: () => void;
  setComponentDate: (value: string | { from: string; to: string }) => void;
}

function TestCard({
  title,
  value,
  date,
  main = false,
  reduce,
  extra,
  currentMonth,
  lastMonth,
  yesterday,
  setComponentDate,
  onClick,
}: CardProps) {
  // const [componentDate, setComponentDate] = useState<string | {from: string, to: string}>("");
  
  return (
    <div
      className={`card ${main ? "card-active" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="card-body">
        <div className="row mb-2">
          <div className="col-6 p-0  ">
            <p className="mb-0">{title}</p>
          </div>
          <div className="col-6 d-flex justify-content-end ps-0 ">
            <span className="mt-1 me-3" style={{ fontSize: "11px" }}>
              {typeof date === "string" && date}
            </span>
              <CalendarWrapper setComponentDate={setComponentDate} format={2} />
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-between">
            <h4>{value}</h4>
            <div className="w-100 mt-auto d-flex justify-content-between align-items-end">
              <div className="d-flex align-items-center">
                <ArrowDown />
                <span className="fw-light ms-2" style={{ fontSize: "0.75rem" }}>
                  {extra}
                </span>
              </div>
              <span className="">
                <ActiveIcon />
              </span>
            </div>
          </div>
          <div className="col-6 ps-0 ">
            <div
              className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between"
              style={{
                fontSize: "11px",
                marginBottom: "0.5px",
                minHeight: "20px",
              }}
            >
              <span>Yesterday</span>
              <span>{yesterday}</span>
            </div>
            <div
              className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between"
              style={{
                fontSize: "10px",
                marginBottom: "0.5px",
                minHeight: "20px",
              }}
            >
              <span>Current Month</span>
              <span>{currentMonth}</span>
            </div>
            <div
              className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between"
              style={{
                fontSize: "11px",
                marginBottom: "0.5px",
                minHeight: "20px",
              }}
            >
              <span>Last Month</span>
              <span>{lastMonth}</span>
            </div>
            <div
              className="d-flex rounded bg-light px-2 py-1 w-100 justify-content-between"
              style={{
                fontSize: "11px",
                marginBottom: "0.5px",
                minHeight: "20px",
              }}
            >
              <span> </span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestCard;
