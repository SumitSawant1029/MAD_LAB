import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';

const ContactPage = () => {
 
  
  return (
    <>
      <Navbar/>
      <div style={{height:"780px"}}>

      <img src="/background-contactus.jpg" style={{ position:"absolute",width:"37%",height:"60%",top:"9%",right:"7%"}} alt="..." />
      <div className="card mx-3" style={{ position:"absolute",width:"20%",height:"46%",top:"15%",right:"48%" }}>
        <div className="mx-3 my-3">

        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6013287383325!2d72.88601581040813!3d19.081258251733637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d15baac575!2sDon%20Bosco%20Institute%20of%20Technology%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1696955491266!5m2!1sen!2sin"
          width='375px'
          height='375px'
          style={{ border: "1"}}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
        </div>
        <div className="card-body">
          <p className="card-text">
          Don Bosco Institute of Technology,
          Premier Automobiles Road, Opp. Fiat Company,
          Kurla (W), Mumbai - 400070,
          Maharashtra, India.
          </p>
        </div>
      </div>
      <div>
        
      <div className="card" style={{ position:"absolute",width:"20%",height:"46%",top:"15%",right:"74%" }}>
        <img src="/ContactUs.jpg" style={{width:"375px"}} className="card-img-top mx-3" alt="..." />
        <div className="card-body">
          <p className="card-text">
          Phone: 9372471518<br></br>
          Fax: 32094839409<br></br>
          Email: gaminggalaxy@care.com
          </p>
        </div>
      </div>
      </div>
      </div>
  
      <Footer/>
    </>
  );
};


export default ContactPage;
