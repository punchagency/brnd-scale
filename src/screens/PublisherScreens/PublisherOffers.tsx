import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import Table from "../../components/Table";
import { Link, useLocation } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import ReportsMenu from "../../components/Reports/ReportsMenu";
import Badge from "../../components/Reports/Badge";
import WarningCircle from "../../components/svgs/WarningCircle";
import PageTitle from "../../components/PageTitle";
import PublisherOfferCard from "../../components/Cards/PublisherOfferCard";

const headers = [
  "Product Name",
  "Brand",
  "Starting Date",
  "Ending Date",
  "Tags",
  "Commission Made",
  "Commission Type",
  "Total Sales",
  "Total Clicks",
  "Status",
];

const data = [
  {
    id: 1,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
  {
    id: 2,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-danger btn-sm">Not Promoted</button>,
  },
  {
    id: 3,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-secondary btn-sm text-dark">In Progress</button>,
  },
  {
    id: 4,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
  {
    id: 5,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-danger btn-sm">Not Promoted</button>,
  },
  {
    id: 6,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
  {
    id: 7,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
  {
    id: 8,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-secondary btn-sm">In Progress</button>,
  },
  {
    id: 9,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
  {
    id: 10,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
  {
    id: 11,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
  {
    id: 12,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-danger btn-sm">Not Promoted</button>,
  },
  {
    id: 13,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Promoted</button>,
  },
];

const displayLabels = [
  // "id",
  "productName",
  "brand",
  "startingDate",
  "endingDate",
  "tags",
  "commissionMade",
  "commissionType",
  "totalSale",
  "totalClicks",
  "status",
];

function MyOffers() {
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
        item.commissionMade.toLowerCase().includes(searchString.toLowerCase()) ||
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
          <PageTitle title="Welcome to my offers" />
        </div>
        <div className="col-12 mt-4 d-flex">
          <Link
            to="/product-reports"
            className={`btn ${
              location.pathname == "/publisher/offers"
                ? "btn-light"
                : "btn-dark"
            } btn-lg w-25 me-2`}
          >
            Overview
          </Link>
          <Link
            to="/publisher-reports"
            className={`btn ${
              location.pathname == "/publisher-reports"
                ? "btn-light"
                : "btn-dark"
            } btn-lg w-25 me-2`}
          >
            Active Brands
          </Link>
          <Link
            to="/payment-reports"
            className={`btn ${
              location.pathname == "/payment-reports" ? "btn-light" : "btn-dark"
            } btn-lg w-25 me-2`}
          >
            Active Products
          </Link>
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <div className="col-6 d-inline d-flex align-items-center ">
                <ListIcon />{" "}
                <span className="fs-5 ms-2">
                  See how your brands and their products are doing
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
            // hideToolbar={true}
            hideCheckbox={true}
            tableWidth={"103%"}
            deleteRow={deleteRow}
            editData={editData}
            addRow={addRow}
            filterData={filterData}
            cards={
              <div className="col-10 offset-1">
                <div className="row  d-flex justify-content-center">
                  <div className="col-3 ps-2">
                    <PublisherOfferCard
                      title="Total Sales"
                      value={1024}
                      date={"From 20 - 30 Nov"}
                    />
                  </div>
                  <div className="col-3 ps-2">
                    <PublisherOfferCard
                      title="Total Commision made"
                      value={1024}
                      date={"From 20 - 30 Nov"}
                    />
                  </div>
                  <div className="col-3 ps-2">
                    <PublisherOfferCard
                      title="Total Brands"
                      value={1024}
                      date={"From 20 - 30 Nov"}
                    />
                  </div>
                  <div className="col-3 ps-2">
                    <PublisherOfferCard
                      title="Total Products"
                      value={1024}
                      date={"From 20 - 30 Nov"}
                    />
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </Layout>
  );
}

export default MyOffers;
