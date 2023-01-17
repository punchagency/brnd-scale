import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Table from "../../components/Table";
import PageTitle from "../../components/PageTitle";
import PageMenu from "../../components/Common/PageMenu";

import jbl from "../../assets/images/jbl.png";
import versace from "../../assets/images/versace.png";
import handm from "../../assets/images/HandM.png";
import herbalLife from "../../assets/images/herbalLife.png";
import TableFilter from "../../components/Table/TableFilter";
import Search from "../../components/svgs/Search";
import CalendarWrapper from "../../components/Calendar";
import TablePageDropdown from "../../components/Table/TablePageDropdown";

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

const data = [
  {
    id: 1,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={jbl} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 2,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={handm} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 3,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={herbalLife} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 4,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={versace} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 5,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={jbl} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 6,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={handm} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 7,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={herbalLife} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 8,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={versace} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 9,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={jbl} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 10,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={handm} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 11,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={herbalLife} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
  {
    id: 12,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={versace} alt="" />
      </div>
    ),

    brandName: "Xtreme Coutore",
    campaignName: "Black Friday Sale",
    agency: "Wetheweb.20",
    category: "Health and Care",
    activeCoupons: "10 % off",
    commissionOffer: "12 %",
    product: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        View Product
      </button>
    ),
    details: (
      <button className="btn btn-outline-light btn-sm text-dark border">
        Click Here
      </button>
    ),
    applyHere: <button className="btn btn-primary btn-sm">Apply</button>,
  },
];

const displayLabels = [
  // "id",
  "image",
  "brandName",
  "campaignName",
  "agency",
  "category",
  "activeCoupons",
  "commissionOffer",
  "product",
  "details",
  "applyHere",
];

function JoinBrand() {
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
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3">
        <PageTitle title="Get Associated with Top brands " />
      </div>
      <div className="col-12 mt-4 d-flex">
        <PageMenu
          links={[
            { path: "/publisher/join-brand", title: "Join Brand" },
            { path: "/publisher/join-offer", title: "Available Offers" },
          ]}
        />
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">
                List of Brands avaliable to Join
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Table
          tableData={tableData}
          displayLabels={displayLabels}
          headers={headers}
          tableWidth={"115%"}
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
                  <button className="btn btn-primary btn-sm">Apply All</button>
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
    </div>
  );
}

export default JoinBrand;
