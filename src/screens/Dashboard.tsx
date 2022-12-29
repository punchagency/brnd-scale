import React, { FC } from "react";
import Card from "../components/Card";
import DashboardNotification from "../components/Notification/DashboardNotification";
import Layout from "../containers/Layouts/Layout";

const Dashboard: FC = () => {
  return (
    <Layout>
      <div className="position-relative">
        <div className="pt-4">
          <p className="fw-light mb-0">Today stats</p>
          <p className="h3">Dashboard</p>
        </div>
        <DashboardNotification brands={2} publishers={2} conversions={2} />
      </div>
      <div className="w-100">
        <div className="w-100 d-flex justify-content-between">
          <Card
            title="Total Sales"
            extra="27K"
            reduce={true}
            value="576"
            main={true}
            date="From 10 - 20 Nov"
          />
          <Card
            title="Total Orders"
            extra="27K"
            reduce={true}
            value="576"
            main={true}
            date="From 10 - 20 Nov"
          />
          <Card
            title="Total Revenue"
            extra="27K"
            reduce={true}
            value="576"
            main={true}
            date="From 10 - 20 Nov"
          />{" "}
          <Card
            title="Conversion rate"
            extra="27K"
            reduce={true}
            value="576"
            main={true}
            date="From 10 - 20 Nov"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
