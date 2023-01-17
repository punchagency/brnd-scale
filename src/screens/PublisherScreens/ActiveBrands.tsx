import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import PageMenu from "../../components/Common/PageMenu";

import jbl from "../../assets/images/jbl-big.png";
import herbalLife from "../../assets/images/herbalLife-big.png";
import handM from "../../assets/images/HandM-big.png";
import versace from "../../assets/images/versace-big.png";
import ActiveBrandCard from "../../components/Cards/ActiveBrandCard";
import Modal from "./BrandDetails/Modal";

const data = [
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={jbl} alt="" className="img img-fluid" /></Link>,
    title: "JBL XTREME",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={herbalLife} alt="" className="img img-fluid"  /></Link>,
    title: "Herbal Life",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={versace}  className="img img-fluid" alt="" /></Link>,
    title: "Versace",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={handM} className="img img-fluid" alt="" /></Link>,
    title: "H and M",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={versace} className="img img-fluid" alt="" /></Link>,
    title: "Versace",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={herbalLife} className="img img-fluid" alt="" /></Link>,
    title: "Herbal Life",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={handM} className="img img-fluid" alt="" /></Link>,
    title: "H and M",
    commission: "$256",
    earning: "$30",
  },
  {
    image: <Link to={"/publisher/brand-details"} className="" ><img src={jbl} className="img img-fluid" alt="" /></Link>,
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
