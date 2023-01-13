import React, { useState } from "react";
import ListIcon from "../../components/svgs/ListIcon";
import Layout from "../../containers/Layouts/Layout";
import Table from "../../components/Table";
import { Link, useLocation } from "react-router-dom";
import CalendarIcon from "../../components/svgs/CalendarIcon";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import ReportsMenu from "../../components/Common/PageMenu";
import Badge from "../../components/Reports/Badge";
import WarningCircle from "../../components/svgs/WarningCircle";
import PageTitle from "../../components/PageTitle";
import PublisherOfferCard from "../../components/Cards/PublisherOfferCard";
import PageMenu from "../../components/Common/PageMenu";

import product from "../../assets/images/product.png";
import ShareIcon from "../../components/svgs/ShareIcon";
import CopyIcon from "../../components/svgs/CopyIcon";


import jbl from "../../assets/images/jbl.png";
import versace from "../../assets/images/versace.png";
import handm from "../../assets/images/HandM.png";
import herbalLife from "../../assets/images/herbalLife.png";
import ActiveIcon from "../../components/svgs/ActiveIcon";

const headers = [
    "Logos",
    "Brands",
    "Campaign Name",
    "Agency",
    "Category",
    "Active Coupons",
    "Commission Offer",
    "Products",
    "Details",
    "Apply Here",
  ];
  
  const data = [
    {
      id: 1,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={jbl} />
        </div>
      ),
      
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 2,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={handm} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 3,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={herbalLife} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 4,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={versace} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 5,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={jbl} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 6,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={handm} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 7,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={herbalLife} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 8,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={versace} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 9,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={jbl} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 10,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={handm} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 11,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={herbalLife} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
    {
      id: 12,
      image: (
        <div
          className="d-flex justify-content-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={versace} />
        </div>
      ),
        
      brandName: "Xtreme Coutore",
      campaignName: "Black Friday Sale",
      agency: "Wetheweb.20", 
      category: "Health and Care",
      activeCoupons: "10 % off",
      commissionOffer: "12 %",
      product: (
        <button className="btn btn-outline-light btn-sm text-dark border">View Product</button>
      ),
      details: (
        <button className="btn btn-outline-light btn-sm text-dark border">Click Here</button>
      ),
      applyHere: (
        <button className="btn btn-primary btn-sm">Apply</button>
      )
    },
  ];
  
  const displayLabels = [
    // "id",
    "image",
    "brandName",
    "campaignName",
    "agency",
    "category",
    "activeCoupons",
    "commissionOffer",
    "product",
    "details",
    "applyHere",
  ];

function JoinBrand() {
  const [tableData, setTableData] = useState(data);
  const location = useLocation();

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
      return prev.filter((row: any) => row.id != id);
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
  return (
    <div className="row pt-3 ps-2 pe-5">
      <div className="col-12 mt-3">
        <PageTitle
          title="Get Associated with Top brands "
        />
      </div>
      <div className="col-12 mt-4 d-flex">
        <PageMenu
          links={[
            { path: "/publisher/join-brand", title: "Join Brand" },
            { path: "/publisher/active-brands", title: "Available Offers" },
          ]}
        />
      </div>
      <div className="col-12 mt-4">
        <div className="card d-flex p-2">
          <div className="row">
            <div className="col-6 d-inline d-flex align-items-center ">
              <ListIcon />{" "}
              <span className="fs-5 ms-2">
              List of Brands avaliable to Join
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
          tableWidth={"115%"}
          deleteRow={deleteRow}
          editData={editData}
          addRow={addRow}
          filterData={filterData}
        />
      </div>
    </div>
  );
}

export default JoinBrand;
