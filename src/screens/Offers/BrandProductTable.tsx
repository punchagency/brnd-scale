import React, { useState } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import jbl from "../../assets/images/jbl.png";
import versace from "../../assets/images/versace.png";
import handm from "../../assets/images/HandM.png";
import herbalLife from "../../assets/images/herbalLife.png";
import BrandsImage from "../../assets/images/images.svg";
import MarketBtn from "../../assets/images/market-btn.svg";
import LinkSimpleBreak from "../../assets/images/LinkSimpleBreak.svg";
import LinkIcon from "../../assets/images/Link.svg";
import keyboard from "../../assets/images/keyboard.png";
import ratings from "../../assets/images/ratings.png";
import Table from "../../components/Table";

const headers = [
  "Product Name",
  "Product ID",
  "Timestamp",
  "Prices",
  "Status",
  "Commision",
  "Active Coupons",
  "Conversions Rate",
  "Total Orders",
  "Total Paid",
  "Quantity"
];

const data = [
  {
    id: 1,
    productName: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <a href="#" className="me-3" style={{maxWidth: "232px"}}>
          Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
          kids love
        </a>
        <img src={LinkSimpleBreak} alt="" />
      </div>
    ),
    productId:
     "5516"
    ,
    timestamp: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
    commission: (
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
    activeCoupons: "Not Available",
    conversionsRate: "12%",
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "5"
  },
  {
    id: 2,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 3,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 4,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 5,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 6,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 7,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 8,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 9,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 10,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 11,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
  {
    id: 12,
    productName: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <a href="#" className="me-3" style={{maxWidth: "232px"}}>
            Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content
            kids love
          </a>
          <img src={LinkSimpleBreak} alt="" />
        </div>
      ),
      productId:
       "5516"
      ,
      timestamp: "2022-08-19 (12:17:55)",
      prices: "$255.89",
      status: <span className="border rounded p-1 ps-2 pe-2 text-center">Permoted</span>,
      commission: (
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
      activeCoupons: "Not Available",
      conversionsRate: "12%",
      totalOrders: "2566",
      totalPaid: "2566",
      quantity: "5"
  },
];

const displayLabels = [
  // "id",
  "productName",
  "productId",
  "timestamp",
  "prices",
  "status",
  "commission",
  "activeCoupons",
  "conversionsRate",
  "totalOrders",
  "totalPaid",
  "quantity",
];

function BrandProductTable() {
  const [tableData, setTableData] = useState(data);
  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.productId.toLowerCase().includes(searchString.toLowerCase()) ||
        item.timestamp.toLowerCase().includes(searchString.toLowerCase()) ||
        item.prices.toLowerCase().includes(searchString.toLowerCase()) ||
        item.status.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commission
          .toLowerCase()
          .includes(searchString.toLowerCase())
      );
    });
  };
  const deleteRow = (id: number) => {
    setTableData((prev) => {
      return prev.filter((row) => row.id != id);
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
      tableWidth={"130%"}
      deleteRow={deleteRow}
      editData={editData}
      addRow={addRow}
      filterData={filterData}
      numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
    />
  );
}

export default BrandProductTable;
