import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
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
            <button type="button" className="btn btn-primary me-3 w-50 p-2">
              Publisher
            </button>
            <button type="button" className="btn btn-secondary w-50 p-2">
              Brand/Seller
            </button>
          </div>
        </div>
      </div>
      <div className="border">{children}</div>
    </div>
  );
};

export default AuthLayout;
