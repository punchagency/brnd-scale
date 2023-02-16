import React, { FC, useState, useEffect } from "react";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import ListContainer from "../components/ListContainer";
import DashboardNotification from "../components/Notification/DashboardNotification";
import Table from "../components/Table";
import BrandsImage from "../assets/images/images.svg";
import { selectUser } from "../features/user/userSlice";
import {  useAppSelector } from "../app/hooks";
import TestCard from "../components/Card/TestCard";
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

const data = [
  {
    id: 1,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "12",
  },
  {
    id: 2,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "19",
  },
  {
    id: 3,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "12",
  },
  {
    id: 4,
    topPublishers: "Donna Slider",
    clicks: "12",
    conversions: "12",
    products: "12",
    orders: "12",
  },
];

const brandsData = [
  {
    id: 1,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
  {
    id: 2,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
  {
    id: 3,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
  {
    id: 4,
    images: <img src={BrandsImage} alt="" />,
    brands: "Donna Slider",
    productNames: "Donna Slider",
    seeDetails: (
      <div>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#productDetails`}
          className="btn btn-outline-dark"
          style={{ fontSize: "12px" }}
        >
          View product
        </button>
        <ProductDetail id="productDetails" />
      </div>
    ),
    conversions: "12",
    clicks: "12",
    orders: "12",
  },
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
    switch(userType) {
      case 'Agency':
        return 'agencies'
      case 'Brand':
        return 'brands'
      case 'Publisher':
        return 'publishers'
      default:
        return ''
    }
  }

  const [numOfRows, setNumOfRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState(1);
  
  const [selectedCard, setSelectedCard] = useState(0);
  const [componentDate, setComponentDate] = useState<string | {from: string, to: string}>("");

  useEffect(() => {
    // console.log(componentDate);

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
      // console.log(res);

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
      console.log(labels);

      setCommissionsChartData({ labels: labels, data: commData });
      setSalesChartData({ labels: labels, data: data });
    });
    url = new URL(
      process.env.REACT_APP_BASE_URL +
        "agencies/tables/list-top-publishers?date=2022-02"
    );

    fetch(url, { mode: "cors" }).then(async (response) => {
      let res = await response.json();
      console.log(res);
      setTopPublishers(res.data);
    });

    url = new URL(
      process.env.REACT_APP_BASE_URL +
        "agencies/tables/list-top-brands?date=2022-02"
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
  const getCards = () =>{
    // if(userType === 'Agency'){
      return <AgencyCards apiPrefix={getApiPrefix()} />
    // }else{
    //   return <>
    //        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mt-2">
    //          <TestCard
    //            title="Total Sales"
    //            extra="27K"
    //            reduce={true}
    //            value="576"
    //            yesterday={"1.3K"}
    //            currentMonth={"1.3K"}
    //            lastMonth={"21.3K"}
    //            main={selectedCard === 0}
    //            date="From 10 - 20 Nov"
    //            onClick={() => setSelectedCard(0)}
    //            setComponentDate={setComponentDate}
    //          />
    //        </div>
    //        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
    //          <TestCard
    //            title="Total Orders"
    //            extra="27K"
    //            reduce={true}
    //            value="576"
    //            yesterday={"1.3K"}
    //            currentMonth={"1.3K"}
    //            lastMonth={"21.3K"}
    //            main={selectedCard === 1}
    //            date="From 10 - 20 Nov"
    //            onClick={() => setSelectedCard(1)}
    //            setComponentDate={setComponentDate}
    //          />
    //        </div>
    //        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
    //          <TestCard
    //            title="Total Revenue"
    //            extra="27K"
    //            reduce={true}
    //            value="$259.99"
    //            yesterday={"1.3K"}
    //            currentMonth={"1.3K"}
    //            lastMonth={"21.3K"}
    //            main={selectedCard === 2}
    //            date="From 10 - 20 Nov"
    //            onClick={() => setSelectedCard(2)}
    //            setComponentDate={setComponentDate}
    //          />
    //        </div>
    //        <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
    //          <TestCard
    //            title="Conversion rate"
    //            extra="27K"
    //            reduce={true}
    //            value="53.2%"
    //            yesterday={"1.3K"}
    //            currentMonth={"1.3K"}
    //            lastMonth={"21.3K"}
    //            main={selectedCard === 3}
    //            date="From 10 - 20 Nov"
    //            onClick={() => setSelectedCard(3)}
    //            setComponentDate={setComponentDate}
    //          />
    //        </div>
    //      </>
    // }
  }
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
