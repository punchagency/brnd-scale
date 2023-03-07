import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import PaymentCard from "../../components/Reports/PaymentCard";
import ProductReportCard from "../../components/Reports/ProductReportCard";
import { selectUser } from "../../features/user/userSlice";

interface ReportSummaryProps {
  tabIndex: number;
  componentDate: any;
}

function ReportSummary({ tabIndex, componentDate }: ReportSummaryProps) {
  let tempUser = useAppSelector(selectUser);
  const userType = Cookies.get('userType') || tempUser;
  if (userType === "Brand") {
    if (tabIndex === 0) {
      return <FullReportSummary userType={userType} componentDate={componentDate} />;
    } else if (tabIndex === 1) {
      return <PaymentSummary userType={userType} />;
    }
  } else if (userType === "Agency") {
    if (tabIndex === 0) {
      return <FullReportSummary userType={userType} componentDate={componentDate} />;
    }
  }
  return <div>ReportSummary</div>;
}

export default ReportSummary;

interface SummaryProps {
  userType: string;
  componentDate?: any;
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

const FullReportSummary = ({ userType, componentDate }: SummaryProps) => {
  const [productReportCardData, setProductReportCardData] = useState<any>({})
  useEffect(() => {
    const searchParams = new URLSearchParams();
    typeof componentDate === "object" &&
      componentDate.from !== "" &&
      searchParams.append(
        "date_from",
        typeof componentDate === "object" ? componentDate.from : ""
      );
    typeof componentDate === "object" &&
      componentDate.to !== "" &&
      searchParams.append(
        "date_to",
        typeof componentDate === "object" ? componentDate.to : ""
      );
    // searchString && searchParams.append("search", searchString);
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "brands/reports/summaries" +
        searchParams.toString()
    );

    fetch(url, {
      mode: "cors",
    }).then(async (response) => {
      let res = await response.json();
      console.log("res", res)
      setProductReportCardData(res.data)

    });
  }, [componentDate]);
  return (
    <>
      <div className="col-2 w-5 ms-2 mt-2" style={{ width: "11%" }}>
        <h5 className="d-inline">Summary</h5>
      </div>
      <div className="col-10 d-flex" style={{ width: "88%" }}>
        <div className="productCardWrapper">
          <ProductReportCard
            topLabel={"Impressions"}
            topValue={productReportCardData?.impressions || 0}
            bottomLabel={"Clicks"}
            bottomValue={productReportCardData?.clicks || 0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"RDA"}
            topValue={productReportCardData?.rda || 0}
            bottomLabel={"Gross Clicks"}
            bottomValue={productReportCardData?.gross_clicks || 0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"Revenue"}
            topValue={productReportCardData?.revenue || 0}
            bottomLabel={"Pay Cut"}
            bottomValue={productReportCardData?.paycut || 0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"Total CV"}
            topValue={productReportCardData?.total_cv || 0}
            bottomLabel={"Profit"}
            bottomValue={productReportCardData?.profit || 0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"VTCV"}
            topValue={productReportCardData?.vtcv || 0}
            bottomLabel={"Margin"}
            bottomValue={productReportCardData?.margin || 0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"CTR"}
            topValue={productReportCardData?.ctr || 0}
            bottomLabel={"Avg. Sale Value"}
            bottomValue={productReportCardData?.average_sale_value || 0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"Gross Sales"}
            topValue={productReportCardData?.gross_sales || 0}
            bottomLabel={"CVR"}
            bottomValue={productReportCardData?.cvr || 0}
          />
        </div>
        <div className="ms-2 productCardWrapper">
          <ProductReportCard
            topLabel={"CPC"}
            topValue={productReportCardData?.cpc || 0}
            bottomLabel={"CPM"}
            bottomValue={productReportCardData?.cpm || 0}
          />
        </div>
      </div>
    </>
  );
};
