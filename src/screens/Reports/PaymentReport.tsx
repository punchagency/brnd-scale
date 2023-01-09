import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import ReportsMenu from "../../components/Reports/ReportsMenu";
import Badge from "../../components/Reports/Badge";
import WarningCircle from "../../components/svgs/WarningCircle";

const headers = [
  "Product Name",
  "Brands",
  "Campaign Name",
  "Starting Date",
  "Ending Date",
  "Tags",
  "Due",
  "Commission Made",
  "Commission Type",
  "Total Sales",
  "Total Clicks",
  "Status",
];

const data = [
  {
    id: 1,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 2,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 3,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-danger btn-sm">Pending</button>,
  },
  {
    id: 4,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 5,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 6,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 7,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 8,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 9,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 10,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 11,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 12,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 13,
    productName: "Donna Slider",
    brands: "JBL Xtreme",
    campaignName: "Xtreme Coutore",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    due: "1200",
    commissionMade: "$1200",
    commissionType: <div>12% <Badge /></div>,
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
];

const displayLabels = [
  // "id",
  "productName",
  "brands",
  "campaignName",
  "startingDate",
  "endingDate",
  "tags",
  "due",
  "commissionMade",
  "commissionType",
  "totalSale",
  "totalClicks",
  "status",
];

function PaymentReport() {
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
    setTableData((prev:any) => {
      return prev.filter((row:any) => row.id != id);
    });
  };

  const addRow = (row: any) => {
    setTableData((prev:any) => {
      return [...prev, { id: prev.length, ...row }];
    });
  };

  const editData = (data: any) => {
    // setTableData(prev=>{return prev.map()})
  };
    return (
        <Layout>
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3 d-flex justify-content-between">
          <h4>Reports</h4>
          <button className="btn btn-primary btn-sm">Connect</button>
        </div>
        <div className="col-12 mt-4 d-flex">
          <ReportsMenu />
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <div className="col-6 d-inline d-flex align-items-center ">
                <ListIcon /> <span className="fs-5 ms-2">In Depth Overview Of Your Payments</span>
              </div>
              <div className="col-2 offset-4 d-inline d-flex align-items-center ">
                <select className="form-select">
                  <option>Reports Type</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="card">
                <div className="row d-flex justify-content-center">
                  {/* <div className="col-12 d-flex" > */}
                    <div className="col-3" >
                      <ProductReportCard topLabel={"Impressions"} topValue={0} bottomLabel={"Clicks"} bottomValue={0} />
                    </div>
                    <div className="col-3">
                      <ProductReportCard topLabel={"RDA"} topValue={0} bottomLabel={"Gross Clicks"} bottomValue={0} />
                    </div>
                    <div className="col-3">
                      <ProductReportCard topLabel={"Revenue"} topValue={0} bottomLabel={"Pay Cut"} bottomValue={0} />
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Table
            tableData={tableData}
            displayLabels={displayLabels}
            headers={headers}
            hideToolbar={true}
            hideCheckbox={true}
            tableWidth={"115%"}
            deleteRow={deleteRow}
            editData={editData}
            addRow={addRow}
            filterData={filterData}
          />
        </div>
        <div className="col-12 mt-4 d-flex justify-content-center">
            <span className="me-2"><WarningCircle /></span><p>Sales are estimated in USD. Actual sales and Commision may be in different currency</p>
        </div>
      </div>
    </Layout>
    );
}

export default PaymentReport;