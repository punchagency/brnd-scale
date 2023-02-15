import React, { useEffect, useRef, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayRange } from "react-modern-calendar-datepicker";
import CalenderChecker from "../assets/images/CalendarCheck.svg";
import CalendarIcon from "./svgs/CalendarIcon";

interface CalendarProps {
  setComponentDate: (value: string | { from: string; to: string }) => void;
  format?: 1 | 2;
}

function useOutsideAlerter(ref: any, callbackFunc: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackFunc && callbackFunc();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const getDefaultRange = ()=>{
  
  let date = new Date()

  const defaultTo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  // date.setDate(1)
  const defaultFrom = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: 1,
  };

  return {
    from: defaultFrom,
    to: defaultTo,
  };
}

const CalendarWrapper = ({ setComponentDate, format = 1 }: CalendarProps) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [showCalendar, setShowCalendar] = useState<Boolean>(false);
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>(getDefaultRange());
  const [clickedAmount, setClickedAmount] = useState(0);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setShowCalendar(false);
  });
  useEffect(() => {
    console.log(selectedDayRange);
    if(selectedDayRange.from !== null &&
      selectedDayRange.to !== null &&
      format === 2){
      let from = `${/*selectedDayRange?.from?.year*/ 2020 || ""}-${
        (selectedDayRange?.from?.month || 0) < 10
          ? 0 + "" + selectedDayRange?.from?.month
          : selectedDayRange?.from?.month
      }-${
        (selectedDayRange?.from?.day || "") < 10
          ? 0 + "" + selectedDayRange?.from?.day
          : selectedDayRange?.from?.day
      }`;
      let to = `${selectedDayRange?.to?.year || ""}-${
        (selectedDayRange?.to?.month || "") < 10
          ? 0 + "" + selectedDayRange?.to?.month
          : selectedDayRange?.to?.month
      }-${
        (selectedDayRange?.to?.day || "") < 10
          ? 0 + "" + selectedDayRange?.to?.day
          : selectedDayRange?.to?.day
      }`;

      setComponentDate({ from: from, to: to });
    }else {
      const dateText = `From ${selectedDayRange.from?.day} ${
        months[
          selectedDayRange.from?.month ? selectedDayRange.from?.month - 1 : 0
        ]
      } - ${selectedDayRange.to?.day ? selectedDayRange.to?.day : ""} ${
        months[selectedDayRange.to?.month ? selectedDayRange.to?.month - 1 : 0]
      }`;
      setComponentDate(dateText);
    } 
  }, [selectedDayRange]);
  return (
    <div className="position-relative">
      <div
        className="btn border p-0 pb-1"
        style={{ width: "35px" }}
        onClick={() => {
          if (clickedAmount === 0) {
            setShowCalendar(true);
            setClickedAmount(1);
          } else if (clickedAmount === 1) {
            setShowCalendar(false);
            setClickedAmount(0);
          }
        }}
      >
        <CalendarIcon />
        {/* <img src={CalenderChecker} className="w-50" /> */}
      </div>
      {showCalendar && (
        <div
          ref={wrapperRef}
          className="position-absolute"
          style={{ right: "-70px" }}
        >
          <Calendar
            value={selectedDayRange}
            onChange={(e: DayRange) => setSelectedDayRange(e)}
            shouldHighlightWeekends
          />
        </div>
      )}
    </div>
  );
};

export default CalendarWrapper;
