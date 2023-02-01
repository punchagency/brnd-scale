import React, { useState } from "react";
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

const headers = [
  "Edit",
  "Product Name",
  "Publishers",
  "Start Date",
  "Last Actiive",
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
  // "id",
  "edit",
  "productName",
  "publishers",
  "startingDate",
  "lastActive",
  "status",
  "conversions",
  "commission",
  "totalOrders",
  "totalPaid",
  "quantity",
  "referUrl",
];

function PublisherReports() {
  const [tableData, setTableData] = useState(data);

  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.publisherName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.brands.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commissions.toLowerCase().includes(searchString.toLowerCase()) ||
        item.startDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.product.toLowerCase().includes(searchString.toLowerCase()) ||
        item.growth.toLowerCase().includes(searchString.toLowerCase()) ||
        item.clicks.toLowerCase().includes(searchString.toLowerCase()) ||
        item.orders.toLowerCase().includes(searchString.toLowerCase()) ||
        item.revenue.toLowerCase().includes(searchString.toLowerCase()) ||
        item.sales.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };
  
  const handleCheck = (id: any, value: boolean) => {
    setTableData((prev) =>
      prev.map((row) => {
        return row.id === id ? { ...row, checked: value } : { ...row };
      })
    );
  };

  const checkAll = (value: boolean) => {
    setTableData((prev) =>
      prev.map((row) => {
        return { ...row, checked: value };
      })
    );
  };

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<string | {from: string, to: string}>({from: '', to: ''});
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  return (
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3 d-flex justify-content-between">
          <h4>Reports</h4>
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
                <ListIcon /> <span className="fs-5 ms-2">List of top Publishers</span>
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
            handleCheck={handleCheck}
            checkAll={checkAll}
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
                        <CalendarWrapper setComponentDate={setComponentDate} />
                      </div>
                      <div className="ms-2">
                        <Button
                          bootstrapClass="btn btn-sm"
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
                totalData={tableData.length}
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
