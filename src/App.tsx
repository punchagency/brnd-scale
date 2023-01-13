import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { auth } from "./config/firebase";
import routes from "./config/routes";
import Center from "./components/utils/Center";
import AuthChecker from "./components/auth/AuthChecker";
import Layout from "./containers/Layouts/Layout";
import Navbar from "./components/Navbar/Navbar";
import AuthLayout from "./containers/Layouts/AuthLayout";
import Login from "./screens/Login";
import Register from "./screens/Register";
import RegisterStart from "./screens/RegisterStart";
import VerifyAccount from "./screens/VerifyAccount";
import Dashboard from "./screens/Dashboard";
import Offers from "./screens/Offers/Offers";
import PublisherReports from "./screens/Reports/PublisherReports";
import PublisherManage from "./screens/PublisherManage";
import Reports from "./screens/Reports";
import MyOffers from "./screens/PublisherScreens/PublisherOffers";
import ActiveProducts from "./screens/PublisherScreens/ActiveProducts";
import ActiveBrands from "./screens/PublisherScreens/ActiveBrands";
import BrandProducts from "./screens/PublisherScreens/BrandProducts";
import PublisherReporting from "./screens/PublisherScreens/PublisherReporting";
import PaymentReport from "./screens/Reports/PaymentReport";
import BrandsManage from "./screens/BrandsManage";
import JoinBrand from "./screens/PublisherScreens/JoinBrand";
import JoinOffer from "./screens/PublisherScreens/JoinOffer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.info("User detected.");
      } else {
        console.info("No user detected");
      }
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Center>
        <CircularProgress />
      </Center>
    );
  const loggedIn: boolean = true;
  return (
    <div className="vh-100 overflow-hidden">
      <Navbar loggedIn={loggedIn} />
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.protected ? (
                  <AuthChecker>
                    <route.component />
                  </AuthChecker>
                ) : (
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
      </BrowserRouter> */}
      {/* <Layout/> */}
      {/* <AuthLayout /> */}
      <div className="container-fluid" style={{ height: 'calc(100% - 50px)'}}> 
        {/* {loggedIn ? <Layout /> : <VerifyAccount />} */}

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {/* {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                    <AuthChecker>
                      <route.component />
                    </AuthChecker>
                  ) : (
                    // <Layout>
                    <route.component />
                    // </Layout>
                  )
                }
              />
            ))} */}
            <Route path="/auth" element={<AuthLayout />}>
              <Route index path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
              <Route path="verify-account" element={<VerifyAccount />} />
              <Route path="" element={<Navigate to="login" />} />
            </Route>
            <Route path='/' element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="offers" element={<Offers />} />
              <Route path="/publisher" element={<Dashboard />} />

              <Route path="/manage-brand" element={<BrandsManage />} />
              <Route path="/publishers" element={<PublisherManage />} />
              <Route path="offers" element={<Offers />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/product-reports" element={<Reports />} />
              <Route path="/publisher-reports" element={<PublisherReports />} />
              <Route path="/payment-reports" element={<PaymentReport />} />
              

              <Route path="/publisher/offers" element={<MyOffers />} />
              <Route path="/publisher/active-products" element={<ActiveProducts />} />
              <Route path="/publisher/active-brands" element={<ActiveBrands />} />
              <Route path="/publisher/brand-products" element={<BrandProducts />} />
              <Route path="/publisher/reports" element={<PublisherReporting />} />
              <Route path="/publisher/brand-details" element={<PaymentReport />} />
              <Route path="/publisher/join-brand" element={<JoinBrand />} />
              <Route path="/publisher/join-offer" element={<JoinOffer />} />
              <Route path="reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="" />} />
            </Route>

            
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
