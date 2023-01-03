import React, { FC } from "react";
import Card from "../components/Card";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import ListContainer from "../components/ListContainer";
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
        <div className="w-100 d-flex justify-content-between flex-wrap">
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
      <div className="w-100 d-flex  pt-4 justify-between">
        <div className="col-6 border">
          <ListContainer title="List of Top Publishers">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </ListContainer>
        </div>
        <div className="col-6 border">
          <BarChart />
        </div>
      </div>
      <div className="w-100 d-flex pt-4">
        <div className="col-6 border mw-50">
          <ListContainer title="List of Top Brands">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </ListContainer>
        </div>
        <div className="col-6 border">
          <LineChart />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
