import React from "react";
import { userType } from "../../types";


interface AuthLayoutProps {
  children?: React.ReactNode;
  userType?: userType;
  setUserType?: (value: userType) => void;
}

const AuthLayout = ({ children, setUserType, userType }: AuthLayoutProps) => {
  const onClick = (value: userType) => {
    setUserType && setUserType(value)
  }
  return (
    <div className="container-lg d-flex flex-row align-items-center justify-content-between">
      <div className="d-none d-md-block col-6 col-lg-7">
        <p className="fw-light mb-4">Welcome , Get Affliated with</p>
        <p className="h1 mb-4">BRNDScale</p>
        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="d-flex w-100 justify-content-between">
          <p className="fw-light mt-auto mb-auto">Choose your role</p>

          <div className="d-flex w-75">
            <button type="button" onClick={() => onClick('Publisher')} className={`btn btn-${userType?.includes('Publisher') ? 'primary': 'secondary'} me-3 w-50 p-2`}>
              Publisher
            </button>
            <button type="button" onClick={() => onClick('Brand/Seller')} className={`btn btn-${userType?.includes('Seller') ? 'primary': 'secondary'} w-50 p-2`}>
              Brand/Seller
            </button>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
