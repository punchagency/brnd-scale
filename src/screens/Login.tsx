import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "../containers/Layouts/AuthLayout";

interface Props {}

const Login: FC = ({}: Props) => {
  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";

  return (
    <AuthLayout>
      Login
    </AuthLayout>
  );
};



export default Login;
