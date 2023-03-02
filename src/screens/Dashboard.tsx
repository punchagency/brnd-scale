import React, { FC, useState, useEffect } from "react";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import ListContainer from "../components/ListContainer";
import DashboardNotification from "../components/Notification/DashboardNotification";
import Table from "../components/Table";
import { selectUser } from "../features/user/userSlice";
import { useAppSelector } from "../app/hooks";
import ProductDetail from "../components/Popups/ProductDetail";
import AgencyCards from "../components/dashboard/AgencyCards";

const headers = [
  "Top Publishers",
  "Clicks",
  "Conversions",
  "Products",
  "Orders",
];

const brandsHeaders = [
  "Images",
  "Brands",
  "Product Name",
  "See Details",
  "Conversions",
  "Clicks",
  "Orders",
];

const displayLabels = [
  // "id",
  "top_publishers_name",
  "clicks",
  "conversion",
  "products",
  "orders",
];

const brandsDisplayLabels = [
  // "id",
  "image",
  "brands_name",
  "product_name",
  "see_details",
  "conversions",
  "clicks",
  "orders",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Dashboard: FC = () => {
  const userType = useAppSelector(selectUser);

  const [salesChartData, setSalesChartData] = useState<any>({
    labels: [],
    data: [],
  });
  const [commissionChartData, setCommissionsChartData] = useState<any>({
    labels: [],
    data: [],
  });
  const [topBrands, setTopBrands] = useState<any>([]);
  const [topPublishers, setTopPublishers] = useState<any>([]);
  const getApiPrefix = () => {
    switch (userType) {
      case "Agency":
        return "agencies";
      case "Brand":
        return "brands";
      case "Publisher":
        return "publishers";
      default:
        return "";
    }
  };

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);

  useEffect(() => {
    const searchParams = new URLSearchParams();

    currentPage && searchParams.append("page", currentPage + "");
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        `${getApiPrefix()}/charts?` +
        searchParams.toString()
    );

    console.log(url);

    fetch(url, { mode: "cors" }).then(async (response) => {
      //console.log(await response.text())
      let res = await response.json();
      console.log(res);

      let labels: any = [];
      let data: any = [];
      // let commLabels:any = [];
      let commData: any = [];

      res.data.forEach((item: any) => {
        //console.log(item.date)
        let date = new Date(item.date);
        labels.push(
          months[date.getMonth()] +
            " " +
            (date.getDay() < 10 ? "0" + date.getDay() : date.getDay())
        );
        // commLabels.push(months[date.getMonth()])
        data.push(item.comparison_of_total_sales_over_the_month);
        commData.push(item.total_commission_over_the_month);
      });
      console.log(labels, data, commData);

      setCommissionsChartData({ labels: labels, data: commData });
      setSalesChartData({ labels: labels, data: data });
    });

    const date = new Date();
    date.setFullYear(2022);
    let defaultDate =
      date.getFullYear() +
      "-" +
      (Number(date.getMonth() + 1) < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth());

    url = new URL(
      process.env.REACT_APP_BASE_URL +
        "agencies/tables/list-top-publishers?date=" +
        defaultDate
    );

    fetch(url, { mode: "cors" }).then(async (response) => {
      let res = await response.json();
      console.log(res);
      setTopPublishers(res.data);
    });

    url = new URL(
      process.env.REACT_APP_BASE_URL +
        "agencies/tables/list-top-brands?date=" +
        defaultDate
    );

    fetch(url, { mode: "cors" }).then(async (response) => {
      let res = await response.json();
      console.log(res);
      setTopBrands(
        res.data.map((data: any) => {
          return {
            ...data,
            image: (
              <img
                src={data.image}
                alt=""
                style={{ width: "60px", height: "50px" }}
              />
            ),
            see_details: (
              <div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target={`#productDetails`}
                  className="btn btn-outline-dark btn-sm"
                  style={{ fontSize: "12px" }}
                >
                  View product
                </button>
                <ProductDetail id="productDetails" />
              </div>
            ),
          };
        })
      );
    });
  }, []);
  const getCards = () => {
    return <AgencyCards apiPrefix={getApiPrefix()} />;
    
  };
  

  
  return (
    <>
      
      <div className="position-relative">
        <div className="pt-4">
          <p className="fw-light mb-0">Today stats</p>
          <p className="h3">{`${userType} `}Dashboard</p>
        </div>
        {userType === "Publisher" ? null : (
          <DashboardNotification brands={2} publishers={2} conversions={2} />
        )}
      </div>
      <div className="row ">{getCards()}</div>
      <div
        className="w-100 d-flex flex-wrap pt-4 justify-content-between"
        style={{ gap: "20px" }}
      >
        <div className="col w-md-50 w-100">
          <ListContainer
            title={
              userType === "Publisher" ? "My Brands" : "List of Top Publishers"
            }
          >
            <Table
              tableData={topPublishers}
              displayLabels={displayLabels}
              headers={headers}
              tableWidth={"100%"}
              hideCheckbox={true}
              hideFooter={true}
              hideToolbar={true}
              numOfPages={numOfPages}
              setNumOfPages={setNumOfPages}
              numOfRows={numOfRows}
              setNumOfRows={setNumOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ListContainer>
        </div>
        <div className="col w-md-50 w-100 border rounded">
          <BarChart labels={salesChartData.labels} data={salesChartData.data} />
        </div>
      </div>
      <div
        className="w-100 d-flex flex-wrap pt-4 justify-content-between"
        style={{ gap: "20px" }}
      >
        <div className="col w-md-50 w-100">
          <ListContainer title="List of Top Brands">
            <Table
              tableData={topBrands}
              displayLabels={brandsDisplayLabels}
              headers={brandsHeaders}
              tableWidth={"100%"}
              hideCheckbox={true}
              hideFooter={true}
              hideToolbar={true}
              numOfPages={numOfPages}
              setNumOfPages={setNumOfPages}
              numOfRows={numOfRows}
              setNumOfRows={setNumOfRows}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ListContainer>
        </div>
        <div className="col w-md-50 w-100 border rounded ">
          <LineChart
            labels={commissionChartData.labels}
            data={commissionChartData.data}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
