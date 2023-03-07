import React, { FC, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AuthLayout from "../../containers/Layouts/AuthLayout";
import { userType } from "../../types";
import AmazonLogo from "../../assets/images/amazon.png";
import {
  selectUser,
  login,
  selectLoggedIn,
} from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Form, Formik } from "formik";
import FormErrorMessage from "../../components/auth/FormErrorMessage";
import FormikField from "../../components/auth/FormikField";
import { setAuthToken } from "../../config/auth";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import Cookies from "js-cookie";

interface Props {}
const SecondSignupSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().label("Password")
});

const Login: FC = ({}: Props) => {
  const userType = useAppSelector(selectUser);
  const loggedIn = useAppSelector(selectLoggedIn);
  const navigate = useNavigate();
  const [formError, setFormError] = useState(false);
  const [formErrorData, setFormErrorData] = useState();

  const dispatch = useAppDispatch();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    dispatch(login());
  };
  useEffect(() => {
    if (loggedIn) {
    }
  });

  const handleChange = (e: any) => {
    setFormInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    const postInput = {
      ...formInputs,
    };
    var url = new URL(process.env.REACT_APP_BASE_URL + "auth/login");
    fetch(url, {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postInput),
    }).then(async (response) => {
      let res = await response.json();
      console.log(res, postInput);
      if (res.success) {console.log(res)
        dispatch(login());
      } else {
        toast('Something went wrong, please try again', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    });
  };

  const getTypeid = (userType: userType) => {
    if(userType === 'Brand') return 1;
    if(userType === 'Agency') return 3;
    return 2;
  }

  // getting and setting URL params
  // const [searchParams, setSearchParams] = useSearchParams();

  // // get action from URL
  // const action: string = searchParams.get("action") || "login";

  return (
    <div className="border rounded p-5">
      <p className="h5 mb-4">Login to your {userType} Account</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SecondSignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          // same shape as initial values
          console.log("i fffdjf");

          var url = new URL(process.env.REACT_APP_BASE_URL + "auth/login");
          fetch(url, {
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...values,
              type_id: getTypeid(userType)
            }),
          }).then(async (response) => {
            let res = await response.json();
            if (res.success) {
              const token = res.data.access_token;
              setAuthToken(token);
              Cookies.set('userType', userType, { expires: 7 })
              navigate("/");
            } else {
              toast('Something went wrong, please try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              setFormError(true);
              console.log("I dey here");
              setFormErrorData(res.data);
            }
          });

          console.log(values);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form className="w-100">
            {formError && <FormErrorMessage data={formErrorData} />}
            <>
              <FormikField
                name="email"
                touched={touched.email}
                error={errors.email}
                label={"Username/Email"}
                type="text"
              />
              <FormikField
                name="password"
                touched={touched.password}
                error={errors.password}
                label={"Password"}
                type="password"
              />

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                />
                <label className="form-check-label fs-6" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <div className="d-flex justify-content-between mt-3 mb-4">
                <Link
                  to={"/auth/signup"}
                  className="text-black-50 text-decoration-none"
                >
                  Sign up here
                </Link>
                <Link
                  to={"forgot-password"}
                  className="text-black-50 text-decoration-none"
                >
                  Forgot Details?
                </Link>
              </div>
              <div className="w-100 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-secondary ms-auto me-auto"
                  onClick={onSubmit}
                >
                  Login
                </button>
              </div>
            </>
          </Form>
        )}
      </Formik>

      <div className="w-100 d-flex align-items-center justify-content-evenly mt-5">
        <p className="mt-auto mb-auto">Or sign in with</p>
        <a href="#">
          <img className="w-100 h-100" src={AmazonLogo} alt="amazon signup" />
        </a>
      </div>
    </div>
  );
};

export default Login;
