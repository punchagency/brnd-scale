import React, { useState } from "react";
import { selectUser } from "../../features/user/userSlice";
import { useAppSelector } from "../../app/hooks";
import ListIcon from "../../components/svgs/ListIcon";
import TabButton from "../../components/TabButton/TabButton";
import AgencyPublishersTable from "./AgencyPublishersTable";
import BrandPublishersTable from "./BrandPublishersTable";
import AgencyPublishersRequest from "./AgencyPublisherRequest";

function PublisherManage() {
  const [tabIndex, setTabIndex] = useState<0 | 1>(0);
  const userType = useAppSelector(selectUser);

  const getTitle = () => {
    switch (userType) {
      case "Agency":
        return "Manage Publishers";
      case "Brand":
        return "Your Running Publishers";
    }
  };

  const getTableHeader = () => {
    switch (userType) {
      case "Agency":
        return "List of top publishers";
      case "Brand":
        return "List of All the Publishers";
    }
  };

  const getTableBody = () => {
    switch (userType) {
      case "Agency":
        if (tabIndex === 0) {
          return <AgencyPublishersTable />;
        } else if (tabIndex === 1) {
          return (
            <div>
              <AgencyPublishersRequest />
            </div>
          );
        }
        break;
      case "Brand":
        return <BrandPublishersTable />;
    }
  };

  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>{getTitle()}</h4>
        {userType === "Agency" && (
          <button className="btn btn-primary btn-sm">Connect</button>
        )}
      </div>
      <div className="col-12 mt-4 d-flex">
        <TabButton
          text="Publishers"
          onClick={() => {
            setTabIndex(0);
          }}
          selected={tabIndex === 0}
        />
        {userType === "Agency" && (
          <TabButton
            text="Publisher Requests"
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
              <ListIcon /> <span className="fs-5 ms-2">{getTableHeader()}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-12">{getTableBody()}</div>
    </div>
  );
}

export default PublisherManage;
