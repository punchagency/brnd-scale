import React from "react";
import { Link } from "react-router-dom";
import TableFooter from "../../components/Table/TableFooter";
import ExploreCard from "./ExploreCard";

import jbl from "../../assets/images/jbl-big.png"
import herbalLife from "../../assets/images/herbalLife-big.png";
import handM from "../../assets/images/HandM-big.png";
import versace from "../../assets/images/versace-big.png";

const data = [
  {
    id: 1,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={jbl} alt="" className="img img-fluid" />
      </Link>
    ),
    title: "JBL XTREME",
    about: "About Brand",
    date: "10.12.22",
  },
  {
    id: 2,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={herbalLife} alt="" className="img img-fluid" />
      </Link>
    ),
    title: "Herbal Life",
    about: "About Brand",
    date: "10.12.22",
  },
  {
    id: 3,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={versace} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "Versace",
    about: "About Brand",
    date: "10.12.22",
  },
  {
    id: 4,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={handM} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "H and M",
    about: "About Brand",
    date: "10.12.22",
  },
  {
    id: 5,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={versace} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "Versace",
    about: "About Brand",
    date: "10.12.22",
  },
  {
    id: 6,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={herbalLife} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "Herbal Life",
    about: "About Brand",
    date: "10.12.22",
  },
  {
    id: 7,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={handM} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "H and M",
    about: "About Brand",
    date: "10.12.22",
  },
  {
    id: 8,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={jbl} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "JBL XTREME",
    about: "About Brand",
    date: "10.12.22",
  },
];

const ExploreBrands = () => {
  return (
    <>
      <div className="col-12">
        <div className="row mt-3">
          {data.map((brand) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
              <ExploreCard
                title={brand.title}
                image={brand.image}
                about={"About Brand"}
                date={"10.12.22"}
                btnText={"Invite"}
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          {/* <TableFooter
            totalData={100}
            rowsPerPage={10}
            currentPage={2}
            setCurrentPage={() => {}}
          /> */}
        </div>
      </div>
    </>
  );
};

export default ExploreBrands;
