import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyIcon from "../../components/svgs/MyIcon";
import * as Yup from "yup";
import FormikField from "../../components/auth/FormikField";
import FormErrorMessage from "../../components/auth/FormErrorMessage";
import { toast } from "react-toastify";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required()
    .label("Name"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required()
    .label("Username"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .required()
    .label("Password"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .label("Confirm Password")
    .required(),
  email: Yup.string().email("Invalid email").label("Email").required(),
});
const SecondSignupSchema = Yup.object().shape({
  website: Yup.string().url("Invalid URL").label("Website URL").required(),
  company_name: Yup.string()
    .min(2, "Too short!")
    .label("Company Name")
    .required(),
  message: Yup.string().min(5, "Too short!").label("Message").required(),
});

const AgencyRegister = ({ tabIndex, changeTabIndex }: any) => {
  const [formError, setFormError] = useState(false);
  const [formErrorData, setFormErrorData] = useState();
  const [formInputs, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    type_id: 3,
    password: "",
    is_active: 0,
    address: "",
    phone: "",
    country: "",
    city: "",
    message: "",
    website: "",
    name: "",
    check: false,
  });
  const handleCheck = (e: any) => {
    setFormInput((prev) => {
      return { ...prev, [e.target.name]: e.target.checked };
    });
  };

  const navigate = useNavigate();
  // const handleSubmit = () => {
  //   const postInput = {
  //     ...formInputs,
  //     name: `${formInputs.fname} ${formInputs.lname}`,
  //     username: formInputs.email,
  //   };
  //   var url = new URL(process.env.REACT_APP_BASE_URL + "users");
  //   fetch(url, {
  //     mode: "cors",
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(postInput),
  //   }).then(async (response) => {
  //     let res = await response.json();
  //     console.log(res, postInput);
  //     if (res.success) {
  //       navigate("/auth/login");
  //     } else {
  //     }
  //   });
  // };

  const getFormContent = () => {
    if (tabIndex === 0) {
      return (
        <Formik
          initialValues={{
            name: "",
            username: "",
            password: "",
            password_confirmation: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            // same shape as initial values
            console.log("i fffdjf");
            setFormInput({ ...formInputs, ...values });

            console.log("i djf");
            changeTabIndex();
            console.log(values);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form>
              <>
                <FormikField
                  name="name"
                  touched={touched.name}
                  error={errors.name}
                  label={"Name"}
                />
                <FormikField
                  name="username"
                  touched={touched.username}
                  error={errors.username}
                  label={"Username"}
                />
                <FormikField
                  name="email"
                  touched={touched.email}
                  error={errors.email}
                  label={"Email"}
                  type="email"
                />
                <FormikField
                  name="password"
                  touched={touched.password}
                  error={errors.password}
                  label={"Password"}
                  type="password"
                />
                <FormikField
                  name="password_confirmation"
                  touched={touched.password_confirmation}
                  error={errors.password_confirmation}
                  label={"Confirm Password"}
                  type="password"
                />
                <div className="w-100 mt-1 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="border-0 bg-white ms-auto me-auto"
                  >
                    <MyIcon />
                  </button>
                </div>
              </>
            </Form>
          )}
        </Formik>
      );
    }
    return (
      <Formik
        initialValues={{
          website: "",
          phone: "",
          message: "",
          company_name: "",
        }}
        validationSchema={SecondSignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          // same shape as initial values
          console.log("i fffdjf");

          var url = new URL(process.env.REACT_APP_BASE_URL + "users");
          fetch(url, {
            mode: "cors",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...formInputs,
              ...values,
            }),
          }).then(async (response) => {
            let res = await response.json();
            if (res.success) {
              toast('Account created! please verify email with code sent to your email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
              navigate("/auth/verify-account");
            } else {
              setFormError(true);
              console.log("I dey here");
              setFormErrorData(res.data);
            }
          });

          console.log(values);
        }}
      >
        {({ errors, touched, handleSubmit }) => (
          <Form>
            {formError && <FormErrorMessage data={formErrorData} />}
            <>
              <FormikField
                name="phone"
                touched={touched.phone}
                error={errors.phone}
                label={"Phone"}
                type="tel"
              />

              <FormikField
                name="company_name"
                touched={touched.company_name}
                error={errors.company_name}
                label={"Company Name"}
                type="text"
              />

              <FormikField
                name="website"
                touched={touched.website}
                error={errors.website}
                label={"Website URL"}
                type="text"
              />
              <FormikField
                name="message"
                touched={touched.message}
                error={errors.message}
                label={"Message"}
                type="textarea"
              />
              {/* <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            onChange={handleChange}
            value={formInputs.message}
          />
        </div> */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember"
                  name="check"
                  onChange={handleCheck}
                  checked={formInputs.check}
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
                  type="submit"
                  className="btn btn-dark bg-dark ms-auto me-auto"
                >
                  Register
                </button>
              </div>
            </>
          </Form>
        )}
      </Formik>
    );
  };
  return getFormContent();
};

export default AgencyRegister;

interface ErrorMessageInterface {
  errorMessage: string;
}
