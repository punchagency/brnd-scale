import React, { useEffect, useState } from "react";
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
import { AgenciesPublishers } from "../../types";

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
  "publisher_name",
  "product_name",
  "brands_name",
  "commission",
  "starting_date",
  "status",
  "products",
  "growth_percentage",
  "clicks",
  "orders",
  "revenue",
  "sales",
  "paid_amount",
  "permission",
];

function AgencyPublishersTable() {
  const [tableData, setTableData] = useState<AgenciesPublishers[]>([]);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [numOfRows]);

  
  const handleDelete = () => {
    let ids = tableData.filter((row) => row.checked === true);
    // console.log(ids);
    var url = new URL(process.env.REACT_APP_BASE_URL+"agencies/publishers");
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify({ ids: ids }),
    }).then(async (response) => {
      let res = await response.json();//console.log(res)

      if (res.success) {
        setSearchString(""); //Trigger data refresh
      } else {
        //Show error message
      }
    });
  };

  const updatePermission = (id:number)=>{alert(id)
    let updates = tableData.filter((row:any)=>{
      if(row.id === id){
        return {...row, permissions: ""}
      }
    })
    var url = new URL(
      process.env.REACT_APP_BASE_URL+"agencies/publishers?"
    );
    fetch(url, { mode: "cors", method: 'PUT' }).then(async (response) => {
      let res = await response.json();
      if (res.success) {
        setSearchString(""); //Trigger data refresh
      } else {
        //Show error message
      }
    })
  }

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
      process.env.REACT_APP_BASE_URL+"agencies/publishers?" + searchParams.toString()
    );

    // console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {//console.log(await response.text())
      let res = await response.json();

      setTableData(
        res.map((row: any) => {
          return {
            ...row,
            status: <div className="d-flex justify-content-center">
            <ActiveIcon color={row.status ? "#65DD2C" : "#CB6862"} />
          </div>,
            permission: (//What are the options for permissions
              <button onClick={()=>updatePermission(row.id)} className={`btn ${'btn-danger'} btn-sm`}>{row.permissions ? "Allowed" : "Not Allowed"}</button>
            ),
            checked: false,
          };
        })
      );
    });
  }, [componentDate, searchString]);

  return (
    <Table
      tableData={tableData}
      tableWidth={"130%"}
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
                  <CalendarWrapper setComponentDate={setComponentDate} format={2} />
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
