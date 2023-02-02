import React, { useState } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import Table from "../../components/Table";
import Funnel from "../../components/svgs/Funnel";
import Search from "../../components/svgs/Search";
import DeleteIcon from "../../components/svgs/DeleteIcon";
import CalendarWrapper from "../../components/Calendar";
import TableFooter from "../../components/Table/TableFooter";
import Button from "../../components/Table/Button";
import Dropdown from "../../components/Table/Dropdown";
import SearchInput from "../../components/Table/SearchInput";
import TableDropdown from "../../components/Table/TableDropdown";
import TableToolbar from "../../components/Table/TableToolbar";

const headers = [
  "Publisher Name",
  "Product Name",
  "Brands",
  "Commissions",
  "Starting Date",
  "Status",
  "Products",
  "Growth",
  "Clicks",
  "Orders",
  "Revenue",
  "Sales",
  "Paid",
  "Permissions",
];

const data = [
  {
    id: 1,
    publisherName: "John Doe",
    productName: "Donna Slider",
    brands: "Xtreme Coutore",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "36%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 2,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 3,
    publisherName: "Peter Pan",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: (
      <button className="btn btn-success btn-sm" style={{ width: "100%" }}>
        Allowed
      </button>
    ),
  },
  {
    id: 4,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2022-12-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 5,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-success btn-sm">Allowed</button>,
  },
  {
    id: 6,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not allowed</button>,
  },
  {
    id: 7,
    publisherName: "John Jones",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-success btn-sm">Allowed</button>,
  },
  {
    id: 8,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 9,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-success btn-sm">Allowed</button>,
  },
  {
    id: 10,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 11,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 12,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Allowed</button>,
  },
  {
    id: 13,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 14,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 15,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-success btn-sm">Allowed</button>,
  },
  {
    id: 16,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 17,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 18,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 19,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 19,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 21,
    publisherName: "young John",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 22,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
  {
    id: 23,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-success btn-sm">Allowed</button>,
  },
  {
    id: 24,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-danger btn-sm">Not Allowed</button>,
  },
];

const displayLabels = [
  // "id",
  "publisherName",
  "productName",
  "brands",
  "commissions",
  "startDate",
  "status",
  "product",
  "growth",
  "clicks",
  "orders",
  "revenue",
  "sales",
  "paid",
  "permissions",
];

function AgencyPublishersTable() {
  const [tableData, setTableData] = useState(
    data.map((row) => {
      return { ...row, checked: false };
    })
  );

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
    <Table
      tableData={tableData}
      tableWidth={"130%"}
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
  );
}

export default AgencyPublishersTable;
