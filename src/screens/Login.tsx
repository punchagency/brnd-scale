import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AuthLayout from "../containers/Layouts/AuthLayout";
import { userType } from "../types";

interface Props {

}

const Login: FC = ({}: Props) => {
  const [userType, setUserType] = useState<userType>('Publisher')
  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";

  return (
    <AuthLayout setUserType={setUserType} userType={userType}>
      <div>
        <p>Login to your {userType} Account</p>
      </div>
    </AuthLayout>
  );
};



export default Login;
