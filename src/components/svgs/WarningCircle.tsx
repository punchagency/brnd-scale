import React from "react";

function WarningCircle() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
        stroke="#1E2124"
        stroke-miterlimit="10"
      />
      <path
        d="M9 5.625V9.5625"
        stroke="#1E2124"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 12.9375C9.46599 12.9375 9.84375 12.5597 9.84375 12.0938C9.84375 11.6278 9.46599 11.25 9 11.25C8.53401 11.25 8.15625 11.6278 8.15625 12.0938C8.15625 12.5597 8.53401 12.9375 9 12.9375Z"
        fill="#1E2124"
      />
    </svg>
  );
}

export default WarningCircle;
