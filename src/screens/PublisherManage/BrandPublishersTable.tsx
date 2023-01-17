import React, { useState } from "react";
import Table from "../../components/Table";
import LinkSimpleBreak from "../../assets/images/LinkSimpleBreak.svg";
import LinkIcon from "../../assets/images/Link.svg";
import ReferLink from "../../components/Popups/ReferLink";

const headers = [
  "Product Name",
  "Publisher Name",
  "Starting Date",
  "Last Active",
  "Tags/Links",
  "Conversions",
  "Commision",
  "Total Orders",
  "Payouts",
  "Sales",
  "Refer URL",
];

interface ViewButtonProps {
  href?: string;
}

const ViewButton = ({ href = "" }: ViewButtonProps) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary p-1 text-center pb-2"
        data-bs-toggle="modal"
        data-bs-target={`#referLink`}
        style={{
          height: "22px",
          width: "48px",
          fontSize: "12px",
          lineHeight: "16px",
        }}
      >
        View
      </button>
      <ReferLink id="referLink" />
    </>
  );
};

const data = [
  {
    id: 1,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 2,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 3,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 4,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 5,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 6,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 7,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 8,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 9,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 10,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
  {
    id: 12,
    productName: "Amazon Tablet Screen",
    publisherName: "Worldeview.Ltd",
    startingDate: "2022-08-19 (12:17:55)",
    lastActive: "2022-08-19 (12:17:55)",
    tag: (
      <div>
        <img src={LinkIcon} alt="" />
        <span>B099HP4D5Z</span>
      </div>
    ),
    conversions: "12",
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
    totalOrders: "2566",

    payouts: "$2566",
    sales: "5",
    referUrl: <ViewButton />,
  },
];

const displayLabels = [
  // "id",
  "productName",
  "publisherName",
  "startingDate",
  "lastActive",
  "tag",
  "conversions",
  "commission",
  "totalOrders",
  "payouts",
  "sales",
  "referUrl",
];
function BrandPublishersTable() {
  const [tableData, setTableData] = useState(data);
  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.publisherName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.startingDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.lastActive.toLowerCase().includes(searchString.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchString.toLowerCase()) ||
        item.conversions.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commission.toLowerCase().includes(searchString.toLowerCase()) ||
        item.totalOrders.toLowerCase().includes(searchString.toLowerCase()) ||
        item.payouts.toLowerCase().includes(searchString.toLowerCase()) ||
        item.sales.toLowerCase().includes(searchString.toLowerCase()) ||
        item.referUrl.toLowerCase().includes(searchString.toLowerCase())
      );
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
      numOfPages={numOfPages}
      setNumOfPages={setNumOfPages}
      numOfRows={numOfRows}
      setNumOfRows={setNumOfRows}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default BrandPublishersTable;
