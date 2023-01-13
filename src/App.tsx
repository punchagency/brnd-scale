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
              <Route path="publishers" element={<PublisherManage />} />
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
