import React, { useState } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import Table from "../../components/Table";
import Funnel from "../../components/svgs/Funnel";
import Search from "../../components/svgs/Search";
import PencilIcon from "../../components/svgs/PencilIcon";
import PlusIcon from "../../components/svgs/PlusIcon";
import DeleteIcon from "../../components/svgs/DeleteIcon";
import CalendarWrapper from "../../components/Calendar";

const headers = ["Product Name", "Brands", "Products"];

const data = [
  {
    id: 1,
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    products: "Donna Slider",
  },
  {
    id: 2,
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    products: "Donna Slider",
  },
  {
    id: 3,
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    products: "Donna Slider",
  },
  {
    id: 4,
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    products: "Donna Slider",
  },
  {
    id: 5,
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    products: "Donna Slider",
  },
  {
    id: 6,
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    products: "Donna Slider",
  },
  {
    id: 7,
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    products: "Donna Slider",
  },
];

const displayLabels = [
  // "id",
  "productName",
  "brands",
  "products",
];

function AgencyPublishersRequest() {
  const [tableData, setTableData] = useState(data);
  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      const itemProperties: Array<string> = Object.keys(item);
      return itemProperties
        .map((key: string) => {
          if (typeof item[key] === "string") {
            return item[key].includes(searchString);
          }
          return false;
        })
        .some((currentValue: boolean) => currentValue);
    });
  };
  const deleteRow = (id: number) => {
    setTableData((prev) => {
      return prev.filter((row) => row.id !== id);
    });
  };

  const addRow = (row: any) => {
    setTableData((prev) => {
      return [...prev, { id: prev.length, ...row }];
    });
  };

  const editData = (data: any) => {
    // setTableData(prev=>{return prev.map()})
  };

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState("");
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  return (
    <Table
      tableData={tableData}
      displayLabels={displayLabels}
      headers={headers}
      tableWidth={"100%"}
      deleteRow={deleteRow}
      editData={editData}
      addRow={addRow}
      filterData={filterData}
      hideCheckbox={true}
      toolbar={
        <div className={`col-12 mt-3 d-flex flex-nowrap`}>
          <div className="col-6 d-flex ">
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
                <div className="ms-2">
                  <DeleteIcon />
                </div>
                <div className="ms-2">
                  <button
                    className="btn btn-light btn-sm d-flex text-white"
                    style={{ backgroundColor: "#828282" }}
                  >
                    Add{" "}
                    <span className="ms-1">
                      <PlusIcon />
                    </span>
                  </button>
                </div>
                <div className="ms-2">
                  <button
                    className="btn btn-light btn-sm d-flex text-white"
                    style={{ backgroundColor: "#828282" }}
                  >
                    Edit
                    <span className="ms-1">
                      <PencilIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="">
              <button
                className="btn btn-light btn-sm d-flex text-white"
                style={{ backgroundColor: "#828282" }}
              >
                Active
                <span className="ms-1">
                  <ActiveIcon />
                </span>
              </button>
            </div>
            <div className="col-5">
              <div className="input-group flex-nowrap my-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={searchString}
                  onChange={(e) => {
                    setSearchString(e.target.value);
                    setCurrentPage(1);
                  }}
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
        </div>
      }
      numOfPages={numOfPages}
      setNumOfPages={setNumOfPages}
      numOfRows={numOfRows}
      setNumOfRows={setNumOfRows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default AgencyPublishersRequest;
