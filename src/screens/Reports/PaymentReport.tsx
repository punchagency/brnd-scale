import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Table from "../../components/Table";
import Badge from "../../components/Reports/Badge";
import WarningCircle from "../../components/svgs/WarningCircle";
import PageTitle from "../../components/PageTitle";
import PageMenu from "../../components/Common/PageMenu";
import PaymentCard from "../../components/Reports/PaymentCard";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";

const headers = [
  "Product Name",
  "Starting Date",
  "Ending Date",
  "Tags",
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
  // "id",
  "productName",
  "startingDate",
  "endingDate",
  "tags",
  "commissionMade",
  "commissionType",
  "totalSale",
  "totalClicks",
  "status",
];

function PaymentReport() {
  const [tableData, setTableData] = useState(data);
  const userType = useAppSelector(selectUser);

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
    setTableData((prev: any) => {
      return prev.filter((row: any) => row.id !== id);
    });
  };

  const addRow = (row: any) => {
    setTableData((prev: any) => {
      return [...prev, { id: prev.length, ...row }];
    });
  };

  const editData = (data: any) => {
    // setTableData(prev=>{return prev.map()})
  };

  let links:[] | any = []
  if(userType === 'Agency'){
    links = [{path: '/product-reports', title: 'Product Report'}, {path: '/publisher-reports', title: 'Publisher Report'}, {path: '/payment-reports', title: 'Payments'}]
  }else{
    links = [{path: '/publisher/brand-details', title: 'Overview'}, {path: '/publisher/brand-products', title: 'Brand Pullings'}]
  }
  
  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  
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
            tableWidth={"115%"}
            deleteRow={deleteRow}
            editData={editData}
            addRow={addRow}
            filterData={filterData}
            numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
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
