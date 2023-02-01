import React, { useState } from "react";
import CaretLeft from "../svgs/CaretLeft";
import CaretRight from "../svgs/CaretRight";

const TableFooter = ({
  totalData,
  rowsPerPage,
  currentPage,
  setCurrentPage,
}: any) => {
  const [buttons, setButtons] = useState([]);
  const [visibleBtn, setVisibleBtn] = useState(
    currentPage > 1 ? currentPage - 1 : 0
  );
  let maxPages =
    totalData / rowsPerPage ;

  const showButtons = () => {
    let tempBtns = [];
    for (let index = 0; index < maxPages; index++) {
      let classValue =
        index + 1 === currentPage
          ? 'className="btn btn-white border border-dark btn-sm'
          : "btn btn-dark btn-sm";

      if ((visibleBtn <= 0 && index < visibleBtn) || index > visibleBtn + 2) {
        classValue += " d-none";
      } else if (
        (visibleBtn >= maxPages && index > visibleBtn) ||
        index < visibleBtn - 2
      ) {
        classValue += " d-none";
      } else if (
        (visibleBtn > 0 && index < visibleBtn - 1) ||
        (visibleBtn < maxPages &&
          index > (visibleBtn == 0 ? visibleBtn + 2 : visibleBtn + 1))
      ) {//TODO: bug fix-need to double click when page is one and trying to scroll forward
        classValue += " d-none";
      }
      tempBtns.push(
        <button
          type="button"
          onClick={(e) => {
            setCurrentPage(index + 1);
          }}
          className={classValue}
        >
          {index + 1}
        </button>
      );
    }
    return tempBtns;
  };
  return (
    <div className="card d-flex px-2 justify-content-between">
      <div className="row d-flex align-content-center">
        <p className="col-6 col-md-3 mt-3">
          Showing {currentPage * rowsPerPage - rowsPerPage + 1} to{" "}
          { totalData < (rowsPerPage * currentPage) ? totalData : rowsPerPage * currentPage} of {totalData} entries
        </p>
        <div className="col-4 col-md-2 ms-auto d-flex justify-content-end align-items-center">
          <div
            className={`me-1 ms-auto ${totalData / rowsPerPage < 4 ? 'd-none' : ''}`}
            onClick={() => {
              setVisibleBtn((prev) => (prev > 0 ? --prev : 0));
            }}
          >
            <CaretLeft />
          </div>
          <div className="btn-group" role="group" aria-label="Basic example">
            {showButtons()}
          </div>
          <div
            className={`ms-1 ${totalData / rowsPerPage < 4 ? 'd-none' : ''}`}
            onClick={() => {
              setVisibleBtn((prev) => (prev + 2 < maxPages ? ++prev : prev));
            }}
          >
            <CaretRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
