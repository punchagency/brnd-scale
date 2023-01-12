import React, { useEffect, useRef, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayRange } from "react-modern-calendar-datepicker";
import CalenderChecker from "../assets/images/CalendarCheck.svg";

interface CalendarProps {
  setComponentDate: (value: string) => void;
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

const CalendarWrapper = ({ setComponentDate }: CalendarProps) => {
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
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });
  const [clickedAmount, setClickedAmount] = useState(0);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => {
    setShowCalendar(false);
  });
  useEffect(() => {
    if (selectedDayRange.from !== null && selectedDayRange.to !== null) {
      const dateText = `From ${selectedDayRange.from?.day} ${
        months[
          selectedDayRange.from?.month ? selectedDayRange.from?.month - 1 : 0
        ]
      } - ${selectedDayRange.to?.day} ${
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
        <img src={CalenderChecker} className="w-50" />
      </div>
      {showCalendar && (
        <div
          ref={wrapperRef}
          className="position-absolute"
          style={{ right: "0" }}
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
