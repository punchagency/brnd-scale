import React, { FC, useEffect, useRef, useState } from "react";
import ArrowDown from "../svgs/ArrowDown";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayRange } from "react-modern-calendar-datepicker";
import CalenderChecker from "../assets/images/CalendarCheck.svg"
import DropdownIcon from "../svgs/DropdownIcon";
import CalendarWrapper from "../Calendar";
import './Card.css'

interface CardProps {
  title: string;
  value: string;
  date: string;
  main: boolean;
  reduce: boolean;
  extra: string;
  onClick: () => void;
}

const Card = ({ title, value, date, main = false, reduce, extra, onClick }: CardProps) => {
  const [componentDate, setComponentDate] = useState<string | {from: string, to: string}>({from: '', to: ''});

  return (
    <div
      className={`p-3 pb-1 mt-2 g-2 rounded col border ${main? "card-active": ""}`}
      style={{   cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="w-100 d-flex justify-content-between">
        <p className="fw-light" style={{fontSize: "0.875rem", lineHeight: '1.875'}}>{title}</p>

        <div className="d-flex">
          <span className="fw-light me-3" style={{fontSize: "0.75rem", lineHeight: "30px"}}>{componentDate || date}</span>
          <CalendarWrapper setComponentDate={setComponentDate}/>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-between">
        <div className="col-5 pt-2">
          <p className="h1" style={{fontSize: '2.25rem', fontWeight: '400'}}>{value}</p>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <ArrowDown />
              <span className="fw-light ms-2" style={{fontSize: '0.75rem'}}>{extra}</span>
            </div>
            <span className={`rounded bg-${main?'success': 'secondary'}`} style={{height: '9px', width: '9px'}}></span>
          </div>
        </div>
        <div className="col-6 rounded pb-4 " style={{ background: "#F8F8F8" }}>
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
    <div className="w-100 fw-light p-1 ps-3 pe-3 justify-content-between d-flex border-bottom" style={{fontSize: '0.625rem'}}>
      <span>{day}</span>
      <span>{info}</span>
    </div>
  );
};
