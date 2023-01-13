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

import jbl from "../../assets/images/jbl-big.png";
import herbalLife from "../../assets/images/herbalLife-big.png";
import handM from "../../assets/images/HandM-big.png";
import versace from "../../assets/images/versace-big.png";
import ActiveBrandCard from "../../components/Cards/ActiveBrandCard";
import BackArrow from "../../components/svgs/BackArrow";
import ForwardArrow from "../../components/svgs/ForwardArrow";
import BrandFeaturesCard from "../../components/Cards/BrandFeaturesCard";
import Modal from "./BrandDetails/Modal";

const data = [
  {
    image: <img src={jbl} className="img img-fluid" />,
    title: "JBL XTREME",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <img src={herbalLife} className="img img-fluid" />,
    title: "Herbal Life",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <img src={versace} className="img img-fluid" />,
    title: "Versace",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <img src={handM} className="img img-fluid" />,
    title: "H and M",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <img src={versace} className="img img-fluid" />,
    title: "Versace",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <img src={herbalLife} className="img img-fluid" />,
    title: "Herbal Life",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <img src={handM} className="img img-fluid" />,
    title: "H and M",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <img src={jbl} className="img img-fluid" />,
    title: "JBL XTREME",
    commission: "$256",
    earning: "$30",
  },
];

function ActiveBrands() {
  const location = useLocation();

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
        {/* <div className="col-12 mt-4">
          <div className="card d-flex p-2">
            <div className="row">
              <div className="col-6 d-inline d-flex align-items-center ">
                <ListIcon />{" "}
                <span className="fs-5 ms-2">
                  List of All the (active products)
                </span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-12">
          <div className="row mt-5">
            {data.map((brand) => (
              <div className="col-md-3 mt-4">
                <ActiveBrandCard
                  title={brand.title}
                  image={brand.image}
                  earning={brand.earning}
                  commission={brand.commission}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <Modal />
        </div>
      </div>
  );
}

export default ActiveBrands;
