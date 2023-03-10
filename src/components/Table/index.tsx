import React, { useState } from "react";

// import { handleCheck, checkAll } from "./TableFunctions";

const Table = ({
  tableData,
  displayLabels,
  headers,
  tableWidth,
  hideCheckbox,
  filterData,
  cards,
  toolbar,
  numOfRows,
  currentPage,
  setTableData = () => {},
  footer,
}: any) => {
  const [searchString, setSearchString] = useState("");

  const handleCheck = (
    id: any,
    value: boolean,
    setTableData: (data: any) => void
  ) => {
    setTableData((prev: any) =>
      prev.map((row: any) => {
        return row.id === id ? { ...row, checked: value } : { ...row };
      })
    );
  };

  const checkAll = (value: boolean, setTableData: (data: any) => void) => {
    setTableData((prev: any) =>
      prev.map((row: any) => {
        return { ...row, checked: value };
      })
    );
  };
  const displayData = () => {
    //determine the rows to display
    let data = tableData ?? []
    return data?.map((row: any, index: number) => {
      return (
        <tr key={index}>
          <td key={row.id} className={`${hideCheckbox ? "d-none" : undefined}`}>
            <input
              type="checkbox"
              onChange={(e) =>
                handleCheck(row.id, e.target.checked, setTableData)
              }
              value={index}
              id={row.id}
              checked={row.checked}
              className="form-check-input"
            />
          </td>
          {displayLabels.map((label: string, indx: number) => {
            return <td key={indx}>{row[label]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <>
      {toolbar}
      <div
        className={`col-12 mt-3 d-flex flex-nowrap ${
          cards ? undefined : "d-none"
        }`}
      >
        {cards}
      </div>
      <div className="col-12 mt-4" style={{ overflowX: "auto" }}>
        <table
          className="table table-bordered border-light"
          style={{ width: tableWidth ? tableWidth : "100%" }}
        >
          <thead className="bg-dark text-white">
            <tr>
              <th key={-1} className={`py-3 ${hideCheckbox ? "d-none" : undefined}`}>
                <input
                  type="checkbox"
                  onChange={(e) => checkAll(e.target.checked, setTableData)}
                  className="form-check-input"
                />
              </th>
              {headers.map((header: string, index: number) => (
                <th className="py-3" key={index}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{displayData()}</tbody>
        </table>
      </div>
      <div className={`col-12 mt-3 ${!footer ? "d-none" : undefined}`}>
        {footer}
      </div>
    </>
  );
};

export default Table;
