import React, { useEffect, useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Table from "../../components/Table";
import Badge from "../../components/Reports/Badge";
import WarningCircle from "../../components/svgs/WarningCircle";
import PageTitle from "../../components/PageTitle";
import PageMenu from "../../components/Common/PageMenu";
import PaymentCard from "../../components/Reports/PaymentCard";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import { AgenciesReportingPayments } from "../../types";

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
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 2,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-danger btn-sm">Pending</button>,
  },
  {
    id: 3,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-danger btn-sm">Pending</button>,
  },
  {
    id: 4,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 5,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 6,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-danger btn-sm">Pending</button>,
  },
  {
    id: 7,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 8,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 9,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 10,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 11,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 12,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
  {
    id: 13,
    productName: "Donna Slider",
    startingDate: "2023-01-01",
    endingDate: "2023-01-01",
    tags: "B099HP4D5Z",
    commissionMade: "$1200",
    commissionType: (
      <div>
        12% <Badge />
      </div>
    ),
    totalSale: "1200",
    totalClicks: 5,
    status: <button className="btn btn-outline-success btn-sm">Paid</button>,
  },
];

const displayLabels = [
"product_name",
"brands",
"campaign_name",
"starting_date",
"ending_date",
"tags",
"due",
"commission_made",
"commision_type",
"total_sales",
"total_clicks",
"status",
];

function PaymentReport() {
  const [tableData, setTableData] = useState<AgenciesReportingPayments[]>([]);
  const userType = useAppSelector(selectUser);

  

  let links:[] | any = []
  if(userType === 'Agency'){
    links = [{path: '/product-reports', title: 'Product Report'}, {path: '/publisher-reports', title: 'Publisher Report'}, {path: '/payment-reports', title: 'Payments'}]
  }else{
    links = [{path: '/publisher/brand-details', title: 'Overview'}, {path: '/publisher/brand-products', title: 'Brand Pullings'}]
  }
  
  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  const [reportType, setReportType] = useState("");
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const searchParams = new URLSearchParams();
    reportType != "" &&
      searchParams.append(
        "report_type",
        reportType
      );

    var url = new URL(
      process.env.REACT_APP_BASE_URL+"agencies/reports/payments?"+searchParams.toString()
    );

    // console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {//console.log(await response.text())
      let res = await response.json();console.log(res);

      setTableData(
        res.data.data.map((row: any) => {console.log("in set")
          return {
            ...row,
            commission_type: (
              <div>
                12% <Badge />
              </div>
            ),
            status: <button className="btn btn-outline-success btn-sm">Paid</button>,
          };
        })
      );
      setTotal(res.data.total)
    });
  }, [reportType]);

  
  return (
      <div className="row pt-3 ps-2 pe-5">
        <div className="col-12 mt-3 ">
          <PageTitle title="Reports" />
        </div>
        <div className="col-12 mt-4 d-flex">
          
          <PageMenu links={links} />
        </div>
        <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <div className="col-6 d-inline d-flex align-items-center ">
                <ListIcon />{" "}
                <span className="fs-5 ms-2">
                  In Depth Overview Of Your Payments
                </span>
              </div>
              <div className="col-2 offset-4 d-inline d-flex align-items-center ">
                <select className="form-select" value={reportType} onChange={(e)=>setReportType(e.target.value)}>
                  <option>Reports Type</option>
                  <option value="1">Type 1</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <div className="card">
                <div className="row d-flex justify-content-center">
                  {/* <div className="col-12 d-flex" > */}
                  <div className="col-3">
                    <PaymentCard
                      top="Pending payments"
                      value="523"
                      bottom={"Due from : DD/MM/YY"}
                    />
                  </div>
                  <div className="col-3">
                    <PaymentCard
                      top={"Total payed"}
                      value={"015"}
                      bottom={"Brands that have paid : 20"}
                    />
                  </div>
                  <div className="col-3">
                    <PaymentCard
                      top={"Pending"}
                      value={"005"}
                      bottom={"Due from : DD/MM/YY"}
                    />
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
            tableWidth={"120%"}
            numOfRows={numOfRows}
            numOfPages={numOfPages}
            currentPage={currentPage}
          />
        </div>
        <div className="col-12 mt-4 d-flex justify-content-center">
          <span className="me-2">
            <WarningCircle />
          </span>
          <p>
            Sales are estimated in USD. Actual sales and Commision may be in
            different currency
          </p>
        </div>
      </div>
  );
}

export default PaymentReport;
