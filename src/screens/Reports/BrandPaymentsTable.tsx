import React, { useEffect, useState } from "react";
import LinkIcon from "../../assets/images/Link.svg";
import Table from "../../components/Table";
import TableFooter from "../../components/Table/TableFooter";

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
      <span
        className="text-success rounded w-75 text-center p-1 border border-success"
        style={{ fontSize: "10px", lineHeight: "13px" }}
      >
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
      <span
        className="text-success rounded w-75 text-center p-1 border border-success"
        style={{ fontSize: "10px", lineHeight: "13px" }}
      >
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
      <span
        className="text-success rounded w-75 text-center p-1 border border-success"
        style={{ fontSize: "10px", lineHeight: "13px" }}
      >
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
      <span
        className="text-success rounded w-70 text-center p-1 border border-success"
        style={{ fontSize: "10px", lineHeight: "13px" }}
      >
        Paid
      </span>
    ),
  },
];

const displayLabels = [
  // "id",
  "product_name",
  "agency",
  "campaign_name",
  "publisher",
  "issue_date",
  "due_date",
  "tags",
  "due",
  "commission_made",
  "commission_type",
  "total_sales",
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
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [searchString, setSearchString] = useState("");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const searchParams = new URLSearchParams();
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
        "brands/reports/payments" +
        searchParams.toString()
    );

    fetch(url, {
      mode: "cors",
    }).then(async (response) => {
      let res = await response.json();
      console.log("res", res)
      setTableData(
        res.data?.data?.map((row: any) => {
          return {
            ...row,

            tags: (
              <div>
                <img src={LinkIcon} alt="" />
                <span>{row.tags}</span>
              </div>
            ),
            commission_type: (
              <div>
                <span>{row.commission_type}</span>
                <span
                  className="bg-info rounded p-1 ms-2 ps-2 pe-2"
                  style={{ fontSize: "8px", height: "12px" }}
                >
                  Pay per click
                </span>
              </div>
            ),
            status: (
              <span
                className="text-success rounded w-70 text-center p-1 border border-success"
                style={{ fontSize: "10px", lineHeight: "13px" }}
              >
                {row.status}
              </span>
            ),
          };
        })
      );
      setTotal(res.data?.total);
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

export default BrandPaymentsTable;
