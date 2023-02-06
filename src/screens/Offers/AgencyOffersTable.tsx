import React, { useState } from "react";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import jbl from "../../assets/images/jbl.png";
import versace from "../../assets/images/versace.png";
import handm from "../../assets/images/HandM.png";
import herbalLife from "../../assets/images/herbalLife.png";

import Table from "../../components/Table";
import TableFooter from "../../components/Table/TableFooter";
import Funnel from "../../components/svgs/Funnel";
import Button from "../../components/Table/Button";
import Dropdown from "../../components/Table/Dropdown";
import SearchInput from "../../components/Table/SearchInput";
import DeleteIcon from "../../components/svgs/DeleteIcon";
import CalendarWrapper from "../../components/Calendar";
import TableDropdown from "../../components/Table/TableDropdown";
import TableToolbar from "../../components/Table/TableToolbar";

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
        <img src={jbl} alt="" />
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
        <img src={handm} alt="" />
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
        <img src={herbalLife} alt="" />
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
        <img src={versace} alt="" />
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
        <img src={jbl} alt="" />
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
        <img src={handm} alt="" />
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
        <img src={herbalLife} alt="" />
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
        <img src={versace} alt="" />
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
        <img src={jbl} alt="" />
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
        <img src={handm} alt="" />
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
        <img src={herbalLife} alt="" />
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
        <img src={versace} alt="" />
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

// "image",
// "promotion",
// "offer_name",
// "agency",
// "prices",
// "status",
// "commission_offer",
// "tag_link",
// "publishers",
// "asin_id",
// "offer_status",
// "date",
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
  
  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<string | {from: string, to: string}>({from: '', to: ''});
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
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
                <CalendarWrapper setComponentDate={setComponentDate} />
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

export default AgencyOffersTable;
