import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function CartDetails(props) {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <a style={{ fontSize: "100px", position: "relative", right: "-9%" }}>
        Cart
      </a>

      <div
        class="card mb-3 mx-3"
        style={{
          width: "90%",
          height: "10%",
          position: "relative",
          right: "-7%",
        }}
      >
        <div>

        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
    
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartDetails;
