import React from "react";
import "./CSS/AboutUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Aboutus() {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <img
            src="group.jpg"
            alt="Jane"
            style={{ width: "100%", position: "relative", height: "771px" }}
          />
        </div>
        <div class="about-section">
          <h1>About Us Page</h1>
          <p>
            We are a group of enthusiastic and ambitious third-year students
            with a passion for web development <br></br> and gaming. Our team
            consists of individuals who are eager to apply their knowledge and
            skills to create an engaging and user-friendly gaming e-commerce
            platform
          </p>
        </div>

        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div class="row" style={{ height: "771px" }}>
          <div class="column my-1 mx-2" style={{ flex: "1", height: "200px" }}>
            <div class="card">
              <img
                src="/Team1.jpg"
                alt="sumit"
                style={{ width: "100%", height: "500px" }}
              />
              <div class="container">
                <h2>Sumit Sawant</h2>
                <p class="title">Leader</p>
                <p>
                  Passionate coder who finds joy in crafting elegant solutions
                  to complex problems through programming
                </p>
                <p>sumitsawant1029@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="column my-1" style={{ flex: "1", height: "200px" }}>
            <div class="card">
              <img
                src="/Team2.jpg"
                alt="Abhay"
                style={{ width: "100%", height: "500px" }}
              />
              <div class="container">
                <h2>Abhay Singh</h2>
                <p class="title">Manager</p>
                <p>
                  A solution-oriented individual with a passion for effective
                  management and problem-solving.
                </p>
                <p>abhaysingh14310@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="column my-1" style={{ flex: "1", height: "200px" }}>
            <div class="card">
              <img
                src="/Team3.jpg"
                alt="Afzal"
                style={{ width: "100%", height: "500px" }}
              />
              <div class="container">
                <h2>Afzal Siddhiquie</h2>
                <p class="title">Manager</p>
                <p>
                  Supportive individual who thrives on playing with data to
                  extract valuable insights.
                </p>
                <p>afzalsiddhiquie@gmail.com</p>
              </div>
            </div>
          </div>

          <div class="column my-1" style={{ flex: "1", height: "200px" }}>
            <div class="card">
              <img
                src="/Team4.jpg"
                alt="Ilyas"
                style={{ width: "100%", height: "500px" }}
              />
              <div class="container">
                <h2>Ilyas Khan</h2>
                <p class="title">Partner</p>
                <p>
                  A skilled UI designer, creating visually appealing and
                  user-friendly interfaces.
                </p>
                <p>john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
