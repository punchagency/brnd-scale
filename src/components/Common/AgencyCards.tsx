import React, { useState, useEffect } from "react";
import TestCard from "../Card/TestCard";

const AgencyCards = ({ apiPrefix }: any) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [sales, setSales] = useState({
    current_month_sales: 0,
    date: "",
    last_month_sales: 0,
    sales_comparison_with_previous_month: 0,
    statistics: 0,
    total_sales_number: 0,
    yesterdays_sales: 0,
  });
  const [orders, setOrders] = useState({
    current_month_orders: 0,
    date: "",
    last_month_orders: 0,
    orders_comparison_with_previous_month: 0,
    statistics: 0,
    total_orders: 0,
    yesterdays_orders: 0,
  });
  const [revenues, setRevenues] = useState({
    current_month_revenue: 0,
    date: "",
    last_month_revenue: 0,
    revenue_comparison_with_previous_month: 0,
    statistics: 0,
    total_revenue: 0,
    yesterdays_revenue: 0,
  });
  const [conversions, setConversions] = useState({
    current_month_conversion_rate: 0,
    date: "",
    last_month_conversion_rate: 0,
    conversion_rate_comparison_with_previous_month: 0,
    statistics: 0,
    total_conversion_rate: 0,
    yesterdays_conversion_rate: 0,
  });

  const [salesDate, setSalesDate] = useState<string | {from: string, to: string}>("");
  const [revenueDate, setRevenueDate] = useState<string | {from: string, to: string}>("");
  const [conversionsDate, setConversionsDate] = useState<string | {from: string, to: string}>("");
  const [orderDate, setOrderDate] = useState<string | {from: string, to: string}>("");

  useEffect(() => {
    

    let url = new URL(
      process.env.REACT_APP_BASE_URL + `${apiPrefix}/cards/total-sales?date=2022-02`
    );
    let promises = [];

    promises.push(
      fetch(url, { mode: "cors" }).then(async (response) => {
        let res = await response.json();
        console.log("res",res);
        setSales(res.data);
      })
    );

    url = new URL(
      process.env.REACT_APP_BASE_URL +
      `${apiPrefix}/cards/total-orders?date=2022-02`
    );

    promises.push(
      fetch(url, { mode: "cors" }).then(async (response) => {
        let res = await response.json();
        console.log(res);
        setOrders(res.data);
      })
    );
    url = new URL(
      process.env.REACT_APP_BASE_URL +
      `${apiPrefix}/cards/total-revenues?date=2022-02`
    );

    promises.push(
      fetch(url, { mode: "cors" }).then(async (response) => {
        let res = await response.json();
        console.log(res);
        setRevenues(res.data);
      })
    );

    url = new URL(
      process.env.REACT_APP_BASE_URL +
      `${apiPrefix}/cards/conversion-rates?date=2022-02`
    );

    promises.push(
      fetch(url, { mode: "cors" }).then(async (response) => {
        let res = await response.json();
        console.log(res);
        setConversions(res.data);
      })
    );
  }, [salesDate, revenueDate, orderDate, conversionsDate, apiPrefix]);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xxl-3 mt-2">
        <TestCard
          title="Total Sales"
          extra={sales?.sales_comparison_with_previous_month + "K"}
          reduce={true}
          value={sales?.total_sales_number + ""}
          yesterday={sales?.yesterdays_sales + "K"}
          currentMonth={sales?.current_month_sales + "K"}
          lastMonth={sales?.last_month_sales + "K"}
          main={selectedCard === 0}
          date={salesDate}//"From 10 - 20 Nov"
          onClick={() => setSelectedCard(0)}
          setComponentDate={setSalesDate}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
        <TestCard
          title="Total Orders"
          extra={orders?.orders_comparison_with_previous_month + "K"}
          reduce={true}
          value={orders?.total_orders + ""}
          yesterday={orders?.yesterdays_orders + "K"}
          currentMonth={orders?.current_month_orders + "K"}
          lastMonth={orders?.last_month_orders + "K"}
          main={selectedCard === 1}
          date={orderDate}
          onClick={() => setSelectedCard(1)}
          setComponentDate={setOrderDate}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
        <TestCard
          title="Total Revenue"
          extra={revenues?.revenue_comparison_with_previous_month + "K"}
          reduce={true}
          value={"$" + revenues?.total_revenue}
          yesterday={revenues?.yesterdays_revenue  + "K"}
          currentMonth={revenues?.current_month_revenue + "K"}
          lastMonth={revenues?.last_month_revenue + "K"}
          main={selectedCard === 2}
          date={revenueDate}
          onClick={() => setSelectedCard(2)}
          setComponentDate={setRevenueDate}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-4 col-xxl-3 ps-2 mt-2">
        <TestCard
          title="Conversion rate"
          extra={conversions?.conversion_rate_comparison_with_previous_month + "K"}
          reduce={true}
          value="53.2%"
          yesterday={conversions?.yesterdays_conversion_rate + "K"}
          currentMonth={conversions?.current_month_conversion_rate + "K"}
          lastMonth={conversions?.last_month_conversion_rate + "K"}
          main={selectedCard === 3}
          date={conversionsDate}
          onClick={() => setSelectedCard(3)}
          setComponentDate={setConversionsDate}
        />
      </div>
    </>
  );
};

export default AgencyCards;
