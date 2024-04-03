import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigate } from 'react-router-dom';

import "./CSS/Login.css";
import Navbar from "./Navbar";

const MyContext = React.createContext();

const Login = (props) => {
  
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    const authtoken = json.authtoken;
    if (json.success === true) {
      navigate("/", { state: { showSuccess: true , authtoken:authtoken} });
    } else {
      setShowAlert(true);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className="login-container"
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        {showAlert && ( // Render the alert when showAlert is true
          <div className="alert alert-primary" role="alert">
            Login failed. Please check your email and password.
          </div>
        )}

        <div className="d-flex justify-content-center">
          <Link to="/" style={{ textDecoration: "none", fontSize: "20px" }}>
            <img
              src="Back.png" // Replace with the path to your icon image
              alt="Back Icon"
              style={{
                position: "absolute",
                right: "43%",
                top: "17%",
                width: "40px",
                marginRight: "8px",
              }} // Adjust width and spacing as needed
            />
          </Link>
          <form
            onSubmit={handleSubmit}
            className="rounded p-4"
            style={{
              backgroundColor: "#221e46",
              position: "absolute",
              top: "11%",
              right: "7%",
              height: "50%",
              width: "727px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h3 className="my-4" style={{ color: "#983643" }}>
              <strong>LOGIN</strong>
            </h3>
            <div className="mb-3" style={{ height: "127px" }}>
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#983643", fontSize: "22px" }}
              >
                Email address
              </label>
              <input
                style={{ height: "54px" }}
                type="email"
                className="form-control"
                value={credentials.email}
                onChange={onChange}
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
              <div
                id="emailHelp"
                className="form-text"
                style={{ color: "#983643" }}
              >
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#983643", fontSize: "22px" }}
              >
                Password
              </label>
              <input
                style={{ height: "54px" }}
                type="password"
                className="form-control"
                value={credentials.password}
                onChange={onChange}
                name="password"
                id="password"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                position: "relative",
                left: "34%",
                width: "187px",
                fontSize: "22px",
                top: "22px",
              }}
            >
              Login
            </button>
            <br />
            <br></br>
            <a
              style={{
                color: "#983643",
                position: "relative",
                left: "29%",
                fontSize: "20px",
                top: "11px",
              }}
            >
              Don't Have an Account?{" "}
              <Link to="/Signup" style={{ textDecoration: "none" }}>
                SignUp
              </Link>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
