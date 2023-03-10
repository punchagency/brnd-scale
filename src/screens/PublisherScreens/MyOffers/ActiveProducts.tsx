import React, { useEffect, useState } from "react";
import ListIcon from "../../../components/svgs/ListIcon";
import Table from "../../../components/Table";
import { Link, useLocation } from "react-router-dom";
import WarningCircle from "../../../components/svgs/WarningCircle";
import PageTitle from "../../../components/PageTitle";
import PageMenu from "../../../components/Common/PageMenu";

import product from "../../../assets/images/product.png";
import ShareIcon from "../../../components/svgs/ShareIcon";
import CopyIcon from "../../../components/svgs/CopyIcon";
import TableFilter from "../../../components/Table/TableFilter";
import Search from "../../../components/svgs/Search";
import CalendarWrapper from "../../../components/Calendar";
import TablePageDropdown from "../../../components/Table/TablePageDropdown";
import TableFooter from "../../../components/Table/TableFooter";
import { ActiveProductInterface } from "../../../types";

const headers = [
  "Images",
  "Tags",
  "Brands",
  "Category",
  "ASIN ID",
  "Total Clicks",
  "Total Sales",
  "Commission Earned",
  "Conversions",
  "Total Orders",
  "Coupons",
  "Promote",
];

const data = [
  {
    id: 1,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 2,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 3,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 4,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 5,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 6,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 7,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 8,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 9,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 10,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 11,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 12,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 13,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asin_id: "B099HP4D5Z",
    total_clicks: "$255.89",
    total_sale: "$255.89",
    commission_earned: "$255.89",
    conversions: 12,
    total_orders: 2566,
    coupon: (
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#couponModal"
      >
        Click to View
      </button>
    ),
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
];

const displayLabels = [
  "image",
  "tags",
  "brands",
  "category",
  "asin_id",
  "total_clicks",
  "total_sale",
  "commission_earned",
  "conversions",
  "total_orders",
  "coupon",
  "status",
  // "promote",
];

function ActiveProducts() {
  const [tableData, setTableData] = useState([]) //useState<ActiveProductInterface[] >();
  const location = useLocation();

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<string | {from: string, to: string}>({from: '', to: ''});
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  const [total, setTotal] = useState(13)

  useEffect(() => {
    const searchParams = new URLSearchParams();
    typeof componentDate == "object" &&
      componentDate.from != "" &&
      searchParams.append(
        "date_from",
        typeof componentDate == "object" ? componentDate.from : ""
      );
      
      searchParams.append(
        "date",
        typeof componentDate == "object" ? componentDate.from : "2020-01"
      );
    typeof componentDate == "object" &&
      componentDate.to != "" &&
      searchParams.append(
        "date_to",
        typeof componentDate == "object" ? componentDate.to : ""
      );
    searchString && searchParams.append("search", searchString);
    currentPage && searchParams.append("page", currentPage+"");
    var url = new URL(
      process.env.REACT_APP_BASE_URL+"publishers/active-products?" + searchParams.toString()
    );

    console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {//console.log(await response.text())
      let res = await response.json();console.log(res)

      setTableData(
        res.data.data.map((row: any) => {//console.log(row)
          return {
            ...row,
            image: (
              <div className="d-flex justify-content-center">
                <img src={row.image} alt="" />
              </div>
            ),
            coupon: (
              <button
                type="button"
                className="btn btn-light btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#couponModal"
              >
                Click to View
              </button>
            ),
            status: (
              <button
                className="btn btn-primary btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Copy/Create URL
              </button>
            ),
            checked: false,
          };
        })
      );
      setTotal(res.data.total)
    });
  }, [componentDate, searchString, currentPage]);

  return (
      <div className="col-12">
        {/* Modal  */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
                  BRNDCommerce
                </h1>
                {/* <span
                    className="border border-light bg-dark text-light px-3 rounded me-5"
                    style={{}}
                  >
                    Product Details
                  </span> */}
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-10 offset-1">
                      <div className="input-group mt-4">
                        <input
                          type="text"
                          className="form-control"
                          aria-label="Dollar amount (with dot and two decimal places)"
                        />
                        <div
                          className="d-flex"
                          style={{ maxWidth: "200px", overflow: "hidden" }}
                        >
                          <span
                            className="input-group-text rounded-0 border bg-light"
                            style={{ borderRight: "1px solid #CECECE" }}
                          >
                            <CopyIcon />
                          </span>
                          <span className="input-group-text rounded-0 border bg-light">
                            <ShareIcon />
                          </span>
                        </div>
                      </div>
                      <div className="input-group mt-4">
                        <input type="text" className="form-control px-5" />
                        <div
                          className="d-flex justify-content-center"
                          style={{ maxWidth: "200px", overflow: "hidden" }}
                        >
                          <span
                            className="input-group-text ps-4 text-center bg-light"
                            style={{ width: "118px", textAlign: "center" }}
                          >
                            Create
                          </span>
                        </div>
                      </div>

                      <div className="w-100">
                        <div className="card mt-3">
                          <div className="card-content pt-3 ps-3">
                            <p>
                              <WarningCircle /> Paste the coupon codes
                              provided by brands or Agency
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex mt-4 justify-content-end">
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="couponModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
                  BRNDCommerce
                </h1>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                      <h2 className="text-center">Active</h2>
                      <div className="d-flex w-75 border rounded px-3 py-1 justify-content-between  align-items-center mt-2">
                        <span className="">Currently Active</span>
                        <span className="border rounded p-1">10% Off</span>
                      </div>
                      <div className="d-flex w-75 border rounded px-3 py-1 mt-3 justify-content-between align-items-center">
                        <span className="">Coupon Code</span>
                        <span className="border rounded p-1">48445CD21</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex flex-column align-items-center mt-4">
                      <h2 className="text-center mt-4">Add Coupon</h2>
                      <div className="mb-3 w-75 mt-2">
                        <label className="form-label">Paste Coupon Code</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Click to Add" />
                      </div>
                      <div className="w-75">
                          <div className="rounded border d-flex justify-content-center py-1" style={{backgroundColor: "rgba(0, 100, 246, 0.36)"}}>
                            <span className="text-center text-white p-0" style={{fontSize: "11px"}}>
                              <WarningCircle />
                               Paste the coupon codes provided by brands or Agency
                            </span>
                          </div>
                      </div>
                    </div>
                    <div className="col-12">
                      

                      <div className="d-flex mt-4 justify-content-center">
                        <button
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table
          tableData={tableData}
          displayLabels={displayLabels}
          headers={headers}
          tableWidth={"115%"}
          toolbar={
            <div className={`col-12 mt-3 d-flex flex-nowrap`}
            >
              <div className="col-6 d-flex ">
                <div className="col-6 d-flex align-items-center">
                  <TablePageDropdown numOfRows={numOfRows} setNumOfRows={setNumOfRows} setCurrentPage={setCurrentPage} />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <div className="col-12 d-flex align-items-center">
                    <div className="card border-0">
                      <CalendarWrapper setComponentDate={setComponentDate} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
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
                <div className="col-2 ms-3 ">
                  <TableFilter />
                </div>
              </div>
            </div>
          }
          numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
          footer={
            <TableFooter
              totalData={total}
              rowsPerPage={numOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
      </div>
  );
}

export default ActiveProducts;
