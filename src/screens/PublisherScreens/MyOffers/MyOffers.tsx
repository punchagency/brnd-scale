import React, { useState } from "react";
import ListIcon from "../../../components/svgs/ListIcon";
import PageTitle from "../../../components/PageTitle";

import TabButton from "../../../components/TabButton/TabButton";
import Overview from "./Overview";
import ActiveProducts from "./ActiveProducts";
import ActiveBrands from "./ActiveBrands";

function MyOffers({ index }: any) {
  const [tabIndex, setTabIndex] = useState<0 | 1 | 2>(index || 0);

  const getTitle = () => {
    if (tabIndex === 0) {
      return (
        <PageTitle
          title="Welcome to my offers"
          subtitle="Track your Current products"
        />
      );
    } else if (tabIndex === 1) {
      return (
        <PageTitle
          title="Welcome to my offers"
          subtitle="Track your Currently Joined Brands"
        />
      );
    } else {
      return (
        <PageTitle
          title="Welcome to my offers"
          subtitle="Track your Current products"
        />
      );
    }
  };

  const getHeading = () => {
    if (tabIndex === 0) {
      return (
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
      );
    } else if (tabIndex === 1) {
    } else {
      return (
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">
                List of all the (active products)
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  const getTable = () => {
    if (tabIndex === 0) {
      return <Overview />;
    } else if (tabIndex === 1) {
      return <ActiveBrands />;
    } else {
      return <ActiveProducts />;
    }
  };

  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3">{getTitle()}</div>
      <div className="col-12 mt-4 d-flex">
        {/* <PageMenu
          links={[
            { path: "/publisher/offers", title: "Overview" },
            { path: "/publisher/active-brands", title: "Active Brands" },
            { path: "/publisher/active-products", title: "Active Products" },
          ]}
          index={tabIndex}
          setTabIndex={setTabIndex}
        /> */}
        <TabButton
          text="Overview"
          onClick={() => {
            setTabIndex(0);
          }}
          selected={tabIndex === 0}
        />
        <TabButton
          text="Active Brands"
          onClick={() => {
            setTabIndex(1);
          }}
          selected={tabIndex === 1}
        />
        <TabButton
          text="Active Products"
          onClick={() => {
            setTabIndex(2);
          }}
          selected={tabIndex === 2}
        />
      </div>
      <div className="col-12 mt-4">{getHeading()}</div>
      {getTable()}
    </div>
  );
}

export default MyOffers;
