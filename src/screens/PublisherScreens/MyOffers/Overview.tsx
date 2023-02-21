import React, { useEffect, useState } from "react";
import CalendarWrapper from "../../../components/Calendar";
import PublisherOfferCard from "../../../components/Cards/PublisherOfferCard";
import Badge from "../../../components/Reports/Badge";
import Search from "../../../components/svgs/Search";
import Table from "../../../components/Table";
import TableFilter from "../../../components/Table/TableFilter";
import TableFooter from "../../../components/Table/TableFooter";
import TablePageDropdown from "../../../components/Table/TablePageDropdown";

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
  "product_name",
  "brand",
  "starting_date",
  "ending_date",
  "tags",
  "commission_earned",
  "commission_type",
  "total_sales",
  "total_clicks",
  "status",
];

const Overview = () => {
  const [tableData, setTableData] = useState(data);

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState<
    string | { from: string; to: string }
  >({ from: "", to: "" });
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // console.log(componentDate);

    const searchParams = new URLSearchParams();
    typeof componentDate === "object" &&
      componentDate.from !== "" &&
      searchParams.append(
        "date_from",
        typeof componentDate === "object" ? componentDate.from : ""
      );
    typeof componentDate === "object" &&
      componentDate.to !== "" &&
      searchParams.append(
        "date_to",
        typeof componentDate === "object" ? componentDate.to : ""
      );
    searchString && searchParams.append("search", searchString);
    currentPage && searchParams.append("page", currentPage + "");
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "publishers/product-details/overviews?" +
        searchParams.toString()
    );

    console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {
      //console.log(await response.text())
      let res = await response.json();
      console.log(res);

      setTableData(
        res.data.map((row: any) => {
          return {
            ...row,
            commission_earned: row.commission_earned + "%",
            commission_type: (
              <div>
                12% <Badge />
              </div>
            ),
            status: (
              <button
                className={`btn btn-outline-${
                  row.status === "active" ? "success" : "danger"
                } btn-sm`}
              >
                {row.status === "active" ? "Promoted" : "Not Promoted"}
              </button>
            ),
          };
        })
      );
      setTotal(res.data.total);
    });
  }, [componentDate, searchString, currentPage]);

  return (
    <div className="col-12">
      <Table
        tableData={tableData}
        displayLabels={displayLabels}
        headers={headers}
        // hideToolbar={true}
        hideCheckbox={true}
        tableWidth={"105%"}
        toolbar={
          <div className={`col-12 mt-3 d-flex flex-nowrap`}>
            <div className="col-6 d-flex">
              <div className="col-6 d-flex align-items-center">
                <TablePageDropdown
                  numOfRows={numOfRows}
                  setNumOfRows={setNumOfRows}
                  setCurrentPage={setCurrentPage}
                />
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
            totalData={total}
            rowsPerPage={numOfRows}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        }
        numOfPages={numOfPages}
        setNumOfPages={setNumOfPages}
        numOfRows={numOfRows}
        setNumOfRows={setNumOfRows}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
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
  );
};

export default Overview;
