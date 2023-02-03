import React from "react";

const Dropdown = ({ value, setValue, data, width, bootstrapClass }: any) => {
  return (
    <select
      className={`form-select ${bootstrapClass}`}
      value={value}
      onChange={(e) => {
        setValue(Number(e.target.value));
        //   setCurrentPage(1);
      }}
      style={{ width: `${width}` }}
    >
      {data.map((d:any, i:any) => {
        return <option key={d.value} value={d.value}>{d.title}</option>;
      })}
    </select>
  );
};

export default Dropdown;
