import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyIcon from "../../components/svgs/MyIcon";

const AgencyRegister = ({ tabIndex, changeTabIndex }: any) => {
  const [formInputs, setFormInput] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    type_id: 3,
    password: "",
    password_confirmation: "",
    is_active: 0,
    address: "",
    phone: "",
    country: "",
    city: "",
    company_name: "",
    message: "",
    website: "",
    check: false,
  });
  const handleChange = (e: any) => {
    setFormInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCheck = (e: any) => {
    setFormInput((prev) => {
      return { ...prev, [e.target.name]: e.target.checked };
    });
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    var url = new URL(
      process.env.REACT_APP_BASE_URL +
        "users"
    );
    fetch(url, { mode: "cors", method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formInputs) }).then(async (response) => {
      let res = await response.json();console.log(res, formInputs)
      if(res.success){
        navigate("/auth/login");
      }else{

      }
    })
  }
  if (tabIndex === 0) {
    return (
      <>
        <div className="mb-3">
          <label htmlFor="fName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fName"
            name="fname"
            onChange={handleChange}
            value={formInputs.fname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lName"
            name="lname"
            onChange={handleChange}
            value={formInputs.lname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="email"
            className="form-control"
            id="phone"
            name="phone"
            onChange={handleChange}
            value={formInputs.phone}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
            value={formInputs.email}
          />
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
  return (
    <>
      <div className="mb-3">
        <label htmlFor="Name" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="Name"
          name="company_name"
          onChange={handleChange}
          value={formInputs.company_name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="url" className="form-label">
          Website URL
        </label>
        <input
          type="text"
          className="form-control"
          id="url"
          name="website"
          onChange={handleChange}
          value={formInputs.website}
        />
      </div>
      <div className="mb-3">
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
      </div>
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
          onClick={changeTabIndex}
          type="button"
        >
          Go back
        </button>
        <button type="button" onClick={handleSubmit} className="btn btn-dark bg-dark ms-auto me-auto">
          Register
        </button>
      </div>
    </>
  );
};

export default AgencyRegister;
