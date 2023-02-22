import React, { useEffect, useState } from "react";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import WarningCircle from "../../../components/svgs/WarningCircle";

import TablePageDropdown from "../../../components/Table/TablePageDropdown";
import CalendarWrapper from "../../../components/Calendar";
import Search from "../../../components/svgs/Search";
import TableFilter from "../../../components/Table/TableFilter";
import TableFooter from "../../../components/Table/TableFooter";

const headers = [
  "Images",
  "Product Name",
  "Brands",
  "Category",
  "Prices",
  "Tags",
  "Commission Offer",
  "Active Coupons",
  "Conversion",
  "Total Orders",
  "Add Product",
];

const displayLabels = [
  // "id",
  "image",
  "product_name",
  "brands",
  "category",
  "prices",
  "tags",
  "commission_offer",
  "active_coupon",
  "conversion",
  "total_orders",
  "add_product",
];

function JoinOffer() {
  const [tableData, setTableData] = useState([]);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [tag, setTag] = useState("");

  const addTag = (e: any) => {
    e.preventDefault();
    var url = new URL(process.env.REACT_APP_BASE_URL + "publishers/tag");
    // fetch(url, {
    //   method: "POST",
    //   mode: "cors",
    //   body: new FormData(document.getElementById("tagInput") ?? undefined),
    // })
    //   .then(async (response) => {
    //     let res = await response.json();
    //     console.log(res);
    //     if (res.success) {
    //       alert("Tag Added Successfully");
    //     } else {
    //       alert("Could not add tag");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     alert("Sorry an error occurred while adding tag");
    //   });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    var raw = JSON.stringify({
      coupon: tag,
    });

    var requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

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
        "publishers/available-offers?" +
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
              <div className="d-flex justify-content-center">
                <img src={row.image} alt="" style={{ width: "90px" }} />
              </div>
            ),
            product_name: (
              <Link to="">
                <div style={{ maxWidth: "250px", wordBreak: "break-all" }}>
                  <span className="">{row.product_name}</span>
                </div>
              </Link>
            ),
            commission_offer: (
              <div>
                <span>{row.commission_offer}%</span>
                <span
                  className="bg-info rounded p-1 ms-2 ps-2 pe-2"
                  style={{
                    fontSize: "8px",
                    height: "20px",
                    display: "block",
                    width: "80px",
                  }}
                >
                  Pay per click
                </span>
              </div>
            ),
            add_product: (
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#addTagModal"
              >
                Add to My Products
              </button>
            ),
            checked: false
          };
        })
      );
      setTotal(res.data.total);
    });
  }, [componentDate, searchString, currentPage]);

  return (
    <div className="col-12">
      {/* Add tag modal */}
      <div
        className="modal fade"
        id="addTagModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
                BRNDScale
              </h1>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 d-flex flex-column align-items-center">
                    <h2 className="text-center">Add a campaign Tag</h2>
                    <div className="d-flex w-75 rounded px-3 py-1 justify-content-between  align-items-center mt-2">
                      <span className="">
                        Tag will allow to link everything together so you can
                        get the information on each products and campaigns
                      </span>
                    </div>
                  </div>
                  <form id="form">
                    <div className="col-12 d-flex flex-column align-items-center mt-4">
                      <div className="mb-3 w-75 mt-2">
                        <label className="form-label">
                          Write your Tag Here
                        </label>
                        <textarea
                          className="form-control"
                          id="tagInput"
                          placeholder="e.g  #Zargov-221"
                          onChange={(e) => {
                            setTag(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div className="w-75">
                        <div
                          className="rounded border d-flex justify-content-center py-1"
                          style={{ backgroundColor: "rgba(0, 100, 246, 0.36)" }}
                        >
                          <span
                            className="text-center text-white p-0"
                            style={{ fontSize: "11px" }}
                          >
                            <WarningCircle />
                            Tags will help you and other to track the statistics
                            simultaneously
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex mt-4 justify-content-center">
                        <button
                          className="btn btn-primary px-5 py-2"
                          data-bs-dismiss="modal"
                          onClick={(e) => {
                            addTag(e);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table
        tableData={tableData}
        displayLabels={displayLabels}
        setTableData={setTableData}
        headers={headers}
        tableWidth={"145%"}
        toolbar={
          <div className={`col-12 mt-3 d-flex flex-nowrap+`}>
            <div className="col-6 d-flex ">
              <div className="col-6 d-flex align-items-center">
                <TablePageDropdown
                  numOfRows={numOfRows}
                  setNumOfRows={setNumOfRows}
                  setCurrentPage={setCurrentPage}
                />
              </div>
              <div className="col-6 d-flex align-items-center">
                <div className="col-12 d-flex align-items-center">
                  <div className="card border-0">
                    {/* <CalendarIcon /> */}
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
              <div className="col-2 ms-1 ">
                <TableFilter />
              </div>
            </div>
          </div>
        }
        footer={
          <TableFooter
            totalData={total}
            rowsPerPage={numOfRows}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        }
        numOfPages={numOfPages}
        setNumOfPages={setNumOfPages}
        numOfRows={numOfRows}
        setNumOfRows={setNumOfRows}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default JoinOffer;
