import React from "react";
import { useAppSelector } from "../../app/hooks";
import PaymentCard from "../../components/Reports/PaymentCard";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import { selectUser } from "../../features/user/userSlice";

interface ReportSummaryProps {
  tabIndex: number;
}

function ReportSummary({ tabIndex }: ReportSummaryProps) {
  const userType = useAppSelector(selectUser);
  if (userType === "Brand") {
    if (tabIndex === 0) {
      return <FullReportSummary userType={userType} />;
    } else if (tabIndex === 1) {
      return <PaymentSummary userType={userType} />;
    }
  } else if (userType === "Agency") {
    if (tabIndex === 0) {
      return <FullReportSummary userType={userType} />;
    }
  }
  return <div>ReportSummary</div>;
}

export default ReportSummary;

interface SummaryProps {
  userType: string;
}

const PaymentSummary = ({ userType }: SummaryProps) => {
  return (
    <>
      <div className="col-3">
        <PaymentCard
          top="Pending payments"
          value="523"
          bottom={"Due from : DD/MM/YY"}
        />
      </div>
      <div className="col-3">
        <PaymentCard
          top={"Total payed"}
          value={"015"}
          bottom={"Brands that have paid : 20"}
        />
      </div>
      <div className="col-3">
        <PaymentCard
          top={userType === "Agency" ? "Pending" : "Balance"}
          value={"005"}
          bottom={"Due from : DD/MM/YY"}
        />
      </div>
    </>
  );
};

const FullReportSummary = ({ userType }: SummaryProps) => {
  return (
    <>
      <div className="col-2 w-5 ms-2 mt-2" style={{ width: "11%" }}>
        <h5 className="d-inline">Summary</h5>
      </div>
      <div className="col-10 d-flex" style={{ width: "88%" }}>
        <div className="productCardWrapper">
          <ProductReportCard
            topLabel={"Impressions"}
            topValue={0}
            bottomLabel={"Clicks"}
            bottomValue={0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"RDA"}
            topValue={0}
            bottomLabel={"Gross Clicks"}
            bottomValue={0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"Revenue"}
            topValue={0}
            bottomLabel={"Pay Cut"}
            bottomValue={0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"Total CV"}
            topValue={0}
            bottomLabel={"Profit"}
            bottomValue={0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"VTCV"}
            topValue={0}
            bottomLabel={"Margin"}
            bottomValue={0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"CTR"}
            topValue={0}
            bottomLabel={"Avg. Sale Value"}
            bottomValue={0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"Gross Sales"}
            topValue={0}
            bottomLabel={"CVR"}
            bottomValue={0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"CPC"}
            topValue={0}
            bottomLabel={"CPM"}
            bottomValue={0}
          />
        </div>
      </div>
    </>
  );
};
