import React, { useState } from "react";
import PageTitle from "../../../components/PageTitle";
import ListIcon from "../../../components/svgs/ListIcon";
import TabButton from "../../../components/TabButton/TabButton";
import JoinBrand from "../JoinBrand";
import JoinOffer from "../JoinOffer";

const PublisherOffers = ({index}:any) => {
  const [tabIndex, setTabIndex] = useState<0 | 1 >(index || 0);

  const getTitle = () => {
    if (tabIndex === 0) {
      return <PageTitle title="Get Associated with Top brands " />;
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
                List of Brands avaliable to Join
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">
                List of All the active products
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  const getTable = () => {
    if (tabIndex === 0) {
      return <JoinBrand />;
    }  else {
      return <JoinOffer />;
    }
  };
  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3">{getTitle()}</div>
      <div className="col-12 mt-4 d-flex">
        <TabButton
          text="Join Brand"
          onClick={() => {
            setTabIndex(0);
          }}
          selected={tabIndex === 0}
        />
        <TabButton
          text="Available Offers"
          onClick={() => {
            setTabIndex(1);
          }}
          selected={tabIndex === 1}
        />
      </div>
      <div className="col-12 mt-4">{getHeading()}</div>
      {getTable()}
    </div>
  );
};

export default PublisherOffers;
