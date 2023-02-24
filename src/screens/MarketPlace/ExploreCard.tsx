import React, {useRef} from "react";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import ActiveIcon from "../../components/svgs/ActiveIcon";

function ExploreCard({ image, about, date, title, btnText }: any) {
  const navigate = useNavigate();
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const changePage = () => {
    navigate("/publisher/brand-details");
  };
  return (
    <div className="card" style={{ height: "317px" }}>
      <div className="card-body">
        <div className="row flex-column">
          <div className="col">
            <p style={{ fontSize: "14px", color: "#605454", height: "20px" }}>{windowSize.current[0] < 992 ? title.substring(0, 25) : title.substring(0, 29)}</p>
          </div>
          <div
            className="col border"
            style={{ maxHeight: "115px", overflow: "hidden" }}
            onClick={changePage}
          >
            {/* <Link to={"/publisher/brand-details"} className="">
            <img src={image} className="img img-fluid" style={{height: '100%'}}  /></Link> */}
            {image}
          </div>
          <div
            className="col d-flex justify-content-between mt-3"
            style={{ fontSize: "10px", color: "#6C6262" }}
          >
            <span className="">
              {about}
            </span>
            <span className="">
              {date}
            </span>
          </div>
          <div className="col flex-column mt-3">
            <button
              className="btn btn-outline-light border border-dark text-dark d-block w-100"
              
              onClick={()=>{navigate("/publisher/brand-details")}}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreCard;
