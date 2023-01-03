import React from "react";

function ActiveIcon({color}:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
      viewBox="0 0 11 11"
    >
      <circle cx="5.5" cy="5.5" r="5.5" fill={color ? color : "#65DD2C"}></circle>
    </svg>
  );
}

export default ActiveIcon;
