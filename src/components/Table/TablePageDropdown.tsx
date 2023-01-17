import React from "react";

function TablePageDropdown({numOfRows, setNumOfRows, setCurrentPage}: any) {
  return (
    <>
      <select
        className="form-select"
        value={numOfRows}
        onChange={(e) => {
          setNumOfRows(Number(e.target.value));
          setCurrentPage(1);
        }}
        style={{ width: "29%" }}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <span className="ms-3">entries in the page</span>
    </>
  );
}

export default TablePageDropdown;
