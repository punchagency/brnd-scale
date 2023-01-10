import React, { useState } from "react";
import ListIcon from "../components/svgs/ListIcon";
import Layout from "../containers/Layouts/Layout";
import Table from "../components/Table";
import { selectUser } from "../features/user/userSlice";
import { useAppSelector } from "../app/hooks";

import ActiveIcon from "../components/svgs/ActiveIcon";

import jbl from "../assets/images/jbl.png";
import versace from "../assets/images/versace.png";
import handm from "../assets/images/HandM.png";
import herbalLife from "../assets/images/herbalLife.png";

import keyboard from "../assets/images/keyboard.png";
import ratings from "../assets/images/ratings.png";

import { Link } from "react-router-dom";
import ChainLink from "../components/svgs/ChainLink";
import TabButton from "../components/TabButton/TabButton";

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

function Offers() {
  const [tableData, setTableData] = useState(data);
  const userType = useAppSelector(selectUser);
  const [tabIndex, setTabIndex] = useState<0 | 1>(0);
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

  const getTitle = () => {
    switch (userType) {
      case "Agency":
        return "See Your Partners";
      case "Brand":
        if (tabIndex === 0) {
          return "See Offers from Agencies and Join";
        }
        return "Track & Manage your Products";
    }
  };

  const getTableHeader = () => {
    if (tabIndex === 0) {
      if (userType === "Agency") {
        return "List of your offers";
      } else if (userType === "Brand") {
        return "List of Offers by Agencies";
      }
    } else {
      return "List of Products in your Inventory";
    }
  };

  return (
    <Layout>
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3 d-flex justify-content-between">
          <h4>{getTitle()}</h4>
          {userType === "Agency" && (
            <button className="btn btn-primary btn-sm">Connect</button>
          )}
        </div>
        <div className="col-12 mt-4 d-flex">
          <TabButton
            text="Offers"
            onClick={() => {
              setTabIndex(0);
            }}
            selected={tabIndex === 0}
          />
          {userType === "Brand" && (
            <TabButton
              text="Manage products"
              onClick={() => {
                setTabIndex(1);
              }}
              selected={tabIndex === 1}
            />
          )}
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <span className="col d-inline d-flex align-items-center ">
                <ListIcon />{" "}
                <span className="fs-5 ms-2">{getTableHeader()}</span>
              </span>
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
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header bg-dark text-white">
                  <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
                    BRNDScale
                  </h1>
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button> */}
                  <span
                    className="border border-light bg-dark text-light px-3 rounded me-5"
                    style={{}}
                  >
                    Product Details
                  </span>
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
                                <img src={keyboard} />
                                <div className="mb-4">
                                  <h5 className="mb-2">Amazon short Link</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur{" "}
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Ratings</h5>
                                  <img src={ratings} />
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Tag/Link</h5>
                                  <p>
                                    <span>
                                      <ChainLink />
                                    </span>
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
            tableWidth={"130%"}
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

export default Offers;
