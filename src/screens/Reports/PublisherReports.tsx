import React, { useEffect, useState } from "react";
import Table from "../../components/Table";

import ListIcon from "../../components/svgs/ListIcon";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import EditIcon from "../../components/svgs/EditIcon";
import Badge from "../../components/Reports/Badge";
import PageMenu from "../../components/Common/PageMenu";
import TableToolbar from "../../components/Table/TableToolbar";
import TableDropdown from "../../components/Table/TableDropdown";
import CalendarWrapper from "../../components/Calendar";
import Button from "../../components/Table/Button";
import DeleteIcon from "../../components/svgs/DeleteIcon";
import SearchInput from "../../components/Table/SearchInput";
import Dropdown from "../../components/Table/Dropdown";
import Funnel from "../../components/svgs/Funnel";
import TableFooter from "../../components/Table/TableFooter";
import { AgenciesReportingPublishers } from "../../types";

const headers = [
  "Edit",
  "Product Name",
  "Publishers",
  "Start Date",
  "Last Active",
  "Status",
  "Conversions",
  "Commissions",
  "Total Orders",
  "Total Paid",
  "Quantity",
  "Refer URL",
];

const data = [
  {
    id: 1,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="text-success">Enabled</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 2,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="text-success">Enabled</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 3,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="text-success">Enabled</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 4,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="">Pending</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 5,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="">Pending</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 6,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="text-success">Enabled</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 7,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="text-success">Enabled</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 8,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="">Pending</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 9,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="">Pending</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 10,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="text-success">Enabled</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 11,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="">Pending</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 12,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="text-success">Enabled</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
  {
    id: 13,
    edit: (
      <div>
        <EditIcon />
      </div>
    ),
    productName: "Amazon Tablet Screen",
    publishers: "World View Ltd.",
    startingDate: "2023-01-01 (12:17:55)",
    lastActive: "2023-01-01 (12:17:55)",
    status: <span className="">Pending</span>,
    conversions: 12,
    commission: (
      <div>
        12% <Badge />
      </div>
    ),
    totalOrders: "2566",
    totalPaid: "2566",
    quantity: "14",
    referUrl: (
      <button className="btn btn-sm btn-outline-primary">Click Here</button>
    ),
  },
];

const displayLabels = [
  "edit",
  "product_name",
  "publishers",
  "starting_date",
  "last_active",
  "status",
  "conversions",
  "commission",
  "total_orders",
  "total_paid",
  "quantity",
  "prefer_url",
];

function PublisherReports() {
  const [tableData, setTableData] = useState<AgenciesReportingPublishers[]>([]);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);

  const [total, setTotal] = useState(0)

  const handleDelete = () => {
    let ids = tableData.filter((row) => row.checked === true);
    // console.log(ids);
    var url = new URL(
      process.env.REACT_APP_BASE_URL + "/agencies/reports/publishers"
    );
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({ ids: ids }),
    }).then(async (response) => {
      let res = await response.json(); //console.log(res)

      if (res.success) {
        setSearchString(""); //Trigger data refresh
      } else {
        //Show error message
      }
    });
  };

  const editPublisher = (id: number) => {
    alert(id);
    let updates = tableData.filter((row: any) => {
      if (row.id === id) {
        return { ...row, permissions: "" };
      }
    });
    var url = new URL(process.env.REACT_APP_BASE_URL + "agencies/brands?");
    fetch(url, { mode: "cors", method: "PUT" }).then(async (response) => {
      let res = await response.json();
      if (res.success) {
        setSearchString(""); //Trigger data refresh
      } else {
        //Show error message
      }
    });
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
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "/agencies/reports/publishers?" +
        searchParams.toString()
    );

    // console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {
      //console.log(await response.text())
      let res = await response.json();

      setTableData(
        res.data.data.map((row: any) => {
          return {
            ...row,
            edit: (
              <div>
                <button
                  className="btn btn-white border-0 btn-sm"
                  onClick={(e) => editPublisher(row.id)}
                >
                  <EditIcon />
                </button>
              </div>
            ),
            status: <span className="">Pending</span>,
            commission: (
              <div>
                12% <Badge />
              </div>
            ),
            prefer_url: (
              <button className="btn btn-sm btn-outline-primary">
                Click Here
              </button>
            ),
            checked: false,
          };
        })
      );
      setTotal(res.data.total)
    });
  }, [componentDate, searchString]);

  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>See Reports of the Publishers</h4>
        <button className="btn btn-primary btn-sm">Connect</button>
      </div>
      <div className="col-12 mt-4 d-flex">
        <PageMenu
          links={[
            { path: "/product-reports", title: "Product Report" },
            { path: "/publisher-reports", title: "Publisher Report" },
            { path: "/payment-reports", title: "Payments" },
          ]}
        />
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">List of top Publishers</span>
              {/* <div className="card p-2 ms-4 px-auto">
                  <CalendarIcon />
                </div> */}
            </div>
            <div className="col-2 offset-4 d-inline d-flex align-items-center ">
              {/* <select className="form-select">
                  <option>Reports Type</option>
                </select> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Table
          tableData={tableData}
          tableWidth={"120%"}
          displayLabels={displayLabels}
          setTableData={setTableData}
          headers={headers}
          numOfRows={numOfRows}
          numOfPages={numOfPages}
          currentPage={currentPage}
          toolbar={
            <TableToolbar>
              <div className="col-12 col-md-6  d-flex ">
                <TableDropdown
                  value={numOfRows}
                  setValue={setNumOfRows}
                  width={"29%"}
                  data={[
                    { title: 10, value: 10 },
                    { title: 20, value: 20 },
                  ]}
                />
                <div className="col-5 d-flex align-items-center">
                  <div className="col-12 d-flex align-items-center">
                    <div className="card p-2 px-auto border-0">
                      <CalendarWrapper
                        setComponentDate={setComponentDate}
                        format={2}
                      />
                    </div>
                    <div className="ms-2">
                      <Button
                        bootstrapClass="btn btn-sm"
                        clickFunc={handleDelete}
                        content={<DeleteIcon />}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                <div className="col-5">
                  <SearchInput
                    value={searchString}
                    onChangeFunc={(value: string) => {
                      setSearchString(value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div className="col-3 ms-3">
                  <Dropdown
                    width="90%"
                    data={[
                      { title: "Export", value: "" },
                      { title: 10, value: 10 },
                    ]}
                    value=""
                    setValue={() => {}}
                  />
                </div>
                <Button
                  bootstrapClass="btn btn-white "
                  content={
                    <>
                      Filter
                      <span className="ms-1">
                        <Funnel />
                      </span>
                    </>
                  }
                />
              </div>
            </TableToolbar>
          }
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
    </div>
  );
}

export default PublisherReports;
