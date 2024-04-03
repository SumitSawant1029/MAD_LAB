import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Signin.css";

function Signin() {
  const navigate = useNavigate();
  const [showpassAlert, setShowpassAlert] = useState(false);
  const [showmobalert, setshowmobalert] = useState(false);
  const [ShowAgeAlert, setShowAgeAlert] = useState(false);
  const [ShowEmailAlert, setShowEmailAlert] = useState(false);
  const [showmobalert1, setshowmobalert1] = useState(false);
  const [credentials1, setcredentials1] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    mob: "",
    DOB: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onClick1 = (e) => {
    if (e.target.name === "1") {
      setShowAgeAlert(false);
    } else if (e.target.name === "2") {
      setShowpassAlert(false);
    } else if (e.target.name === "3") {
      setshowmobalert(false);
    } else if (e.target.name === "0") {
      setShowEmailAlert(false);
    } else if (e.target.name === "4") {
      setshowmobalert1(false);
    }
  };

  const Signuphandler = async (e) => {
    e.preventDefault();
    const isPasswordMatch = credentials1.password === credentials1.cpassword;
    const isMobileValid = credentials1.mob.length === 10;
    const birthDate = new Date(credentials1.DOB);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const isAgeValid = age >= 18;

    const isEmailValid = await fetch(
      "http://localhost:5000/api/auth//isEmailTaken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials1.email,
        }),
      }
    );
    const Response2 = await isEmailValid.json();
    const isEmailValid1 = Response2.code;
    console.log(isEmailValid1);
    const isPhoneValid1 = await fetch(
      "http://localhost:5000/api/auth/isPhoneTaken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mob: credentials1.mob,
        }),
      }
    );

    const Response1 = await isPhoneValid1.json();
    const isPhoneValid = Response1.code;

    if (
      isPasswordMatch &&
      isMobileValid &&
      isAgeValid &&
      isEmailValid1 &&
      isPhoneValid
    ) {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: credentials1.firstname,
            lastname: credentials1.lastname,
            gender: credentials1.gender,
            mob: credentials1.mob,
            DOB: credentials1.DOB,
            email: credentials1.email,
            password: credentials1.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.success === true) {
        // Redirect to the home page
        navigate("/login");
      }
    } else {
      if (!isPasswordMatch) {
        setShowpassAlert(true);
      }
      if (!isMobileValid) {
        setshowmobalert(true);
      }
      if (!isAgeValid) {
        setShowAgeAlert(true);
      }
      if (!isEmailValid1) {
        setShowEmailAlert(true);
      }
      if (!isPhoneValid) {
        setshowmobalert1(true);
      }
    }
  };

  const onChange1 = (e) => {
    setcredentials1({ ...credentials1, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="signin-container"
        style={{ position: "absolute", width: "100%", height: "100%" }}
      >
        {ShowEmailAlert && ( // Render the alert when showAlert is true
          <div
            className="alert alert-warning alert-dismissible fade show my-0"
            role="alert"
          >
            <strong>Email Already Exist</strong>
            <button
              type="button"
              name="0"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={onClick1}
              aria-label="Close"
            ></button>
          </div>
        )}
        {ShowAgeAlert && ( // Render the alert when showAlert is true
          <div
            className="alert alert-warning alert-dismissible fade show my-0"
            role="alert"
          >
            <strong>Age Should be greater than 18</strong>
            <button
              type="button"
              name="1"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={onClick1}
              aria-label="Close"
            ></button>
          </div>
        )}
        {showpassAlert && ( // Render the alert when showAlert is true
          <div
            className="alert alert-warning alert-dismissible fade show my-0"
            role="alert"
          >
            <strong>Password Doesn't Match</strong>
            <button
              type="button"
              name="2"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={onClick1}
              aria-label="Close"
            ></button>
          </div>
        )}
        {showmobalert && ( // Render the alert when showAlert is true
          <div
            className="alert alert-warning alert-dismissible fade show my-0"
            role="alert"
          >
            <strong>Please Enter an Correct Contact Number</strong>
            <button
              type="button"
              name="3"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={onClick1}
              aria-label="Close"
            ></button>
          </div>
        )}
        {showmobalert1 && ( // Render the alert when showAlert is true
          <div
            className="alert alert-warning alert-dismissible fade show my-0"
            role="alert"
          >
            <strong>Number Already Exist</strong>
            <button
              type="button"
              name="4"
              className="btn-close"
              data-bs-dismiss="alert"
              onClick={onClick1}
              aria-label="Close"
            ></button>
          </div>
        )}

        <form
          onSubmit={Signuphandler}
          className="rounded p-4"
          style={{
            backgroundColor: "#221e46",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            position: "absolute",
            width: "45%",
            top: "10%",
            right: "3%",
          }}
        >
          <h3 className="my-4" style={{ color: "#983643" }}>
            <strong>SIGN UP</strong>
          </h3>

          <div className="input-group my-3">
            <span className="input-group-text">First and last name</span>
            <input
              name="firstname"
              type="text"
              onChange={onChange1}
              aria-label="First name"
              className="form-control"
            />
            <input
              name="lastname"
              type="text"
              onChange={onChange1}
              aria-label="Last name"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="gender"
              className="form-label"
              style={{ color: "#983643",fontSize: "22px" }}
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              onChange={onChange1}
              className="form-select"
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label
              htmlFor="phoneNumber"
              className="form-label"
              style={{ color: "#983643",fontSize: "22px" }}
            >
              <strong>Phone Number</strong>
            </label>
            <input
              type="tel"
              name="mob"
              onChange={onChange1}
              id="phoneNumber"
              className="form-control"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="dateOfBirth"
              className="form-label"
              style={{ color: "#983643",fontSize: "22px" }}
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="DOB"
              onChange={onChange1}
              id="dateOfBirth"
              className="form-control"
            />
          </div>

          <label
            htmlFor="confirmPassword"
            className="form-label"
            style={{ color: "#983643",fontSize: "22px" }}
          >
            Email
          </label>
          <div className="input-group flex-nowrap my-1">
            <span className="input-group-text" id="addon-wrapping">
              @
            </span>
            <input
              type="text"
              style={{ color: "#983643" }}
              onChange={onChange1}
              name="email"
              className="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="inputPassword5"
              className="form-label"
              style={{ color: "#983643",fontSize: "22px" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChange1}
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
            />
            <div
              id="passwordHelpBlock"
              className="form-text"
              style={{ color: "#983643" }}
            >
              Your password must be 8- 20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label"
              style={{ color: "#983643",fontSize: "22px" }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="cpassword"
              onChange={onChange1}
              id="confirmPassword"
              className="form-control"
            />
          </div>

          <button
            type="submit"
            style={{ width: "200px", position: "relative", left: "38%" }}
            onClick={Signuphandler}
            className="btn btn-primary"
          >
            Sign Up
          </button>
          <Link
            to="/Login"
            type="submit"
            style={{ width: "80px", position: "absolute", left: "80%" }}
            className="btn btn-primary mx-3"
          >
            Back
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signin;
