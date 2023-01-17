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
  "Agency",
  "Campaign Name",
  "Publisher",
  "Issue Date",
  "Due Date",
  "Tags",
  "Due",
  "Commission made",
  "Commission Type",
  "Total Sales",
  "Status",
];

const data = [
  {
    id: 1,
    productName: "Donna Slider",
    agency: "JBL Xtreme",
    campaignName: "JBL Xtreme",
    publisher: "Jack Marko",
    issueDate: "2022-08-19 (12:17:55)",
    dueDate: "2022-08-19 (12:17:55)",
    tags: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    due: "$1200",
    commissionMade: "$255.89",
    commissionType: (
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
    totalSales: "1200",
    status: (
      <span className="text-success rounded w-75 text-center p-1 border border-success" style={{fontSize: "10px", lineHeight: "13px"}}>
        Paid
      </span>
    ),
  },
  {
    id: 2,
    productName: "Donna Slider",
    agency: "JBL Xtreme",
    campaignName: "JBL Xtreme",
    publisher: "Jack Marko",
    issueDate: "2022-08-19 (12:17:55)",
    dueDate: "2022-08-19 (12:17:55)",
    tags: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    due: "$1200",
    commissionMade: "$255.89",
    commissionType: (
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
    totalSales: "1200",
    status: (
      <span className="text-success rounded w-75 text-center p-1 border border-success" style={{fontSize: "10px", lineHeight: "13px"}}>
        Paid
      </span>
    ),
  },
  {
    id: 3,
    productName: "Donna Slider",
    agency: "JBL Xtreme",
    campaignName: "JBL Xtreme",
    publisher: "Jack Marko",
    issueDate: "2022-08-19 (12:17:55)",
    dueDate: "2022-08-19 (12:17:55)",
    tags: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    due: "$1200",
    commissionMade: "$255.89",
    commissionType: (
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
    totalSales: "1200",
    status: (
      <span className="text-success rounded w-75 text-center p-1 border border-success" style={{fontSize: "10px", lineHeight: "13px"}}>
        Paid
      </span>
    ),
  },
  {
    id: 4,
    productName: "Donna Slider",
    agency: "JBL Xtreme",
    campaignName: "JBL Xtreme",
    publisher: "Jack Marko",
    issueDate: "2022-08-19 (12:17:55)",
    dueDate: "2022-08-19 (12:17:55)",
    tags: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    due: "$1200",
    commissionMade: "$255.89",
    commissionType: (
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
    totalSales: "1200",
    status: (
      <span className="text-success rounded w-70 text-center p-1 border border-success" style={{fontSize: "10px", lineHeight: "13px"}}>
        Paid
      </span>
    ),
  }
];

const displayLabels = [
  // "id",
  "productName",
  "agency",
  "campaignName",
  "publisher",
  "issueDate",
  "dueDate",
  "tags",
  "due",
  "commissionMade",
  "commissionType",
  "totalSales",
  "status",
];

function BrandPaymentsTable() {
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

export default BrandPaymentsTable;
