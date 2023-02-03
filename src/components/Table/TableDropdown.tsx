import React from "react";

const TableDropdown = ({value, setValue, data, width }:any) => {
  return (
    <div className="col-6 d-flex align-items-center">
      <select
        className="form-select"
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        //   setCurrentPage(1);
        }}
        style={{ width: `${width}` }}
      >
        {data.map((d:any, i:any) =>{
            return <option key={d.value} value={d.value}>{d.title}</option>
        })}
      </select>
      <span className="ms-3">entries in the page</span>
    </div>
  );
};

export default TableDropdown;
