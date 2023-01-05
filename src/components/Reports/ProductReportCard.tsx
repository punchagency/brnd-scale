import React from "react";

function ProductReportCard({topLabel, topValue, bottomLabel, bottomValue}:any) {
  return (
    <div className="card text-center my-2 px-3 flex-column justify-content-between py-2" style={{height: '90%'}}>
      <div>
      <p className="mb-0 mt-1" style={{fontSize: "13px"}}>{topLabel}</p>
      <span className="mt-0" style={{fontSize: "13px"}}>{topValue}</span>
      </div>
      <div>
      <p className="mb-0 mt-1" style={{fontSize: "13px"}}>{bottomLabel}</p>
      <span style={{fontSize: "13px"}}>{bottomValue}</span>
      </div>
    </div>
  );
}

export default ProductReportCard;
