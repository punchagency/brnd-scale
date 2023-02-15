import React, { useEffect, useState } from "react";
import ProductDetail from "../../components/Popups/ProductDetail";
import Table from "../../components/Table";
import TableFooter from "../../components/Table/TableFooter";

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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
    productName: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn text-decoration-underline text-primary"
          style={{ fontSize: "12px" }}
        >
          Winter worlds men wear (2022) this is samp
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
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
  "product_name",
  "publisher_name",
  "last_recorded",
  "prices",
  "impressions",
  "profits",
  "clicks",
  "uni_clicks",
  "invalid_clicks",
  "conversions",
  "orders",
  "total_cvr",
];

interface BrandFullReportTableProps {
  componentDate?: string | { from: string; to: string }
}

function BrandFullReportTable({componentDate}: BrandFullReportTableProps) {
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
  const [searchString, setSearchString] = useState("");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const searchParams = new URLSearchParams();
    console.log("cococo", componentDate)
    typeof componentDate === "object" &&
      componentDate.from !== "" &&
      searchParams.append(
        "date_from",
        typeof componentDate === "object" ? componentDate.from : ""
      );
    typeof componentDate === "object" &&
      componentDate.to !== "" &&
      searchParams.append(
        "date_to",
        typeof componentDate === "object" ? componentDate.to : ""
      );
    searchString && searchParams.append("search", searchString);
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "brands/reports/products" +
        searchParams.toString()
    );

    fetch(url, {
      mode: "cors",
    }).then(async (response) => {
      let res = await response.json();
      setTableData(
        res.data.data.map((row: any) => {
          return {
            ...row,
            product_name: (
              <div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target={`#productDetails`}
                  className="btn text-decoration-underline text-primary"
                  style={{ fontSize: "12px" }}
                >
                  {row.product_name}
                </button>
                <ProductDetail id="productDetails" />
              </div>
            ),
            impressions: <span className="text-success">{row.impressions}</span>,
          };
        })
      );
      setTotal(res.data.total);
    });
  }, [searchString, componentDate, currentPage]);
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

export default BrandFullReportTable;
