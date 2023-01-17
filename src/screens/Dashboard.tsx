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
      <a href="#" className="btn btn-outline-dark" style={{ fontSize: "12px" }}>
        View product
      </a>
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
      <a href="#" className="btn btn-outline-dark" style={{ fontSize: "12px" }}>
        View product
      </a>
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
      <a href="#" className="btn btn-outline-dark" style={{ fontSize: "12px" }}>
        View product
      </a>
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
      <a href="#" className="btn btn-outline-dark" style={{ fontSize: "12px" }}>
        View product
      </a>
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
  const filterData = (searchString: string) => {
    return tableData.filter((item: any) => {
      return (
        item.topPublishers.toLowerCase().includes(searchString.toLowerCase()) ||
        item.clicks.toLowerCase().includes(searchString.toLowerCase()) ||
        item.conversions.toLowerCase().includes(searchString.toLowerCase()) ||
        item.products.toLowerCase().includes(searchString.toLowerCase()) ||
        item.orders.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };

  const brandsFilterData = (searchString: string) => {
    return brandsTableData.filter((item: any) => {
      return (
        item.brands.toLowerCase().includes(searchString.toLowerCase()) ||
        item.clicks.toLowerCase().includes(searchString.toLowerCase()) ||
        item.conversions.toLowerCase().includes(searchString.toLowerCase()) ||
        item.productNames.toLowerCase().includes(searchString.toLowerCase()) ||
        item.orders.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };
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
      {/* <div className="w-100">
        <div className="w-100 d-flex justify-content-between flex-wrap">
          <Card
            title="Total Sales"
            extra="27K"
            reduce={true}
            value="576"
            main={selectedCard === 0}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(0)}
          />
          <Card
            title="Total Orders"
            extra="27K"
            reduce={true}
            value="576"
            main={selectedCard === 1}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(1)}
          />
          <Card
            title="Total Revenue"
            extra="27K"
            reduce={true}
            value="$259.99"
            main={selectedCard === 2}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(2)}
          />{" "}
          <Card
            title="Conversion rate"
            extra="27K"
            reduce={true}
            value="53.2%"
            main={selectedCard === 3}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(3)}
          />
        </div>
      </div> */}
  
      <div className="row ">
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mt-2">
          <TestCard title="Total Sales"
            extra="27K"
            reduce={true}
            value="576"
            main={selectedCard === 0}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(0)} />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
          <TestCard title="Total Orders"
            extra="27K"
            reduce={true}
            value="576"
            main={selectedCard === 1}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(1)} />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
          <TestCard title="Total Revenue"
            extra="27K"
            reduce={true}
            value="$259.99"
            main={selectedCard === 2}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(2)} />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
          <TestCard title="Conversion rate"
            extra="27K"
            reduce={true}
            value="53.2%"
            main={selectedCard === 3}
            date="From 10 - 20 Nov"
            onClick={() => setSelectedCard(3)} />
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
              deleteRow={deleteRow}
              editData={editData}
              addRow={addRow}
              filterData={filterData}
              hideCheckbox={true}
              hideFooter={true}
              hideToolbar={true}
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
              deleteRow={deleteRow}
              editData={editData}
              addRow={addRow}
              filterData={brandsFilterData}
              hideCheckbox={true}
              hideFooter={true}
              hideToolbar={true}
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
