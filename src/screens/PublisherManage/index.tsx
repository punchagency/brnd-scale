import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import Table from "../../components/Table";
import ActiveIcon from "../../components/svgs/ActiveIcon";

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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    id: 4,
    publisherName: "Peter Pan Doe",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2022-12-01",
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    id: 20,
    brandName: "John Jones",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-success btn-sm">Allowed</button>,
  },
  {
    id: 21,
    publisherName: "young John",
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    commissions: "$255.89",
    startDate: "2023-01-01",
    status: "Amazon",
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
    status: "Amazon",
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
    status: "Amazon",
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
    status: <ActiveIcon color={'#CB6862'} />,
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

function PublisherManage() {
  const [tableData, setTableData] = useState(data);

  const filterData = (searchString:string) => {console.log('sdfghgfd', searchString, tableData);
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
  return (
    <Layout>
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3 d-flex justify-content-between">
          <h4>Manage Publishers</h4>
          <button className="btn btn-primary btn-sm">Connect</button>
        </div>
        <div className="col-12 mt-4 d-flex">
          <button className="btn btn-primary btn-lg w-25 me-2">Publishers</button>
          <button className="btn text-white btn-lg w-25 me-2" style={{backgroundColor: '#9C9C9C'}}>Publisher Requests</button>
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <span className="col d-inline d-flex align-items-center ">
                <ListIcon /> <span className="fs-5 ms-2">List of top publishers</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Table
            tableData={tableData}
            displayLabels={displayLabels}
            headers={headers}
            tableWidth={"110%"}
            deleteRow={deleteRow}
            editData={editData}
            addRow={addRow}
            filterData={filterData}
          />
        </div>
      </div>
    </Layout>
  );
}

export default PublisherManage;
