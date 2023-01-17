import React, { useState } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import jbl from "../../assets/images/jbl.png";
import versace from "../../assets/images/versace.png";
import handm from "../../assets/images/HandM.png";
import herbalLife from "../../assets/images/herbalLife.png";

import keyboard from "../../assets/images/keyboard.png";
import ratings from "../../assets/images/ratings.png";
import Table from "../../components/Table";
import Funnel from "../../components/svgs/Funnel";
import Search from "../../components/svgs/Search";
import PencilIcon from "../../components/svgs/PencilIcon";
import PlusIcon from "../../components/svgs/PlusIcon";
import DeleteIcon from "../../components/svgs/DeleteIcon";
import CalendarWrapper from "../../components/Calendar";

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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon  /></div>,
    product: "10",
    growth: "12%",
    clicks: "12",
    orders: "14",
    revenue: "12",
    sales: "23",
    paid: "500$",
    permissions: <button className="btn btn-success btn-sm" style={{width: '100%'}}>Allowed</button>,
  },
  {
    id: 4,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2022-12-01",
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon  /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon  /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon  /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon  /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon  /></div>,
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
    status: <div className="d-flex justify-content-center"><ActiveIcon color={'#CB6862'} /></div>,
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
    "permissions"
];


function AgencyPublishersTable() {
  const [tableData, setTableData] = useState(data);
  const filterData = (searchString:any) => {
    if(!searchString) return tableData
      return tableData
        .filter((item:any) => {
          return (
            item.publisherName.toLowerCase().includes(searchString.toLowerCase()) ||
            item.productName
              .toLowerCase()
              .includes(searchString.toLowerCase()) ||
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
        })
        ;
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
      toolbar={<div className={`col-12 mt-3 d-flex flex-wrap flex-md-nowrap`}>
      <div className="col-12 col-md-6  d-flex ">
        <div className="col-6 d-flex align-items-center">
          <select
            className="form-select"
            value={numOfRows}
            onChange={(e) => {
              setNumOfRows(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{ width: "29%" }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
          <span className="ms-3">entries in the page</span>
        </div>
        <div className="col-5 d-flex align-items-center">
          <div className="col-12 d-flex align-items-center">
            <div className="card p-2 px-auto border-0">
              {/* <CalendarIcon /> */}
              <CalendarWrapper setComponentDate={setComponentDate} />
            </div>
            <div className="ms-2">
              <DeleteIcon />
            </div>
            
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex align-items-center">
        <div className="col-5">
          <div className="input-group flex-nowrap my-auto">
            <input
              type="text"
              className="form-control"
              placeholder=""
              value={searchString}
              onChange={(e) => {setSearchString(e.target.value); setCurrentPage(1)}}
              aria-label=""
              aria-describedby="addon-wrapping"
            />
            <span
              className="input-group-text bg-white border"
              id="addon-wrapping"
            >
              <Search color={"#00000"} />
            </span>
          </div>
        </div>
        <div className="col-3 ms-3">
          <select className="form-select w-90">
            <option value="" selected>
              Export
            </option>
            <option value="">20</option>
            <option value="">30</option>
          </select>
        </div>
        <div className="col-3 ms-3">
          <button type="button" className="btn btn-white">
            Filter
            <span className="ms-1">
              <Funnel />
            </span>
          </button>
        </div>
      </div>
    </div>}
    numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
    />
  );
}

export default AgencyPublishersTable;
