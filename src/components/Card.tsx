import React, { FC, useEffect, useRef, useState } from "react";
import ArrowDown from "./svgs/ArrowDown";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayRange } from "react-modern-calendar-datepicker";
import CalenderChecker from "../assets/images/CalendarCheck.svg"
import DropdownIcon from "./svgs/DropdownIcon";
import CalendarWrapper from "./Calendar";

interface CardProps {
  title: string;
  value: string;
  date: string;
  main: boolean;
  reduce: boolean;
  extra: string;
}

const Card = ({ title, value, date, main, reduce, extra }: CardProps) => {
  const [componentDate, setComponentDate] = useState('')

  return (
    <div
      className="p-3 mt-2 rounded col col-md-5 col-lg-3  border"
      style={{ maxWidth: "380px", minWidth: "320px" }}
    >
      <div className="w-100 d-flex justify-content-between">
        <p className="fw-light">{title}</p>

        <div className="d-flex">
          <span className="fw-light me-3" style={{fontSize: "12px", lineHeight: "30px"}}>{componentDate || date}</span>
          <CalendarWrapper setComponentDate={setComponentDate}/>
        </div>
      </div>
      <div className="w-100 d-flex">
        <div className="col-5 pt-2">
          <p className="h1">{value}</p>
          <div className="mt-4">
            <div className="d-flex align-items-center">
              <ArrowDown />
              <span className="fw-light ms-2">{extra}</span>
            </div>
          </div>
        </div>
        <div className="col-7 rounded pb-4 " style={{ background: "#F8F8F8" }}>
          <DateInfo day="Yesterday" info="1.3K" />
          <DateInfo day="Current Month" info="1.3K" />
          <DateInfo day="Last Month" info="21.3K" />
        </div>
      </div>
    </div>
  );
};
export default Card;

interface DateInfoProps {
  day: string;
  info: string;
}

const DateInfo = ({ day, info }: DateInfoProps) => {
  return (
    <div className="w-100 fw-light p-1 ps-3 pe-3 justify-content-between d-flex border-bottom">
      <span>{day}</span>
      <span>{info}</span>
    </div>
  );
};
