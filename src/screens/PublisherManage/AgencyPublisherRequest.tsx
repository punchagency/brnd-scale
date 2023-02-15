import React, { useState, useEffect } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import Table from "../../components/Table";
import Funnel from "../../components/svgs/Funnel";
import Search from "../../components/svgs/Search";
import PencilIcon from "../../components/svgs/PencilIcon";
import PlusIcon from "../../components/svgs/PlusIcon";
import DeleteIcon from "../../components/svgs/DeleteIcon";
import CalendarWrapper from "../../components/Calendar";
import TableFooter from "../../components/Table/TableFooter";
import { AgenciesPublishersRequests } from "../../types";

const headers = ["Publisher Name", "Date Sent", "Country", "Platform"];

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

const displayLabels = ["publisher_name", "date_sent", "country", "platform"];

function AgencyPublishersRequest() {
  const [tableData, setTableData] = useState<AgenciesPublishersRequests[]>([]);
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

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);

  const [total, setTotal] = useState(0)

  useEffect(() => {

    const searchParams = new URLSearchParams();
    
    searchString && searchParams.append("search", searchString);
    currentPage && searchParams.append("page", currentPage+"");
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "agencies/publishers-requests?" +
        searchParams.toString()
    );

    fetch(url, { mode: "cors" }).then(async (response) => {
      let res = await response.json();

      setTableData(res.data.data);
      setTotal(res.data.total)
    });
  }, [searchString, currentPage]);

  return (
    <Table
      tableData={tableData}
      displayLabels={displayLabels}
      headers={headers}
      tableWidth={"100%"}
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
          </div>
          <div className="col-6 d-flex align-items-center">
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
                <option value="">
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
      footer={
        <TableFooter
          totalData={total}
          rowsPerPage={numOfRows}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      }
    />
  );
}

export default AgencyPublishersRequest;
