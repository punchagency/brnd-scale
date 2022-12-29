import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  const loggedIn: boolean = false;
  return (
    <div className="">
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
      <div className="container-fluid">
        {/* {loggedIn ? <Layout /> : <VerifyAccount />} */}
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
