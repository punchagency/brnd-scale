import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import TabButton from "../../components/TabButton/TabButton";
import ReportSummary from "./ReportSummary";
import BrandFullReportTable from "./BrandFullReportTable";
import BrandPaymentsTable from "./BrandPaymentsTable";
import WarningCircle from "../../components/svgs/WarningCircle";
import CalendarWrapper from "../../components/Calendar";
import ArrowsClockwise from "../../assets/images/ArrowsClockwise.svg";
import Gift from "../../assets/images/gift.svg";
import Cookies from "js-cookie";

function Reports() {
  const [tabIndex, setTabIndex] = useState<0 | 1 | 2>(0);
  const [componentDate, setComponentDate] = useState<string | { from: string; to: string }>()
  let tempUser = useAppSelector(selectUser);
  const userType = Cookies.get('userType') || tempUser;

  const getTabList = () => {
    switch (userType) {
      case "Agency":
        return (
          <>
            <TabButton
              text="Product Report"
              onClick={() => {
                setTabIndex(0);
              }}
              selected={tabIndex === 0}
            />
            <TabButton
              text="Publisher Report"
              onClick={() => {
                setTabIndex(1);
              }}
              selected={tabIndex === 1}
            />
            <TabButton
              text="Payments"
              onClick={() => {
                setTabIndex(2);
              }}
              selected={tabIndex === 2}
            />
          </>
        );
      case "Brand":
        return (
          <>
            <TabButton
              text="Full Report"
              onClick={() => {
                setTabIndex(0);
              }}
              selected={tabIndex === 0}
            />
            <TabButton
              text="Payments"
              onClick={() => {
                setTabIndex(1);
              }}
              selected={tabIndex === 1}
            />
          </>
        );
    }
  };

  const getTitle = () => {
    switch (userType) {
      case "Agency":
        if (tabIndex === 0) {
          return "Reports";
        }
        break;
      case "Brand":
        if (tabIndex === 0) {
          return "Reportings";
        } else if (tabIndex === 1) {
          return "Join Deals from Affiliate Brands";
        }
        break;
      default:
        return "Title";
    }
  };

  const getTableHeader = () => {
    switch (userType) {
      case "Brand":
        if (tabIndex === 0) {
          return <>
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon /> <span className="fs-5 ms-2">See the reports</span>
              <div className="p-2 ms-4 px-auto">
                <CalendarWrapper setComponentDate={setComponentDate} />
              </div>
              <div className="btn border rounded ms-2">
                Run report <img src={ArrowsClockwise} alt="" className="ms-3" />
              </div>
            </div>
            <div className="col-2 offset-4 d-inline d-flex align-items-center ">
              <select className="form-select">
                <option>Reports Type</option>
              </select>
            </div>
          </>;
        } else if(tabIndex === 1) {
            return <>
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon /> <span className="fs-5 ms-2">In-depth Overview of your Payments</span>
            </div>
            <div className="col-4 offset-2 d-inline d-flex align-items-center ">
                <img src={Gift} alt="" className="me-3"/>
                <span style={{fontSize: "14px"}}>Get Commission Rewards by Referring to your links</span>
            </div>
          </>;
        }
        break;
      default:
        return <div>18398934</div>;
    }
  };

  const getTableBody = () => {
    switch (userType) {
      case "Brand":
        if (tabIndex === 0) {
          return <BrandFullReportTable componentDate={componentDate} />;
        } else if (tabIndex === 1) {
          return <BrandPaymentsTable />;
        }
        break;
      default:
        return <div></div>;
    }
  };

  const getButtomReport = () => {
    switch (userType) {
      case "Agency":
        if (tabIndex === 2) {
          return <ButtomReport />;
        }
        break;
      case "Brand":
        if (tabIndex === 1) {
          return <ButtomReport />;
        }
        break;
      default:
        <div></div>;
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
      <div className="col-12 mt-4 d-flex">{getTabList()}</div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            {getTableHeader()}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="card">
              <div className="row d-flex justify-content-center">
                <ReportSummary tabIndex={tabIndex} componentDate={componentDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">{getTableBody()}</div>
      {getButtomReport()}
    </div>
  );
}

export default Reports;

const ButtomReport = () => {
  return (
    <div className="col-12 mt-4 d-flex justify-content-center">
      <span className="me-2">
        <WarningCircle />
      </span>
      <p>
        Sales are estimated in USD. Actual sales and Commision may be in
        different currency
      </p>
    </div>
  );
};
