import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Table from "../../components/Table";
import Badge from "../../components/Reports/Badge";
import PageTitle from "../../components/PageTitle";
import PublisherOfferCard from "../../components/Cards/PublisherOfferCard";
import PageMenu from "../../components/Common/PageMenu";
import TablePageDropdown from "../../components/Table/TablePageDropdown";
import CalendarWrapper from "../../components/Calendar";
import Search from "../../components/svgs/Search";
import TableFilter from "../../components/Table/TableFilter";
import TableFooter from "../../components/Table/TableFooter";

const headers = [
  "Product Name",
  "Brand",
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
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
  {
    id: 2,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-danger btn-sm">Not Promoted</button>
    ),
  },
  {
    id: 3,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-secondary btn-sm text-dark">
        In Progress
      </button>
    ),
  },
  {
    id: 4,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
  {
    id: 5,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-danger btn-sm">Not Promoted</button>
    ),
  },
  {
    id: 6,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
  {
    id: 7,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
  {
    id: 8,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-secondary btn-sm">In Progress</button>
    ),
  },
  {
    id: 9,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
  {
    id: 10,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
  {
    id: 11,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
  {
    id: 12,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-danger btn-sm">Not Promoted</button>
    ),
  },
  {
    id: 13,
    productName: "Donna Slider",
    brand: "JBL Xtreme",
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
    status: (
      <button className="btn btn-outline-success btn-sm">Promoted</button>
    ),
  },
];

const displayLabels = [
  // "id",
  "productName",
  "brand",
  "startingDate",
  "endingDate",
  "tags",
  "commissionMade",
  "commissionType",
  "totalSale",
  "totalClicks",
  "status",
];

function MyOffers() {
  const [tableData, setTableData] = useState(data);
  // const location = useLocation();

  const filterData = (searchString: any) => {
    if (!searchString) return tableData;
    return tableData.filter((item: any) => {
      return (
        item.productName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchString.toLowerCase()) ||
        item.startingDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.endingDate.toLowerCase().includes(searchString.toLowerCase()) ||
        item.tags.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commissionMade
          .toLowerCase()
          .includes(searchString.toLowerCase()) ||
        item.totalSale.toLowerCase().includes(searchString.toLowerCase())
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
  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState("");
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3">
        <PageTitle
          title="Welcome to my offers"
          subtitle="Track your Current products"
        />
      </div>
      <div className="col-12 mt-4 d-flex">
        <PageMenu
          links={[
            { path: "/publisher/offers", title: "Overview" },
            { path: "/publisher/active-brands", title: "Active Brands" },
            { path: "/publisher/active-products", title: "Active Products" },
          ]}
        />
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">
                See how your brands and their products are doing
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Table
          tableData={tableData}
          displayLabels={displayLabels}
          headers={headers}
          // hideToolbar={true}
          hideCheckbox={true}
          tableWidth={"103%"}
          deleteRow={deleteRow}
          editData={editData}
          addRow={addRow}
          filterData={filterData}
          toolbar={
            <div
              className={`col-12 mt-3 d-flex flex-nowrap+`}
            >
              <div className="col-6 d-flex ">
                <div className="col-6 d-flex align-items-center">
                  <TablePageDropdown numOfRows={numOfRows} setNumOfRows={setNumOfRows} setCurrentPage={setCurrentPage} />
                </div>
                <div className="col-5 d-flex align-items-center">
                  <div className="col-12 d-flex align-items-center">
                    <div className="card border-0">
                      {/* <CalendarIcon /> */}
                      <CalendarWrapper setComponentDate={setComponentDate} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <div className="col-5">
                  <div className="input-group flex-nowrap my-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      value={searchString}
                      onChange={(e) => {
                        setSearchString(e.target.value);
                        setCurrentPage(1);
                      }}
                      aria-label=""
                      aria-describedby="addon-wrapping"
                    />
                    <span
                      className="input-group-text bg-white border"
                      id="addon-wrapping"
                    >
                      <Search color={"#00000"} />
                    </span>
                  </div>
                </div>
                <div className="col-3 ms-3">
                  <select className="form-select w-90">
                    <option value="" selected>
                      Export
                    </option>
                    <option value="">20</option>
                    <option value="">30</option>
                  </select>
                </div>
                <div className="col-2 ms-3 ">
                  <TableFilter />
                </div>
              </div>
            </div>
          }
          footer={
            <TableFooter
              totalData={tableData.length}
              rowsPerPage={numOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
          numOfPages={numOfPages} setNumOfPages={setNumOfPages} numOfRows={numOfRows} setNumOfRows={setNumOfRows} currentPage={currentPage} setCurrentPage={setCurrentPage}
          cards={
            <div className="col-10 offset-1">
              <div className="row  d-flex justify-content-center">
                <div className="col-3 ps-2">
                  <PublisherOfferCard
                    title="Total Sales"
                    value={1024}
                    date={"From 20 - 30 Nov"}
                  />
                </div>
                <div className="col-3 ps-2">
                  <PublisherOfferCard
                    title="Total Commision made"
                    value={1024}
                    date={"From 20 - 30 Nov"}
                  />
                </div>
                <div className="col-3 ps-2">
                  <PublisherOfferCard
                    title="Total Brands"
                    value={1024}
                    date={"From 20 - 30 Nov"}
                  />
                </div>
                <div className="col-3 ps-2">
                  <PublisherOfferCard
                    title="Total Products"
                    value={1024}
                    date={"From 20 - 30 Nov"}
                  />
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default MyOffers;
