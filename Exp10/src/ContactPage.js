import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const ContactPage = () => {
  const navigate = useNavigate(); 
  const handleNavigate = () => {
    navigate("/");  
  };
  return (
    <Container>
      <ContactInfo>
      <Logo onClick={handleNavigate}>
          <img src="./galaxy1.jpg" alt="" />
        </Logo>
        <h2>Contact Us</h2>
        <InfoItem>
          <strong>Company Name:</strong> Gaming Galaxy
        </InfoItem>
        <InfoItem>
          <strong>Address:</strong> 1234 Street, City, Country
        </InfoItem>
        <InfoItem>
          <strong>Email:</strong> gaminggalaxy@gmail.com
        </InfoItem>
        <InfoItem>
          <strong>Contact Number:</strong> 8928468145
        </InfoItem>
      </ContactInfo>
      <MapContainer>
      <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.6013287383325!2d72.88601581040813!3d19.081258251733637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8866a456c9f%3A0x8d1745d15baac575!2sDon%20Bosco%20Institute%20of%20Technology%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1696955491266!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      />


      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ContactInfo = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.div`
    width:100px;
    height: auto;
    margin-bottom: 20px;
    img{
        width: 100%;
    }
    
`;

const InfoItem = styled.div`
  margin-bottom: 10px;
`;

const MapContainer = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default ContactPage;
