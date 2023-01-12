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
  "Images",
  "Tags",
  "Brands",
  "Category",
  "ASIN ID",
  "Total Clicks",
  "Total Sales",
  "Commission Earned",
  "Conversions",
  "Total Orders",
  "Coupons",
  "Promote",
];

const data = [
  {
    id: 1,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 2,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 3,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 4,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 5,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 6,
    image: (
      <div className="d-flex justify-content-center">
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
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 8,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 9,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 10,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
  },
  {
    id: 11,
    image: (
      <div className="d-flex justify-content-center">
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
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 12,
    image: (
      <div className="d-flex justify-content-center">
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
      <button
        type="button"
        className="btn btn-light btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Click to View
      </button>
    ),
    status: <button className="btn btn-primary btn-sm">Copy/Create URL</button>,
  },
  {
    id: 13,
    image: (
      <div className="d-flex justify-content-center">
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
    status: (
      <button
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Copy/Create URL
      </button>
    ),
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

function ActiveProducts() {
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
          <PageTitle
            title="Welcome to my offers"
            subtitle="Track your Current products"
          />
        </div>
        <div className="col-12 mt-4 d-flex">
          <PageMenu
            links={[
              { path: "/publisher/offers", title: "Overview" },
              { path: "/publisher/active-brands", title: "Active Brands" },
              { path: "/publisher/active-products", title: "Active Products" },
            ]}
          />
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <div className="col-6 d-inline d-flex align-items-center ">
                <ListIcon />{" "}
                <span className="fs-5 ms-2">
                  List of All the (active products)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Modal  */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header bg-dark text-white">
                  <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
                    BRNDScale
                  </h1>
                  {/* <span
                    className="border border-light bg-dark text-light px-3 rounded me-5"
                    style={{}}
                  >
                    Product Details
                  </span> */}
                </div>
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-10 offset-1">
                        <div className="card bg-light">
                          <div className="card-body">
                            <div className="row">
                              <h5 className="mb-3">About the product</h5>
                              <div className="col-6">
                                <h4 className="mb-4">
                                  razor xf mechanical Keyboard
                                </h4>
                                <div>
                                  <h5>Details</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam eu turpis molestie,
                                    dictum est a, mattis tellus. Sed dignissim,
                                    metus nec fringilla accumsan, risus sem
                                    sollicitudin lacus, ut interdum tellus elit
                                    sed risus. Maecenas eget condimentum velit,
                                    sit amet feugiat lectus. Class aptent taciti
                                    sociosqu{" "}
                                  </p>
                                </div>
                                <div>
                                  <h5>Features</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Etiam eu turpis molestie,
                                    dictum est a, mattis tellus. Sed dignissim,
                                    metus nec fringilla accumsan, risus sem
                                    sollicitudin lacus, ut interdum tellus elit
                                    sed risus. Maecenas eget condimentum velit,
                                    sit amet feugiat lectus. Class aptent taciti
                                    sociosqu{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="col-6">
                                {/* <img src={keyboard} /> */}
                                <div className="mb-4">
                                  <h5 className="mb-2">Amazon short Link</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur{" "}
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Ratings</h5>
                                  {/* <img src={ratings} /> */}
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Tag/Link</h5>
                                  <p>
                                    <span>{/* <ChainLink /> */}</span>
                                    B099HP4D5Z
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Price</h5>
                                  <p>USD $258</p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Link to="" className="text-dark mt-4">
                                  See Reportings
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mt-4 justify-content-end">
                          <button
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default ActiveProducts;
