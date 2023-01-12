import React from "react";

function PageTitle({ title, subtitle }: any) {
  return (
    <div className="w-100 d-flex justify-content-between">
      <div>
        <span className="">{subtitle ? subtitle : null}</span>
        <h4>{title}</h4>
      </div>
      <div>
      <button className="btn btn-primary btn-sm">Connect</button></div>
    </div>
  );
}

export default PageTitle;
