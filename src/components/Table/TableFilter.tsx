import React from "react";
import Funnel from "../svgs/Funnel";

function TableFilter({}: any) {
  return (
    <button type="button" className="btn btn-white">
      Filter
      <span className="ms-1">
        <Funnel />
      </span>
    </button>
  );
}

export default TableFilter;
