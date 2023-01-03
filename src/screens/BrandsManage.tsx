import React, { useState } from "react";
import ListIcon from "../components/svgs/ListIcon";
import Layout from "../containers/Layouts/Layout";
import Table from "../components/Table";

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
    return tableData
      .filter((item:any) => {
        return (
          item.brandName.toLowerCase().includes(searchString.toLowerCase()) ||
          item.campaingName
            .toLowerCase()
            .includes(searchString.toLowerCase()) ||
          item.tag.toLowerCase().includes(searchString.toLowerCase()) ||
          item.country.toLowerCase().includes(searchString.toLowerCase()) ||
          item.category.toLowerCase().includes(searchString.toLowerCase()) ||
          item.store.toLowerCase().includes(searchString.toLowerCase()) ||
          item.status.toLowerCase().includes(searchString.toLowerCase()) ||
          item.commissions.toLowerCase().includes(searchString.toLowerCase()) ||
          item.conversions.toLowerCase().includes(searchString.toLowerCase()) ||
          item.totalProducts.toLowerCase().includes(searchString.toLowerCase())
        );
      })
      ;
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
  return (
    <Layout>
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
            deleteRow={deleteRow}
            editData={editData}
            addRow={addRow}
            filterData={filterData}
          />
        </div>
      </div>
    </Layout>
  );
}

export default BrandsManage;
