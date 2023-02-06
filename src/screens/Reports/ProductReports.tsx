import React, { useEffect, useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import PageMenu from "../../components/Common/PageMenu";
import TableFooter from "../../components/Table/TableFooter";
import { AgenciesReportingProducts, AgenciesReportingSummaries } from "../../types";
import CalendarWrapper from "../../components/Calendar";

const headers = [
  "Product Name",
  "Brands",
  "Publisher",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
    publisher: "Xtreme Coutore",
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
  "product_name",
  "brands",
  "publisher",
  "last_recorded",
  "price",
  "impressions",
  "profits",
  "clicks",
  "uni_clicks",
  "invalid_click",
  "conversion_percentage",
  "orders",
  "total_cvr",
];

function ProductReports() {
  const [tableData, setTableData] = useState<AgenciesReportingProducts[]>([]);
  const [summaries, setSummaries] = useState<AgenciesReportingSummaries>()

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });

  const [reportType, setReportType] = useState("");

  useEffect(() => {
    let searchParams = new URLSearchParams();
    
    typeof componentDate == "object" &&
      componentDate.from != "" &&
      searchParams.append(
        "date_from",
        typeof componentDate == "object" ? componentDate.from : ""
      );
    typeof componentDate == "object" &&
      componentDate.to != "" &&
      searchParams.append(
        "date_to",
        typeof componentDate == "object" ? componentDate.to : ""
      );
    var url = new URL(
      process.env.REACT_APP_BASE_URL+"agencies/reports/products?" + searchParams.toString()
    );

    // searchParams = new URLSearchParams()
    reportType != "" &&
      searchParams.append(
        "report_type",
        reportType
      );
    var summaryUrl = new URL(
      process.env.REACT_APP_BASE_URL+"agencies/reports/summaries?" + searchParams.toString()
    );

    fetch(url, { mode: "cors" }).then(async (response) => {
      // console.log(await response.json())
      let res = await response.json();

      setTableData(
        res.map((row: any) => {
          return {
            ...row,
            product_name: <Link to="/">Winter worlds mens wear (2022) this is samp</Link>,//URL from api
            impressions: <span className="text-success">Enabled</span>,//value from api
          };
        })
      );
    });
    fetch(summaryUrl, { mode: "cors" }).then(async (response) => {
      // console.log(await response.json())
      let res = await response.json();
      setSummaries(res);
    });
  }, [componentDate]);

  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>Reports</h4>
        <button className="btn btn-primary btn-sm">Connect</button>
      </div>
      <div className="col-12 mt-4 d-flex">
        <PageMenu
          links={[
            { path: "/product-reports", title: "Product Report" },
            { path: "/publisher-reports", title: "Publisher Report" },
            { path: "/payment-reports", title: "Payments" },
          ]}
        />
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon /> <span className="fs-5 ms-2">See the reports</span>
              <div className="card ms-4 px-auto border-0">
                <CalendarWrapper
                  setComponentDate={setComponentDate}
                  format={2}
                />
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
                <div className="col-2 w-5 ms-2 mt-2" style={{ width: "11%" }}>
                  <h5 className="d-inline">Summary</h5>
                </div>
                <div className="col-10 d-flex" style={{ width: "88%" }}>
                  <div className="productCardWrapper">
                    <ProductReportCard
                      topLabel={"Impressions"}
                      topValue={summaries?.impressions}
                      bottomLabel={"Clicks"}
                      bottomValue={summaries?.clicks}
                    />
                  </div>
                  <div className="ms-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"RDA"}
                      topValue={summaries?.rda}
                      bottomLabel={"Gross Clicks"}
                      bottomValue={summaries?.gross_clicks}
                    />
                  </div>
                  <div className="ms-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"Revenue"}
                      topValue={summaries?.revenue}
                      bottomLabel={"Pay Cut"}
                      bottomValue={summaries?.paycut}
                    />
                  </div>
                  <div className="ms-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"Total CV"}
                      topValue={summaries?.total_cv}
                      bottomLabel={"Profit"}
                      bottomValue={summaries?.profit}
                    />
                  </div>
                  <div className="ms-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"VTCV"}
                      topValue={summaries?.vtcv}
                      bottomLabel={"Margin"}
                      bottomValue={summaries?.margin}
                    />
                  </div>
                  <div className="ms-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"CTR"}
                      topValue={summaries?.ctr}
                      bottomLabel={"Avg. Sale Value"}
                      bottomValue={summaries?.average_sale_value}
                    />
                  </div>
                  <div className="ms-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"Gross Sales"}
                      topValue={summaries?.gross_sales}
                      bottomLabel={"CVR"}
                      bottomValue={summaries?.cvr}
                    />
                  </div>
                  <div className="ms-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"CPC"}
                      topValue={summaries?.cpc}
                      bottomLabel={"CPM"}
                      bottomValue={summaries?.cpm}
                    />
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
          numOfPages={numOfPages}
          setNumOfPages={setNumOfPages}
          numOfRows={numOfRows}
          setNumOfRows={setNumOfRows}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          footer={
            <TableFooter
              totalData={tableData.length}
              rowsPerPage={numOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
      </div>
    </div>
  );
}

export default ProductReports;
