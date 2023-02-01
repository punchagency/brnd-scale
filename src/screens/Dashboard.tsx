import React, { FC, useState } from "react";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import ListContainer from "../components/ListContainer";
import DashboardNotification from "../components/Notification/DashboardNotification";
import Table from "../components/Table";
import BrandsImage from "../assets/images/images.svg";
import { selectUser, login, selectLoggedIn } from "../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import TestCard from "../components/Card/TestCard";
import ReferLink from "../components/Popups/ReferLink";
import ProductDetail from "../components/Popups/ProductDetail";

const headers = [
  "Top Publishers",
  "Clicks",
  "Conversions",
  "Products",
  "Orders",
];

const brandsHeaders = [
  "Images",
  "Brands",
  "Product Name",
  "See Details",
  "Conversions",
  "Clicks",
  "Orders",
];

const data = [
  {
    id: 1,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "12",
  },
  {
    id: 2,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "19",
  },
  {
    id: 3,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "12",
  },
  {
    id: 4,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "12",
  },
];

const brandsData = [
  {
    id: 1,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
  {
    id: 2,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
  {
    id: 3,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
  {
    id: 4,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
];

const displayLabels = [
  // "id",
  "topPublishers",
  "clicks",
  "conversions",
  "products",
  "orders",
];

const brandsDisplayLabels = [
  // "id",
  "images",
  "brands",
  "productNames",
  "seeDetails",
  "conversions",
  "clicks",
  "orders",
];

const Dashboard: FC = () => {
  const [tableData, setTableData] = useState(data);
  const [brandsTableData, setBrandsTableData] = useState(brandsData);
  const [selectedCard, setSelectedCard] = useState(0);
  const userType = useAppSelector(selectUser);
  

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  return (
    <>
      <div className="position-relative">
        <div className="pt-4">
          <p className="fw-light mb-0">Today stats</p>
          <p className="h3">{`${userType} `}Dashboard</p>
        </div>
        {userType === "Publisher" ? null : (
          <DashboardNotification brands={2} publishers={2} conversions={2} />
        )}
      </div>
      <div className="row ">
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mt-2">
          <TestCard
            title="Total Sales"
            extra="27K"
            reduce={true}
            value="576"
            main={selectedCard === 0}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(0)}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
          <TestCard
            title="Total Orders"
            extra="27K"
            reduce={true}
            value="576"
            main={selectedCard === 1}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(1)}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
          <TestCard
            title="Total Revenue"
            extra="27K"
            reduce={true}
            value="$259.99"
            main={selectedCard === 2}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(2)}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
          <TestCard
            title="Conversion rate"
            extra="27K"
            reduce={true}
            value="53.2%"
            main={selectedCard === 3}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(3)}
          />
        </div>
      </div>
      <div
        className="w-100 d-flex  pt-4 justify-content-between"
        style={{ gap: "20px" }}
      >
        <div className="col w-50">
          <ListContainer
            title={
              userType === "Publisher" ? "My Brands" : "List of Top Publishers"
            }
          >
            <Table
              tableData={tableData}
              displayLabels={displayLabels}
              headers={headers}
              tableWidth={"100%"}
              hideCheckbox={true}
              hideFooter={true}
              hideToolbar={true}
              numOfPages={numOfPages}
              setNumOfPages={setNumOfPages}
              numOfRows={numOfRows}
              setNumOfRows={setNumOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ListContainer>
        </div>
        <div className="col w-50 border rounded">
          <BarChart />
        </div>
      </div>
      <div
        className="w-100 d-flex pt-4 justify-content-between"
        style={{ gap: "20px" }}
      >
        <div className="col w-50">
          <ListContainer title="List of Top Brands">
            <Table
              tableData={brandsTableData}
              displayLabels={brandsDisplayLabels}
              headers={brandsHeaders}
              tableWidth={"100%"}
              hideCheckbox={true}
              hideFooter={true}
              hideToolbar={true}
              numOfPages={numOfPages}
              setNumOfPages={setNumOfPages}
              numOfRows={numOfRows}
              setNumOfRows={setNumOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ListContainer>
        </div>
        <div className="col w-50 border rounded ">
          <LineChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
