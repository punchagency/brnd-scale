import React, { useState, useEffect } from "react";
import Table from "../../../components/Table";

import jbl from "../../../assets/images/jbl.png";
import versace from "../../../assets/images/versace.png";
import handm from "../../../assets/images/HandM.png";
import herbalLife from "../../../assets/images/herbalLife.png";
import TableFilter from "../../../components/Table/TableFilter";
import Search from "../../../components/svgs/Search";
import CalendarWrapper from "../../../components/Calendar";
import TablePageDropdown from "../../../components/Table/TablePageDropdown";
import About from "../BrandDetails/About";
import ProductDetail from "../../../components/Popups/ProductDetail";

const headers = [
  "Logos",
  "Brands",
  "Campaign Name",
  "Agency",
  "Category",
  "Active Coupons",
  "Commission Offer",
  "Products",
  "Details",
  "Apply Here",
];

const displayLabels = [
  // "id",
  "image",
  "brands",
  "campaigns_name",
  "agency",
  "category",
  "active_coupons",
  "commission_offer",
  "product",
  "details",
  "applyHere",
];

function JoinBrand() {
  const [tableData, setTableData] = useState([]);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    // console.log(componentDate);

    const searchParams = new URLSearchParams();
    typeof componentDate == "object" &&
      componentDate.from != "" &&
      searchParams.append(
        "date_from",
        typeof componentDate == "object" ? componentDate.from : ""
      );
    typeof componentDate == "object" &&
      componentDate.to != "" &&
      searchParams.append(
        "date_to",
        typeof componentDate == "object" ? componentDate.to : ""
      );
    searchString && searchParams.append("search", searchString);
    currentPage && searchParams.append("page", currentPage + "");
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "publishers/join-brands?" +
        searchParams.toString()
    );

    console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {
      //console.log(await response.text())
      let res = await response.json();
      console.log(res);

      setTableData(
        res.data.data.map((row: any) => {
          return {
            ...row,
            image: (
              <div
                className="d-flex justify-content-center"
              >
                <img src={row.logo} alt="" className="img img-fluid" style={{width: '90px'}} />
              </div>
            ),
            active_coupons: row.active_coupons+" %",
            product: (
              <button
                className="btn btn-outline-light btn-sm text-dark border"
                data-bs-toggle="modal"
                data-bs-target="#aboutProductModal"
              >
                View Product
              </button>
            ),
            details: (
              <button
                className="btn btn-outline-light btn-sm text-dark border"
                data-bs-toggle="modal"
                data-bs-target="#aboutBrandModal"
              >
                Click Here
              </button>
            ),
            applyHere: (
              <button className="btn btn-primary btn-sm">Apply</button>
            ),
          };
        })
      );
      setTotal(res.data.total);
    });
  }, [componentDate, searchString, currentPage]);

  return (
    <>
      <About />
      <ProductDetail id="aboutProductModal" />
      <div className="col-12">
        <Table
          tableData={tableData}
          displayLabels={displayLabels}
          setTableData={setTableData}
          headers={headers}
          tableWidth={"115%"}
          toolbar={
            <div className={`col-12 mt-3 d-flex flex-nowrap+`}>
              <div className="col-6 d-flex">
                <div className="col-7 col-md-6 d-flex align-items-center">
                  <TablePageDropdown
                    numOfRows={numOfRows}
                    setNumOfRows={setNumOfRows}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
                <div className="col-5 col-md-6 d-flex align-items-center">
                  <div className="col-12 d-flex align-items-center">
                    <div className="card border-0">
                      <CalendarWrapper setComponentDate={setComponentDate} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <div className="col-4 d-flex">
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
                <div className="col-3 ms-1">
                  <select className="form-select w-90">
                    <option value="" selected>
                      Export
                    </option>
                    <option value="">20</option>
                    <option value="">30</option>
                  </select>
                </div>
                <div className="col-3 col-md-2 ms-1 ">
                  <TableFilter />
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
      </div>
    </>
  );
}

export default JoinBrand;
