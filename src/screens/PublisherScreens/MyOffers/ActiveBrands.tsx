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
import TableFooter from "../../../components/Table/TableFooter";

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
  const [visibleItems, setVisibleItems] = useState<ActiveBrandInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  var url = new URL(
    process.env.REACT_APP_BASE_URL + "publishers/active-brands?"
  );
  useEffect(() => {//alert("here")
    fetch(url, { mode: "cors", method: "GET" }).then(async (response) => {
      let res = await response.json();
      console.log(res);
      if (res.success) {
        setBrandList(res.data);
        // changePage(1);
        setVisibleItems(res.data.slice(1, 10))
      }
    });
  }, []);

  const changePage = (page: number) => {
    setCurrentPage(page);
    --page;
    setVisibleItems(
      brandList.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
    );
  };

  return (
    <>
      <div className="col-12">
        <div className="row mt-3">
          {visibleItems.map((brand) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
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
        <div className="mt-4">
          <TableFooter
            totalData={brandList.length}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            setCurrentPage={changePage}
          />
        </div>
      </div>
      <div className="col-12">
        <Modal />
      </div>
    </>
  );
}

export default ActiveBrands;
