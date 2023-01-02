import React from "react";
import CaretLeft from "../svgs/CaretLeft";
import CaretRight from "../svgs/CaretRight";

function Table({data, headers}:any) {
    
  return (
    <div className="row" >
      <div className="col-12">
        <table className="table table-sm border" style={{width: "100%"}}>
          <thead className="bg-dark text-white">
            <tr>
              <th  className="">
                <input type="checkbox" className="form-check-input" />
              </th>
              {
                headers.map((header: any, index: number) => {
                  return (
                    <th key={index} className="">
                      {header}
                    </th>
                  )
                })

              }
            </tr>
          </thead>
          <tbody>
            {/* {data} */}
            <tr className="text-center">
              <td>
                <input type="checkbox" className="form-check-input" />
              </td>
              <td>Donna Slider</td>
              <td>Donna Slider</td>
              <td>B099HP4D5Z</td>
              <td>$255.89</td>
              <td>Health & care</td>
              <td>Amazon</td>
              <td></td>
              <td>12%</td>
              <td>5%</td>
              <td>12</td>
              <td>12</td>
              <td>
                <button className="btn btn-danger btn-sm text-dark">Not Allowed</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-12 mt-3">
        <div className="card d-flex px-2 justify-content-between">
          <div className="row d-flex align-content-center">
            <p className="col-3 mt-3">Showing 11 to 20 of 20 entries</p>
            <div className="col-2 ms-auto d-flex align-items-center">
                <div className="me-1 ms-auto"><CaretLeft /></div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-dark btn-sm">
                  1
                </button>
                <button type="button" className="btn btn-white border border-dark btn-sm">
                  2
                </button>
                <button type="button" className="btn btn-dark btn-sm">
                  3
                </button>
              </div>
              <div className="ms-1"><CaretRight /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
