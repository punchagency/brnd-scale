import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import { selectUser } from "../../features/user/userSlice";
import { useAppSelector } from "../../app/hooks";
import keyboard from "../../assets/images/keyboard.png";
import ratings from "../../assets/images/ratings.png";

import { Link } from "react-router-dom";
import ChainLink from "../../components/svgs/ChainLink";
import TabButton from "../../components/TabButton/TabButton";
import AgencyOffersTable from "./AgencyOffersTable";
import BrandOffersTable from "./BrandOffersTable";
import BrandProductTable from "./BrandProductTable";

function Offers() {
  const userType = useAppSelector(selectUser);
  const [tabIndex, setTabIndex] = useState<0 | 1>(0);
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

  const getTableBody = () => {
    switch (userType) {
      case "Agency":
        return <AgencyOffersTable />;

      case "Brand":
        if (tabIndex === 0) {
          return <BrandOffersTable />;
        } else if (tabIndex === 1) {
          return <BrandProductTable />;
        }
    }
  };

  return (
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3 d-flex justify-content-between">
          <h4>{getTitle()}</h4>
          {/* {userType === "Agency" && (
            <button className="btn btn-primary btn-sm">Connect</button>
          )} */}
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
                                <img src={keyboard} alt="" />
                                <div className="mb-4">
                                  <h5 className="mb-2">Amazon short Link</h5>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur{" "}
                                  </p>
                                </div>
                                <div className="mb-4">
                                  <h5 className="mb-2">Ratings</h5>
                                  <img src={ratings} alt="" />
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
          {getTableBody()}
        </div>
      </div>

  );
}

export default Offers;
