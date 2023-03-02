import React, { useEffect, useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import PageMenu from "../../components/Common/PageMenu";
import TableFooter from "../../components/Table/TableFooter";
import CalendarWrapper from "../../components/Calendar";
import { PublisherReportSummary } from "../../types";

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
  "Conversion",
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
  "product_name",
  "brands",
  "agency",
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

function PublisherReporting() {
  const [tableData, setTableData] = useState(data);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "2020-01-01", to: "" });
  const [total, setTotal] = useState(0);
  const [summaries, setSummaries] = useState<PublisherReportSummary >()

  useEffect(() => {
    const searchParams = new URLSearchParams();
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
    currentPage && searchParams.append("page", currentPage + "");
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "publishers/reporting/products-reports/summaries?" +
        searchParams.toString()
    );

    console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {
      //console.log(await response.text())
      let res = await response.json();
      console.log(res);

      setSummaries({
        impressions: res.data.impressions,
        clicks: res.data.clicks,
        rda: res.data.rda,
        grossClicks: res.data.grossClicks,
        revenue: res.data.revenue,
        payCut: res.data.payCut,
        totalCV: res.data.totalCV,
        profit: res.data.profit,
        vtcv: res.data.vtcv,
        margin: res.data.margin,
        ctr: res.data.ctr,
        avgSaleValue: res.data.avgSaleValue,
        grossSales: res.data.grossSales,
        cvr: res.data.cvr,
        cpc: res.data.cpc,
        cpm: res.data.cpm
      })
    });

    url = new URL(
      process.env.REACT_APP_BASE_URL +
        "publishers/reporting/products-reports?" +
        searchParams.toString()
    );
    fetch(url, { mode: "cors" }).then(async (response) => {
      //console.log(await response.text())
      let res = await response.json();
      console.log(res);

      setTableData(
        res.data.data.map((row: any) => {
          return {
            ...row,
            product_name: <Link to="/">{row.product_name}</Link>,
            price: "$" + row.price,
            impressions: <span className="text-success">Enabled</span>,
            conversion_percentage: row.conversion_percentage + "%",
          };
        })
      );
      setTotal(res.data.total);
    });
  }, [componentDate, currentPage]);

  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>Reports</h4>
        {/* <button className="btn btn-primary btn-sm">Connect</button> */}
      </div>
      <div className="col-12 mt-4 d-flex">
        <PageMenu
          links={[{ path: "/publisher/reports", title: "My Reports" }]}
        />
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon /> <span className="fs-5 ms-2">See the reports</span>
              <div className="card p-2 ms-4 px-auto border-0">
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
                <div className="col-2 w-5 ms-2 mt-2 summaryWrapper" >
                  <h5 className="d-inline">Summary</h5>
                </div>
                <div className="col-10 d-flex flex-wrap productCardSection">
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"Impressions"}
                      topValue={summaries?.impressions || 0}
                      bottomLabel={"Clicks"}
                      bottomValue={summaries?.clicks || 0}
                    />
                  </div>
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"RDA"}
                      topValue={summaries?.rda || 0}
                      bottomLabel={"Gross Clicks"}
                      bottomValue={summaries?.grossClicks || 0}
                    />
                  </div>
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"Revenue"}
                      topValue={summaries?.revenue || 0}
                      bottomLabel={"Pay Cut"}
                      bottomValue={summaries?.payCut || 0}
                    />
                  </div>
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"Total CV"}
                      topValue={summaries?.totalCV}
                      bottomLabel={"Profit"}
                      bottomValue={summaries?.profit|| 0}
                    />
                  </div>
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"VTCV"}
                      topValue={summaries?.vtcv || 0}
                      bottomLabel={"Margin"}
                      bottomValue={summaries?.margin || 0}
                    />
                  </div>
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"CTR"}
                      topValue={summaries?.ctr || 0}
                      bottomLabel={"Avg. Sale Value"}
                      bottomValue={summaries?.avgSaleValue || 0}
                    />
                  </div>
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"Gross Sales"}
                      topValue={summaries?.grossSales || 0}
                      bottomLabel={"CVR"}
                      bottomValue={summaries?.cvr || 0}
                    />
                  </div>
                  <div className="ps-2 productCardWrapper">
                    <ProductReportCard
                      topLabel={"CPC"}
                      topValue={summaries?.cpc || 0}
                      bottomLabel={"CPM"}
                      bottomValue={summaries?.cpm || 0}
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

export default PublisherReporting;
