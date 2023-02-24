import React, { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import MyIcon from "../../components/svgs/MyIcon";
import { Link, useNavigate } from "react-router-dom";
import PlusIcon from "../../assets/images/Plus.svg";
import InputCode from "../../components/VerifyInput";
import AgencyRegister from "./AgencyRegister";

// interface Props {}

const AuthPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const userType = useAppSelector(selectUser);
  const [tabIndex, setTabIndex] = useState(0);
  const [registerData, setRegisterData] = useState({
    "name": "",
    "email": "",
    "username": "",
    "type_id": 1,
    "password": "",
    "password_confirmation": "",
    "is_active": 1,
    "address": "",
    "phone": "",
    "country": "",
    "city": "",
    "company_name": "",
    "instagram": "",
    "dob": "",
    "website": "",
    "amazon_link": ""
  })

  const navigate = useNavigate();
  const handleSubmit = () => {

    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "users"
    );
    fetch(url, { mode: "cors", method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(registerData) }).then(async (response) => {
      let res = await response.json();console.log(res, registerData)
      if(res.success){
        navigate("/auth/login");
      }else{

      }
    })
  }

  const changeRegisterData = (inputName: string, inputValue: any) => {
    setRegisterData({...registerData, [inputName]: inputValue})
  }

  const changeTabIndex = (e: React.MouseEvent, op = "add") => {
    e.preventDefault();

    // setTabIndex(tabIndex === 1 ? 0 : 1);
    op === "sub"
      ? setTabIndex((prev) => --prev)
      : setTabIndex((prev) => (prev >= 2 ? 0 : ++prev));
  };
  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";
  const formContent = () => {
    switch (userType) {
      case "Agency":
        return <AgencyRegister tabIndex={tabIndex} changeTabIndex={changeTabIndex} />;
        
      case "Publisher":
        if (tabIndex === 1) {
          return (
            <>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input type="text" className="form-control" id="Country" value={registerData.country} onChange={(e) => changeRegisterData('country', e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" value={registerData.city} onChange={(e) => 
                  changeRegisterData('city', e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date of birth
                </label>
                <input type="date" className="form-control" id="date" value={registerData.dob} onChange={(e) => changeRegisterData('dob', e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="insta" className="form-label">
                  Instagram link
                </label>
                <input type="text" className="form-control" id="insta" value={registerData.instagram} onChange={(e) => changeRegisterData('instagram', e.target.value)}/>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label fs-6" htmlFor="remember">
                  <small>
                    By creating the form you agree to the terms and conditions
                  </small>
                </label>
              </div>

              <div className="w-100 d-flex justify-content-center">
                <button
                  className="btn btn-dark bg-dark ms-auto me-auto"
                  onClick={(e) => changeTabIndex(e, "sub")}
                  type="button"
                >
                  Go back
                </button>
                <button
                  // type="submit"
                  onClick={changeTabIndex}
                  className="btn btn-dark bg-dark ms-auto me-auto"
                >
                  Register
                </button>
              </div>
            </>
          );
        } else if (tabIndex === 2) {
          return (
            <div className="border rounded p-5 text-center">
              <p className="h5 mb-5 mt-5 fw-500">Verify your Account</p>
              <form className="w-100">
                <div className="mb-3">
                  <label htmlFor="code" className="form-label h5 mb-3">
                    Enter the code we sent to you
                  </label>
                  <InputCode
                    length={5}
                    label="Code Label"
                    loading={loading}
                    onComplete={(code) => {
                      setLoading(true);
                      setTimeout(() => setLoading(false), 10000);
                      
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between mt-3 mb-4">
                  <a
                    href="/login"
                    className="text-black-50 text-decoration-none"
                  >
                    Go to Login page
                  </a>
                  <a
                    href="forgot-password"
                    className="text-black-50 text-decoration-none"
                  >
                    Forgot Details?
                  </a>
                </div>
                <div className="w-100 d-flex justify-content-center mb-5">
                  <button
                    onClick={changeTabIndex}
                    className="btn btn-primary ms-auto me-auto"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          );
        }

        return (
          <>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="Name" value={registerData.name} onChange={(e) => changeRegisterData('name', e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="address" value={registerData.address} onChange={(e) => changeRegisterData('address', e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input type="text" className="form-control" id="phone" value={registerData.phone} onChange={(e) => changeRegisterData('phone', e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" value={registerData.email} onChange={(e) => changeRegisterData('email', e.target.value)} />
            </div>

            <div className="w-100 mt-1 d-flex justify-content-center">
              <button
                type="submit"
                className="border-0 bg-white ms-auto me-auto"
                onClick={changeTabIndex}
              >
                <MyIcon />
              </button>
            </div>
          </>
        );
      default:
        if (tabIndex === 1) {
          return (
            <>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input type="text" className="form-control" id="Country" value={registerData.country} onChange={(e) => changeRegisterData('country', e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" value={registerData.city} onChange={(e) => changeRegisterData('city', e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="website" className="form-label">
                  Website link
                </label>
                <input type="text" className="form-control" id="website" value={registerData.website} onChange={(e) => changeRegisterData('website', e.target.value)}/>
              </div>
              <div className="mb-3">
                <label htmlFor="amazon" className="form-label">
                  Amazon link
                </label>
                <div className="w-100 d-flex">
                  <input
                    type="text"
                    className="form-control w-75"
                    id="amazon"
                    value={registerData.amazon_link}
                    onChange={(e) => changeRegisterData('amazon_link', e.target.value)}
                  />
                  <button className="btn btn-dark flex-grow-1">
                    <img src={PlusIcon} alt="" />
                  </button>
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label fs-6" htmlFor="remember">
                  <small>
                    By creating the form you agree to the terms and conditions
                  </small>
                </label>
              </div>

              <div className="w-100 d-flex justify-content-center">
                <button
                  className="btn btn-dark bg-dark ms-auto me-auto"
                  onClick={(e) => changeTabIndex(e, "sub")}
                  type="button"
                >
                  Go back
                </button>
                <button
                  onClick={changeTabIndex}
                  // type="submit"
                  className="btn btn-dark bg-dark ms-auto me-auto"
                >
                  Register
                </button>
              </div>
            </>
          );
        } else if (tabIndex === 2) {
          return (
            <div className="border rounded p-5 text-center">
              <p className="h5 mb-5 mt-5 fw-500">Verify your Account</p>
              <form className="w-100">
                <div className="mb-3">
                  <label htmlFor="code" className="form-label h5 mb-3">
                    Enter the code we sent to you
                  </label>
                  <InputCode
                    length={5}
                    label="Code Label"
                    loading={loading}
                    onComplete={(code) => {
                      setLoading(true);
                      setTimeout(() => setLoading(false), 10000);
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between mt-3 mb-4">
                  <a
                    href="/login"
                    className="text-black-50 text-decoration-none"
                  >
                    Go to Login page
                  </a>
                  <a
                    href="forgot-password"
                    className="text-black-50 text-decoration-none"
                  >
                    Forgot Details?
                  </a>
                </div>
                <div className="w-100 d-flex justify-content-center mb-5">
                  <button
                    onClick={changeTabIndex}
                    className="btn btn-primary ms-auto me-auto"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          );
        }
        return (
          <>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="Name" value={registerData.name} onChange={(e) => changeRegisterData('name', e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="address" value={registerData.address} onChange={(e) => changeRegisterData('address', e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input type="text" className="form-control" id="country" value={registerData.country} onChange={(e) => changeRegisterData('country', e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" value={registerData.email} onChange={(e) => changeRegisterData('email', e.target.value)}/>
            </div>

            <div className="w-100 mt-1 d-flex justify-content-center">
              <button
                type="submit"
                className="border-0 bg-white ms-auto me-auto"
                onClick={changeTabIndex}
              >
                <MyIcon />
              </button>
            </div>
          </>
        );
    }
  };

  // const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="border rounded p-5">
      <p className="h5 mb-4">Register your {userType} Account</p>
      <form className="w-100">
        {formContent()}
        <div className="d-flex justify-content-between mt-3 mb-4">
          <Link
            to={"/auth/login"}
            className="text-black-50 text-decoration-none"
          >
            Go to Login page
          </Link>
          <Link
            to={"forgot-password"}
            className="text-black-50 text-decoration-none"
          >
            Forgot Details?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
