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
import Login from "./screens/Auth/Login";
import Register from "./screens/Auth/Register";
import RegisterStart from "./screens/RegisterStart";
import VerifyAccount from "./screens/Auth/VerifyAccount";
import Dashboard from "./screens/Dashboard";
import Offers from "./screens/Offers/Offers";
import PublisherReports from "./screens/Reports/PublisherReports";
import PublisherManage from "./screens/PublisherManage";
import Reports from "./screens/Reports";
import MyOffers from "./screens/PublisherScreens/MyOffers/MyOffers";
import BrandProducts from "./screens/PublisherScreens/BrandProducts";
import PublisherReporting from "./screens/PublisherScreens/PublisherReporting";
import PaymentReport from "./screens/Reports/PaymentReport";
import BrandsManage from "./screens/BrandsManage";
import ProductReports from "./screens/Reports/ProductReports";
import PublisherOffers from "./screens/PublisherScreens/Offers/PublisherOffers";
import MarketPlace from "./screens/MarketPlace/MarketPlace";
import { getAuthToken } from "./config/auth";
import { login, logout } from "./features/user/userSlice";
import { useAppDispatch } from "./app/hooks";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     console.info("User detected.");
    //   } else {
    //     console.info("No user detected");
    //   }
    //   setLoading(false);
    // });
    const authToken = getAuthToken();
    if (authToken) {
      dispatch(login());
      setLoading(false);
    } else {
      dispatch(logout());
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <Center>
        <CircularProgress />
      </Center>
    );
  const loggedIn: boolean = true;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="vh-100 overflow-hidden">
        <Navbar loggedIn={loggedIn} />

        <div
          className="container-fluid"
          style={{ height: "calc(100% - 50px)" }}
        >
          <Routes>
            <Route path="/auth" element={<AuthLayout />}>
              <Route index path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
              <Route path="complete-signup" element={<RegisterStart />} />
              <Route path="verify-account" element={<VerifyAccount />} />
              <Route path="" element={<Navigate to="login" />} />
            </Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="offers" element={<Offers />} />

              <Route path="manage-brand" element={<BrandsManage />} />
              <Route path="publishers" element={<PublisherManage />} />
              <Route path="reports" element={<Reports />} />
              <Route path="product-reports" element={<ProductReports />} />
              <Route path="publisher-reports" element={<PublisherReports />} />
              <Route path="payment-reports" element={<PaymentReport />} />
              <Route path="reports" element={<Reports />} />
              <Route path="/market-place" element={<MarketPlace />} />

              {/* Publisher links */}
              <Route path="publisher" element={<Dashboard />} />
              <Route path="publisher/offers" element={<MyOffers index={0} />} />
              <Route
                path="publisher/active-products"
                element={<MyOffers index={2} />}
              />
              <Route
                path="publisher/active-brands"
                element={<MyOffers index={1} />}
              />
              <Route
                path="publisher/brand-products"
                element={<BrandProducts />}
              />
              <Route
                path="publisher/reports"
                element={<PublisherReporting />}
              />
              <Route
                path="publisher/brand-details"
                element={<PaymentReport />}
              />
              <Route
                path="publisher/join-brand"
                element={<PublisherOffers index={0} />}
              />
              <Route
                path="publisher/join-offer"
                element={<PublisherOffers index={1} />}
              />
              <Route path="*" element={<Navigate to="" />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
