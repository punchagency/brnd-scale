import React, { useState } from "react";
import CalendarWrapper from "../components/Calendar";
import DeleteIcon from "../components/svgs/DeleteIcon";
import Funnel from "../components/svgs/Funnel";
import ListIcon from "../components/svgs/ListIcon";
import Table from "../components/Table";
import Button from "../components/Table/Button";
import Dropdown from "../components/Table/Dropdown";
import SearchInput from "../components/Table/SearchInput";
import TableDropdown from "../components/Table/TableDropdown";
import TableFooter from "../components/Table/TableFooter";
import TableToolbar from "../components/Table/TableToolbar";

const headers = [
  "Brand Name",
  "Campaign Name",
  "Tag/Key Link",
  "Country",
  "Category",
  "Store",
  "Status",
  "Growth",
  "Commissions Officer",
  "Conversions Rate",
  "Total Products",
  "Permissions",
];

const data = [
  {
    id: 1,
    brandName: "John Doe",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "0%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 2,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 3,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 4,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 5,
    brandName: "John Doe",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "0%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 6,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 7,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 8,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 9,
    brandName: "John Doe",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "0%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 10,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 11,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 12,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 13,
    brandName: "John Doe",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "0%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 14,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 15,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Game and video",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 16,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 17,
    brandName: "John Doe",
    campaingName: "Donna Slider",
    tag: "ADE99HP4D5Z",
    country: "$255.89",
    category: "Entertainment",
    store: "Amazon",
    status: "",
    growth: "0%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 18,
    brandName: "Anthony Smith",
    campaingName: "Donna Slider",
    tag: "ADD99HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 19,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 20,
    brandName: "John Jones",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 21,
    brandName: "John Doe",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "0%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 22,
    brandName: "Donna Slider",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 23,
    brandName: "Jack Smith",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
  {
    id: 24,
    brandName: "Samuel Peter",
    campaingName: "Donna Slider",
    tag: "B099HP4D5Z",
    country: "$255.89",
    category: "Health & care",
    store: "Amazon",
    status: "",
    growth: "12%",
    commissions: "5%",
    conversions: "12",
    totalProducts: "12",
    permissions: <button className="btn btn-danger btn-sm">action</button>,
  },
];

const displayLabels = [
  // "id",
  "brandName",
  "campaingName",
  "tag",
  "country",
  "category",
  "store",
  "status",
  "growth",
  "commissions",
  "conversions",
  "totalProducts",
  "permissions",
];

function BrandsManage() {
  const [tableData, setTableData] = useState(data);

  const filterData = (searchString: string) => {
    return tableData.filter((item: any) => {
      return (
        item.brandName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.campaingName.toLowerCase().includes(searchString.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchString.toLowerCase()) ||
        item.country.toLowerCase().includes(searchString.toLowerCase()) ||
        item.category.toLowerCase().includes(searchString.toLowerCase()) ||
        item.store.toLowerCase().includes(searchString.toLowerCase()) ||
        item.status.toLowerCase().includes(searchString.toLowerCase()) ||
        item.commissions.toLowerCase().includes(searchString.toLowerCase()) ||
        item.conversions.toLowerCase().includes(searchString.toLowerCase()) ||
        item.totalProducts.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [componentDate, setComponentDate] = useState("");
  const [searchString, setSearchString] = useState("");
  const [numOfPages, setNumOfPages] = useState(1);
  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3 d-flex justify-content-between">
        <h4>See your partners</h4>
        <button className="btn btn-primary btn-sm">Connect</button>
      </div>
      <div className="col-12 mt-4 d-flex">
        <button className="btn btn-primary btn-lg w-25 me-2">Brands</button>
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <span className="col d-inline d-flex align-items-center ">
              <ListIcon /> <span className="fs-5 ms-2">List of brands</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-12">
        <Table
          tableData={tableData}
          displayLabels={displayLabels}
          headers={headers}
          tableWidth={"110%"}
          numOfPages={numOfPages}
          setNumOfPages={setNumOfPages}
          numOfRows={numOfRows}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          toolbar={
            <TableToolbar>
              <div className="col-12 col-md-6  d-flex ">
                <TableDropdown
                  value={numOfRows}
                  setValue={setNumOfRows}
                  width={"29%"}
                  data={[
                    { title: 10, value: 10 },
                    { title: 20, value: 20 },
                  ]}
                />
                <div className="col-5 d-flex align-items-center">
                  <div className="col-12 d-flex align-items-center">
                    <div className="card p-2 px-auto border-0">
                      <CalendarWrapper setComponentDate={setComponentDate} />
                    </div>
                    <div className="ms-2">
                      <Button
                        bootstrapClass="btn btn-sm"
                        content={<DeleteIcon />}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
                <div className="col-5">
                  <SearchInput
                    value={searchString}
                    onChangeFunc={(value: string) => {
                      setSearchString(value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                <div className="col-3 ms-3">
                  <Dropdown
                    width="90%"
                    data={[
                      { title: "Export", value: "" },
                      { title: 10, value: 10 },
                    ]}
                    value=""
                    setValue={() => {}}
                  />
                </div>
                <Button
                  bootstrapClass="btn btn-white "
                  content={
                    <>
                      Filter
                      <span className="ms-1">
                        <Funnel />
                      </span>
                    </>
                  }
                />
              </div>
            </TableToolbar>
          }
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

export default BrandsManage;
