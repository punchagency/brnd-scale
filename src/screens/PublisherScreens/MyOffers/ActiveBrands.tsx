import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageTitle from "../../../components/PageTitle";
import PageMenu from "../../../components/Common/PageMenu";

import jbl from "../../../assets/images/jbl-big.png";
import herbalLife from "../../../assets/images/herbalLife-big.png";
import handM from "../../../assets/images/HandM-big.png";
import versace from "../../../assets/images/versace-big.png";
import ActiveBrandCard from "../../../components/Cards/ActiveBrandCard";
import Modal from "../BrandDetails/Modal";
import { ActiveBrandInterface } from "../../../types";

const data = [
  {
    id: 1,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={jbl} alt="" className="img img-fluid" />
      </Link>
    ),
    title: "JBL XTREME",
    commission: "$256",
    earning: "$30",
  },
  {
    id: 2,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={herbalLife} alt="" className="img img-fluid" />
      </Link>
    ),
    title: "Herbal Life",
    commission: "$256",
    earning: "$30",
  },
  {
    id: 3,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={versace} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "Versace",
    commission: "$256",
    earning: "$30",
  },
  {
    id: 4,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={handM} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "H and M",
    commission: "$256",
    earning: "$30",
  },
  {
    id: 5,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={versace} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "Versace",
    commission: "$256",
    earning: "$30",
  },
  {
    id: 6,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={herbalLife} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "Herbal Life",
    commission: "$256",
    earning: "$30",
  },
  {
    id: 7,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={handM} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "H and M",
    commission: "$256",
    earning: "$30",
  },
  {
    id: 8,
    image: (
      <Link to={"/publisher/brand-details"} className="">
        <img src={jbl} className="img img-fluid" alt="" />
      </Link>
    ),
    title: "JBL XTREME",
    commission: "$256",
    earning: "$30",
  },
];

function ActiveBrands() {
  const location = useLocation();
  const [brandList, setBrandList] = useState<ActiveBrandInterface[]>([]);

  var url = new URL(
    process.env.REACT_APP_BASE_URL+"publishers/active-brands?"
  );
  useEffect(()=>{
    fetch(url, { mode: "cors", method: 'GET' }).then(async (response) => {
      let res = await response.json();
      console.log(res)
      if(res.success){
        setBrandList(res.data); console.log(brandList)
      }
    })
  }, [])

  return (
    <>
      <div className="col-12">
        <div className="row mt-3">
          {brandList.map((brand) => (
            <div className="col-sm-6 col-md-3 mt-4">
              <ActiveBrandCard
                title={brand.product_name}
                image={brand.logo}
                earning={brand.earned_amount}
                commission={brand.commission_amount}
                key={brand.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-12">
        <Modal />
      </div>
    </>
  );
}

export default ActiveBrands;
