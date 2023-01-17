import React, { useState } from "react";
import Table from "../../components/Table";

const headers = [
  "Product",
  "Publisher Name",
  "Last recorded",
  "Prices",
  "Impressions",
  "Profits",
  "Clicks",
  "Unclicks",
  "Invalid Click",
  "Conversions",
  "Orders",
  "Total CVR",
];

// interface ViewButtonProps {
//   href?: string;
// }

// const ViewButton = ({ href = "" }: ViewButtonProps) => {
//   return (
//     <a
//       className="btn btn-primary p-1 text-center pb-2"
//       style={{
//         height: "22px",
//         width: "48px",
//         fontSize: "12px",
//         lineHeight: "16px",
//       }}
//       href={href}
//     >
//       View
//     </a>
//   );
// };

const data = [
  {
    id: 1,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 2,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 3,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 4,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 5,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 6,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 7,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 8,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 9,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 10,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12",
    totalCVR: "12",
  },
  {
    id: 11,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12e",
    totalCVR: "12",
  },
  {
    id: 12,
    productName: <a href="/">Winter worlds men wear (2022) this is samp</a>,
    publisherName: "Donna Slider",
    lastRecorded: "2022-08-19 (12:17:55)",
    prices: "$255.89",
    impressions: <span className="text-success">Enabled</span>,
    profits: "$255.89",
    clicks: "12",
    unClicks: "12",
    invalidClick: "12",
    conversions: "12%",
    orders: "12e",
    totalCVR: "12",
  },
];

const displayLabels = [
  // "id",
  "productName",
  "publisherName",
  "lastRecorded",
  "prices",
  "impressions",
  "profits",
  "clicks",
  "unClicks",
  "invalidClick",
  "conversions",
  "orders",
  "totalCVR",
];
function BrandFullReportTable() {
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

export default BrandFullReportTable;
