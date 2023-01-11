import React, { useState } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import jbl from "../../assets/images/jbl.png";
import versace from "../../assets/images/versace.png";
import handm from "../../assets/images/HandM.png";
import herbalLife from "../../assets/images/herbalLife.png";

import keyboard from "../../assets/images/keyboard.png";
import ratings from "../../assets/images/ratings.png";
import Table from "../../components/Table";

const headers = [
  "Image",
  "Campaign Name",
  "Brand Name",
  "Set Commission",
  "Category",
  "Countries",
  "Ending Date",
  "Visibility",
  "Platform",
  "Accounts Manager",
  "Sales Manager",
  "Device Type",
  "Status",
];

const data = [
  {
    id: 1,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={jbl} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 2,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={handm} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 3,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={herbalLife} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 4,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={versace} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 5,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={jbl} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 6,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={handm} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 7,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={herbalLife} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 8,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={versace} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 9,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={jbl} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 10,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={handm} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 11,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={herbalLife} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
  {
    id: 12,
    image: (
      <div
        className="d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={versace} />
      </div>
    ),
    campaignName: "Black Friday Sale",
    brandName: "Xtreme Coutore",
    setCommission: (
      <button className="btn btn-outline-primary btn-sm">Set Commission</button>
    ),
    category: "Health and Care",
    countries: "United States",
    endingDate: "2022-09-10",
    visibility: "hidden",
    platform: "Donna Slider",
    accountsManager: "Donna Slider",
    salesManager: "Donna Slider",
    deviceType: "Donna Slider",
    status: (
      <div className="d-flex justify-content-center">
        <ActiveIcon color={"#CB6862"} />
      </div>
    ),
  },
];

const displayLabels = [
  // "id",
  "image",
  "campaignName",
  "brandName",
  "setCommission",
  "category",
  "countries",
  "endingDate",
  "visibility",
  "platform",
  "accountsManager",
  "salesManager",
  "deviceType",
  "status",
];

function AgencyOffersTable() {
  const [tableData, setTableData] = useState(data);
  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.publisherName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
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
    });
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
    <Table
      tableData={tableData}
      displayLabels={displayLabels}
      headers={headers}
      tableWidth={"130%"}
      deleteRow={deleteRow}
      editData={editData}
      addRow={addRow}
      filterData={filterData}
    />
  );
}

export default AgencyOffersTable;
