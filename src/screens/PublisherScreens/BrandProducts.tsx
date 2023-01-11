import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import Table from "../../components/Table";
import { Link, useLocation } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import ReportsMenu from "../../components/Common/PageMenu";
import Badge from "../../components/Reports/Badge";
import WarningCircle from "../../components/svgs/WarningCircle";
import PageTitle from "../../components/PageTitle";
import PublisherOfferCard from "../../components/Cards/PublisherOfferCard";
import PageMenu from "../../components/Common/PageMenu";

import product from "../../assets/images/product.png";

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
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 2,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 3,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 4,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 5,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 6,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 7,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 8,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 9,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 10,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 11,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 12,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 13,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={product} alt="product image" />
      </div>
    ),
    tag: "B099HP4D5Z",
    brands: "JBL Xtreme",
    category: "JBL Xtreme",
    asinId: "B099HP4D5Z",
    totalClicks: "$255.89",
    totalSale: "$255.89",
    commissionEarned: "$255.89",
    conversions: 12,
    totalOrders: 2566,
    coupon: (
      <button type="button" className="btn btn-light btn-sm">
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
];

const displayLabels = [
  // "id",
  "image",
  "tag",
  "brands",
  "category",
  "asinId",
  "totalClicks",
  "totalSale",
  "commissionEarned",
  "conversions",
  "totalOrders",
  "coupon",
  "status",
];

function BrandProducts() {
  const [tableData, setTableData] = useState(data);
  const location = useLocation();

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
      return prev.filter((row: any) => row.id != id);
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
  return (
    <Layout>
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
            tableWidth={"115%"}
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

export default BrandProducts;
