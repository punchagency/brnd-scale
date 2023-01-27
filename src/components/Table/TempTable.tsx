import React, { useState } from "react";

const TempTable = ({
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
  handleCheck,
  checkAll,
  footer
}: any) => {
  const [searchString, setSearchString] = useState("");

  const displayData = () => {
    //determine the rows to display
    let data =
      searchString !== ""
        ? filterData(searchString).slice(
            (currentPage - 1) * numOfRows,
            currentPage * numOfRows
          )
        : tableData.slice(
            (currentPage - 1) * numOfRows,
            currentPage * numOfRows
          );
    // setNumOfPages(data.length);
    return data.map((row: any, index: number) => {
      return (
        <tr>
          <td className={`${hideCheckbox ? "d-none" : undefined}`}>
            <input
              type="checkbox"
              onChange={(e)=>handleCheck(row.id, e.target.checked)}
              value={index}
              id={row.id}
              checked={row.checked}
              className="form-check-input"
            />
          </td>
          {displayLabels.map((label: string) => {
            return <td>{row[label]}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <>
      {
        toolbar
      }
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
              <th className={`py-3 ${hideCheckbox ? "d-none" : undefined}`}>
                <input
                  type="checkbox"
                  onChange={(e)=>checkAll(e.target.checked)}
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
      <div className={`col-12 mt-3 ${!footer ? 'd-none' : undefined}`}>
        {footer}
      </div>
    </>
  );
};

export default TempTable;
