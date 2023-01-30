import React, { useState } from "react";
import Table from "../../../components/Table";
import { Link } from "react-router-dom";
import WarningCircle from "../../../components/svgs/WarningCircle";

import product from "../../../assets/images/product.png";
import TablePageDropdown from "../../../components/Table/TablePageDropdown";
import CalendarWrapper from "../../../components/Calendar";
import Search from "../../../components/svgs/Search";
import TableFilter from "../../../components/Table/TableFilter";

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

const data = [
  {
    id: 1,
    image: (
      <div className="d-flex justify-content-center">
        <img src={product} alt="" />
      </div>
    ),
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
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
    productName: (
      <Link to="" >
        <div style={{maxWidth: "250px", width: "250px", wordBreak: "break-all"}}>
        <span className="" >Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
        kids love</span></div>
      </Link>
    ),
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    prices: "$255.89",
    tags: "B099HP4D5Z",
    commissionOffer: (
      <div>
        <span>12%</span>
        <span
          className="bg-info rounded p-1 ms-2 ps-2 pe-2"
          style={{ fontSize: "8px", height: "12px" }}
        >
          Pay per click
        </span>
      </div>
    ),
    activeCoupons: "10 % off",
    conversion: 12,
    totalOrders: 2566,
    addProduct: (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#addTagModal"
      >
        Add to My Products
      </button>
    ),
  },
];

const displayLabels = [
  // "id",
  "image",
  "productName",
  "brands",
  "category",
  "prices",
  "tags",
  "commissionOffer",
  "activeCoupons",
  "conversion",
  "totalOrders",
  "addProduct",
];

function JoinOffer() {
  const [tableData, setTableData] = useState(data);

  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchString.toLowerCase()) ||
        item.startingDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.endingDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.tags.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commissionMade
          .toLowerCase()
          .includes(searchString.toLowerCase()) ||
        item.totalSale.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };
  const deleteRow = (id: number) => {
    setTableData((prev: any) => {
      return prev.filter((row: any) => row.id !== id);
    });
  };

  const addRow = (row: any) => {
    setTableData((prev: any) => {
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
                    <div className="col-12 d-flex flex-column align-items-center mt-4">
                      <div className="mb-3 w-75 mt-2">
                        <label className="form-label">Write you Tag Here</label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="e.g  #Zargov-221"
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
                            Tags will help you and other to track the statistics simultaneously
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-flex mt-4 justify-content-center">
                        <button
                          className="btn btn-primary px-5 py-2"
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
          tableWidth={"135%"}
          deleteRow={deleteRow}
          editData={editData}
          addRow={addRow}
          filterData={filterData}
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
                    <select
                      className="ms-1 rounded px-2 py-1"
                      style={{ borderColor: "#ced4da" }}
                    >
                      <option value="">Month</option>
                    </select>
                    <select
                      className="ms-1 rounded px-2 py-1"
                      style={{ borderColor: "#ced4da" }}
                    >
                      <option value="">Category</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <div className="col-2 p-0">
                  <button className="btn btn-primary btn-sm">Add All</button>
                </div>
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
          numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
        />
      </div>
  );
}

export default JoinOffer;
