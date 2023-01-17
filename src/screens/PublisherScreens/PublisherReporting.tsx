import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import Table from "../../components/Table";
import ActiveIcon from "../../components/svgs/ActiveIcon";
import { Link } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import ReportsMenu from "../../components/Common/PageMenu";
import PageMenu from "../../components/Common/PageMenu";

const headers = [
  "Product Name",
  "Brands",
  "Agency",
  "Last Recorded",
  "Prices",
  "Impression",
  "Profits",
  "Clicks",
  "Unl. Clicks",
  "Invalid Click",
  "Conversions",
  "Orders",
  "Total CVR",
];

const data = [
  {
    id: 1,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 2,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 3,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 4,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 5,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="">Pending</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 6,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="">Pending</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 7,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="">Pending</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 8,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="">Pending</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 9,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 10,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="">Pending</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 11,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 12,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
  {
    id: 13,
    productName: (
      <Link to="/">Winter worlds mens wear (2022) this is samp</Link>
    ),
    brands: "Donna Slider",
    agency: "Xtreme Coutore",
    lastRecorded: "2023-01-01",
    prices: "500$",
    impressions: <span className="text-success">Enabled</span>,
    profits: "500$",
    clicks: "12",
    unlClicks: "14",
    invClicks: "14",
    commissions: "12%",
    orders: "23",
    totalCVR: 12,
  },
];

const displayLabels = [
  // "id",
  "productName",
  "brands",
  "agency",
  "lastRecorded",
  "prices",
  "impressions",
  "profits",
  "clicks",
  "unlClicks",
  "invClicks",
  "commissions",
  "orders",
  "totalCVR",
];

function PublisherReporting() {
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
  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState("");
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  return (
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3 d-flex justify-content-between">
          <h4>Reports</h4>
          <button className="btn btn-primary btn-sm">Connect</button>
        </div>
        <div className="col-12 mt-4 d-flex">
          <PageMenu links={[{path: '/publisher/reports', title: 'My Reports'}]} />
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <div className="col-6 d-inline d-flex align-items-center ">
                <ListIcon /> <span className="fs-5 ms-2">See the reports</span>
                <div className="card p-2 ms-4 px-auto">
                  <CalendarIcon />
                </div>
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
                <div className="row d-flex">
                  <div className="col-2 w-5 ms-2 mt-2" style={{width: "11%"}}>
                    <h5 className="d-inline">Summary</h5>
                  </div>
                  <div className="col-10 d-flex" style={{width: "88%"}}>
                    <div className="productCardWrapper" >
                      <ProductReportCard topLabel={"Impressions"} topValue={0} bottomLabel={"Clicks"} bottomValue={0} />
                    </div>
                    <div className="ms-2 productCardWrapper">
                      <ProductReportCard topLabel={"RDA"} topValue={0} bottomLabel={"Gross Clicks"} bottomValue={0} />
                    </div>
                    <div className="ms-2 productCardWrapper">
                      <ProductReportCard topLabel={"Revenue"} topValue={0} bottomLabel={"Pay Cut"} bottomValue={0} />
                    </div>
                    <div className="ms-2 productCardWrapper">
                      <ProductReportCard topLabel={"Total CV"} topValue={0} bottomLabel={"Profit"} bottomValue={0} />
                    </div>
                    <div className="ms-2 productCardWrapper">
                      <ProductReportCard topLabel={"VTCV"} topValue={0} bottomLabel={"Margin"} bottomValue={0} />
                    </div>
                    <div className="ms-2 productCardWrapper">
                      <ProductReportCard topLabel={"CTR"} topValue={0} bottomLabel={"Avg. Sale Value"} bottomValue={0} />
                    </div>
                    <div className="ms-2 productCardWrapper">
                      <ProductReportCard topLabel={"Gross Sales"} topValue={0} bottomLabel={"CVR"} bottomValue={0} />
                    </div>
                    <div className="ms-2 productCardWrapper">
                      <ProductReportCard topLabel={"CPC"} topValue={0} bottomLabel={"CPM"} bottomValue={0} />
                    </div>
                  </div>
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
            tableWidth={"100%"}
            deleteRow={deleteRow}
            editData={editData}
            addRow={addRow}
            filterData={filterData}
            numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
  );
}

export default PublisherReporting;
