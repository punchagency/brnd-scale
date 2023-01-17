import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Table from "../../components/Table";
import { Link, useLocation } from "react-router-dom";
import Badge from "../../components/Reports/Badge";
import PageTitle from "../../components/PageTitle";
import PageMenu from "../../components/Common/PageMenu";

const headers = [
  "Product Name",
  "Product ID",
  "Last Sale",
  "Prices",
  "Status",
  "Earned",
  "Commissions",
  "Active Coupons",
  "Conversions",
  "Total Orders",
  "Total Paid",
  "Quantity",
];

const data = [
  {
    id: 1,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div className="d-block">
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 2,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 3,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 4,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 5,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 6,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 7,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 8,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 9,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 10,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 11,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 12,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
  {
    id: 13,
    productName: (
      <Link
        to={""}
        
      >
        Amazon Fire 7 Kids tablet, 7" display, ages 3-7, with ad-free content kids love
      </Link>
    ),
    productId: "5516",
    lastSale: "2022-08-19  (12:17:55)",
    price: "$255.89",
    status: <button className="btn btn-outline-primary btn-sm">Promoted</button>,
    earned: "$255.89",
    commissions: (
      <div>
        12% <Badge />
      </div>
    ),
    activeCoupons: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    totalPaid: 2566,
    quantity: 6,
  },
];

const displayLabels = [
  // "id",
  "productName",
  "productId",
  "lastSale",
  "price",
  "status",
  "earned",
  "commissions",
  "activeCoupons",
  "conversions",
  "totalOrders",
  "totalPaid",
  "quantity",
];

function BrandProducts() {
  const [tableData, setTableData] = useState(data);

  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchString.toLowerCase()) ||
        item.startingDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.endingDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.tags.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commissionMade
          .toLowerCase()
          .includes(searchString.toLowerCase()) ||
        item.totalSale.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };
  const deleteRow = (id: number) => {
    setTableData((prev: any) => {
      return prev.filter((row: any) => row.id !== id);
    });
  };

  const addRow = (row: any) => {
    setTableData((prev: any) => {
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
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3">
          <PageTitle title="Dive in depth into Brands and Their Products" />
        </div>
        <div className="col-12 mt-4 d-flex">
          <PageMenu
            links={[
              { path: "/publisher/brand-products", title: "Overview" },
              { path: "/publisher/active-brands", title: "Brand Products" },
            ]}
          />
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <div className="col-9 d-inline d-flex align-items-center ">
                <ListIcon />
                <span className="fs-5 ms-2">
                  Every products avaliabe by the current brand is shown here and their status
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Table
            tableData={tableData}
            displayLabels={displayLabels}
            headers={headers}
            tableWidth={"150%"}
            deleteRow={deleteRow}
            editData={editData}
            addRow={addRow}
            filterData={filterData}
            numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
  );
}

export default BrandProducts;
