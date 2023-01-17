import React, {useState} from "react";
import CalendarWrapper from "../Calendar";
import ActiveIcon from "../svgs/ActiveIcon";
import CalendarIcon from "../svgs/CalendarIcon";
import CaretLeft from "../svgs/CaretLeft";
import CaretRight from "../svgs/CaretRight";
import DeleteIcon from "../svgs/DeleteIcon";
import Funnel from "../svgs/Funnel";
import PencilIcon from "../svgs/PencilIcon";
import PlusIcon from "../svgs/PlusIcon";
import Search from "../svgs/Search";

//displayLabels is an array of keys used to access tableData object values
function Table({tableData, displayLabels, headers, editData, deleteRow, addRow, tableWidth, hideCheckbox, hideToolbar, hideFooter, filterData, cards, toolbar, numOfPages, setNumOfPages, numOfRows, setNumOfRows, currentPage, setCurrentPage}:any) {
  // const [numOfRows, setNumOfRows] = useState(10);
  // const [numOfPages, setNumOfPages] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);
  const [firstButton, setFirstButton] = useState(0);
  // let add = () => {};
  // let edit = () => {};
  // let deleteRow = () => {};
  const [searchString, setSearchString] = useState("");
  // let showCheckbox = false;

  // console.log(tableData.map((row:any) => row['brandName']))

  const [inputChecked, setInputChecked] = useState(
    Array(numOfRows).fill(false)
  );

  const handleCheck = (e: any) => {
    setInputChecked((prev) => {
      prev[e.target.value] = !prev[e.target.value];
      return prev;
    });
    // console.log(inputChecked)
  };

  const checkAll = (e: any) => {
    setInputChecked(Array(numOfRows).fill(e.target.checked));
    // console.log(inputChecked)
  };

  const handleDelete = ()=>{
    // filterData().filter()
  }

  const displayData = () => {
    //determine the rows to display
    let data = searchString  !== '' ? filterData(searchString).slice((currentPage - 1) * numOfRows, currentPage * numOfRows) : tableData.slice((currentPage - 1) * numOfRows, currentPage * numOfRows);
    // setNumOfPages(data.length);
    return data.map((row:any, index:number) => {
      return (
        <tr>
          <td className={`${hideCheckbox ? 'd-none' : undefined }`}>
            <input
              type="checkbox"
              onChange={handleCheck}
              value={index}
              checked={inputChecked[index] ? true : undefined}
              className="form-check-input"
            />
          </td>
          {
            displayLabels.map((label:string) => {return <td>{row[label]}</td>})
          }
        </tr>
      );
    });
  };

  const showButtons = () => {
    let buttons = [];
    let total = searchString  != '' ? filterData(searchString).slice((currentPage - 1) * numOfRows, currentPage * numOfRows) : tableData;//filterData(searchString) // TODO: refactor this
    let pages = (total.length / numOfRows) 
    console.log(total.length, pages)
    // setNumOfPages(pages);
    for (let index = firstButton; index < 3 && index < pages; index++) {
      let classValue =
        index + 1 === currentPage
          ? 'className="btn btn-white border border-dark btn-sm'
          : "btn btn-dark btn-sm";
      buttons.push(
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
    return buttons;
  };

  const dataLength = ()=>{
    return searchString != '' ? filterData(searchString).slice((currentPage - 1) * numOfRows, currentPage * numOfRows) : tableData
  }
  const [componentDate, setComponentDate] = useState("");
  return (
    <>
      {toolbar ? toolbar : <div className={`col-12 mt-3 d-flex flex-wrap flex-md-nowrap ${hideToolbar ? 'd-none' : undefined}`}>
        <div className="col-12 col-md-6 d-flex ">
          <div className="col-6 d-flex align-items-center">
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
          </div>
          <div className="col-5 d-flex align-items-center">
            <div className="col-12 d-flex align-items-center">
              <div className="card p-2 px-auto border-0">
                {/* <CalendarIcon /> */}
                <CalendarWrapper setComponentDate={setComponentDate} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          
          <div className="col-5">
            <div className="input-group flex-nowrap my-auto">
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={searchString}
                onChange={(e) => {setSearchString(e.target.value); setCurrentPage(1)}}
                aria-label=""
                aria-describedby="addon-wrapping"
              />
              <span
                className="input-group-text bg-white border"
                id="addon-wrapping"
              >
                <Search color={"#00000"} />
              </span>
            </div>
          </div>
          <div className="col-3 ms-3">
            <select className="form-select w-90">
              <option value="" selected>
                Export
              </option>
              <option value="">20</option>
              <option value="">30</option>
            </select>
          </div>
          <div className="col-3 ms-3">
            <button type="button" className="btn btn-white">
              Filter
              <span className="ms-1">
                <Funnel />
              </span>
            </button>
          </div>
        </div>
      </div>}
      <div className={`col-12 mt-3 d-flex flex-nowrap ${cards ? undefined : 'd-none'}`}>
              {cards}
      </div>
      <div className="col-12 mt-4" style={{ overflowX: "auto" }}>
        <table className="table table-bordered border-light" style={{width: tableWidth ? tableWidth : "100%"}}>
          <thead className="bg-dark text-white">
            <tr>
              <th className={`py-3 ${hideCheckbox ? 'd-none' : undefined }`}>
                <input
                  type="checkbox"
                  onChange={checkAll}
                  className="form-check-input"
                />
              </th>
              {
                headers.map((header:string)=><th className="py-3">{header}</th>)
              }
            </tr>
          </thead>
          <tbody>{displayData()}</tbody>
        </table>
      </div>
      <div className={`col-12 mt-3 ${hideFooter ? 'd-none' : undefined}`}>
        <div className="card d-flex px-2 justify-content-between">
          <div className="row d-flex align-content-center">
            <p className="col-6 col-md-3 mt-3">Showing {(currentPage - 1) * numOfRows + 1} to {dataLength().length < numOfRows ? dataLength().length : currentPage * numOfRows} of {dataLength().length/*Todo: refactor*/} entries</p>
            <div className="col-4 col-md-2 ms-auto d-flex align-items-center">
              <div
                className="me-1 ms-auto"
                onClick={() => {
                  setFirstButton((prev) =>
                    prev - 1 > numOfPages ? --prev : prev
                  );
                }}
              >
                <CaretLeft />
              </div>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                {showButtons()}
              </div>
              <div
                className="ms-1"
                onClick={() => {
                  setFirstButton((prev) =>
                    prev + 1 < numOfPages ? ++prev : prev
                  );
                }}
              >
                <CaretRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
